# Tabs Silencer Chrome Extension

## Overview

- The Tabs Silencer Chrome Extension allows you to mute or unmute all tabs in Chrome with a single button click. 
- It also provides the functionality to mute or unmute the currently active tab. 

This README explains how to set up and use the extension in Developer Mode:

## Features

- **Mute/Unmute All Tabs:** Toggle the mute state for all open tabs at once.
- **Mute/Unmute Current Tab:** Toggle the mute state for the currently active tab.
- **Real-time Status Updates:** Button text updates to reflect the current mute state.

## Installation

### Prerequisites

- Google Chrome Browser (latest version recommended)

### Steps to Install and Test

1. **Download or Clone the Repository**

   - If you haven't already, download or clone the repository containing the extension code.
   - Extract it to a folder of your choice.

2. **Open Chrome Extensions Page**

   - Open Google Chrome.
   - Navigate to `chrome://extensions/`.

3. **Enable Developer Mode**

   - Toggle the "Developer mode" switch in the top-right corner of the extensions page.

4. **Load Unpacked Extension**

   - Click the "Load unpacked" button.
   - Select the folder where you downloaded or cloned the repository.

5. **Test the Extension**

   - Once the extension is loaded, a red mute icon should appear next to the Chrome address bar.
   - Click the extension icon to open the popup.
   - Use the "Mute All Tabs" button to mute or unmute all open tabs.
   - Use the "Mute/Unmute Current Tab" button to toggle the mute state for the currently active tab.

## ⭐ Star This Repository

If you like what you see, please consider giving this repository a star! 🌟

[![Star this repository](https://img.shields.io/github/stars/sahilmore-git/tabs-silencer?style=social)](https://github.com/sahilmore-git/tabs-silencer)

## Screenshots:
### Mute all tabs:
![Mute all tabs](https://github.com/user-attachments/assets/8fc46287-c392-4027-9d12-2e3a879660ce)
### Unmute all tabs:
![Unmute all tabs](https://github.com/user-attachments/assets/6165ccd9-d286-4492-a0d8-c779a74655ff)
### Mute/Unmute current tab:
![Mute/Unmute current tab](https://github.com/user-attachments/assets/354218d7-29c5-4a3c-a744-a018f3cb5f0a)


## Development

### Structure

- **`manifest.json`**: Contains metadata, permissions, and configurations for the extension.
- **`background.js`**: Manages the extension's background processes, including muting and unmuting tabs.
- **`popup.html`**: Defines the user interface for the extension popup.
- **`popup.js`**: Contains the script that handles user interactions and updates the UI.
- **`icons/`**: Contains the the icons for the extension.

## Contribution

Feel free to contribute to this project by submitting issues or pull requests. Your feedback and improvements are welcome!

## License

This project is licensed under the [MIT License](LICENSE).

---

If you encounter any issues or have questions, please open an issue in the repository or contact me on contactsahilmore@gmail.com
