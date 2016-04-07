const backgroundPageConnection = chrome.runtime.connect({
    name: "panel"
});

export function postMessage(message) {
    backgroundPageConnection.postMessage({
        ...message,
        tabId: chrome.devtools.inspectedWindow.tabId
    });
}

// initialise with background.js
export function init() {
    postMessage({
        type: 'init',
    });
}

// handle messages from background.js
export function onMessage(callback) {
    backgroundPageConnection.onMessage.addListener(callback);
}
