import { updateBadge } from './badge';
import { createOptionsHandler } from './options';
import { sendNotification } from './notifications';

const connections = {};
const optionsHandler = createOptionsHandler();

function sendToPanel(tabId, message) {
    connections[tabId].postMessage(message);
}

function sendToAllPanels(message) {
    Object.keys(connections).forEach(function(tabId){
        sendToPanel(tabId, message);
    });
}

// handle messages from panel.js
chrome.runtime.onConnect.addListener(function(port) {

    var extensionListener = function(message, sender, sendResponse) {

        // console.log('Unhandled message from devtools:', message);
        const { type, tabId, newOptions } = message;

        switch (type) {
            // The original connection event doesn't include the tab ID of the
            // DevTools page, so we need to send it explicitly.
            case 'init':
                connections[tabId] = port;
                // follow up and send options
            case 'getOptions':
                // On init, send the devtools the options
                optionsHandler.get(function(options){
                    sendToPanel(tabId, {
                        type: 'options',
                        options,
                    });
                });
                return;
            case 'setOptions':
                optionsHandler.set(newOptions, function(options){
                    sendToPanel(tabId, {
                        type: 'options',
                        options,
                    });
                });
                return;
            case 'badgeUpdate':
                updateBadge(message);
                return;
            case 'sendNotification':
                sendNotification(message.options);
                return;
            default:
                console.log('Unhandled message from devtools:', message);

        }
    }

    // Listen to messages sent from the DevTools page
    port.onMessage.addListener(extensionListener);

    port.onDisconnect.addListener(function(port) {
        port.onMessage.removeListener(extensionListener);

        var tabs = Object.keys(connections);
        for (var i = 0, len = tabs.length; i < len; i++) {
            if (connections[tabs[i]] == port) {
                delete connections[tabs[i]]
                break;
            }
        }
    });
});

// Receive message from contentScript.js and relay to the panel.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // Messages from content scripts should have sender.tab set
    if (sender.tab) {
        const tabId = sender.tab.id;
        if (tabId in connections) {
            sendToPanel(tabId, message);
        } else {
            console.log("Tab not found in connection list.");
        }
    } else {
        console.log("Sender.tab not defined.", message);
    }
    return true;
});
