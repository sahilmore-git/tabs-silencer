let isMuted = false;
let popupLoaded = false; // Track if the popup is loaded

// Function to mute or unmute all tabs
async function toggleMuteAll() {
  const tabs = await chrome.tabs.query({});
  isMuted = !isMuted;

  for (const tab of tabs) {
    chrome.tabs.update(tab.id, { muted: isMuted });
  }

  // Save the current mute state to storage
  chrome.storage.local.set({ isMuted: isMuted });

  // Notify popup of the current state if loaded
  if (popupLoaded) {
    chrome.runtime.sendMessage({ action: 'updatePopup', muted: isMuted });
  }
}

// Function to mute or unmute the current tab
function toggleMuteCurrentTab(tabId) {
  chrome.tabs.get(tabId, (tab) => {
    const newMuteState = !tab.mutedInfo.muted;
    chrome.tabs.update(tabId, { muted: newMuteState });
  });
}

// Initialize the mute state from storage
function initializeState() {
  chrome.storage.local.get('isMuted', (data) => {
    isMuted = data.isMuted || false;

    // Optionally apply the stored mute state to all tabs
    chrome.tabs.query({}, (tabs) => {
      for (const tab of tabs) {
        chrome.tabs.update(tab.id, { muted: isMuted });
      }
    });

    // Notify popup of the initial state if loaded
    if (popupLoaded) {
      chrome.runtime.sendMessage({ action: 'updatePopup', muted: isMuted });
    }
  });
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'toggleMuteAll') {
    toggleMuteAll();
  } else if (message.action === 'toggleMuteCurrentTab') {
    toggleMuteCurrentTab(message.tabId);
  } else if (message.action === 'popupLoaded') {
    popupLoaded = true;
    // Notify popup of the current mute state when it loads
    chrome.runtime.sendMessage({ action: 'updatePopup', muted: isMuted });
  }
});

// Initialize state on startup
initializeState();
