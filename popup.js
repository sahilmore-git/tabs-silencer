// Function to update the button text based on mute state
function updateButton(muted) {
  const status = muted ? 'Unmute All Tabs' : 'Mute All Tabs';
  document.getElementById('toggleButton').textContent = status;
}

// Set up message listener to update the button when receiving status updates
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'updatePopup') {
    updateButton(message.muted);
  }
});

// Set up event listener for the button
document.getElementById('toggleButton').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'toggleMuteAll' });
});

document.getElementById('toggleCurrentButton').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    chrome.runtime.sendMessage({ action: 'toggleMuteCurrentTab', tabId: currentTab.id });
  });
});

// Notify background script that popup is loaded
chrome.runtime.sendMessage({ action: 'popupLoaded' });
