export function updateBadge({tabId, color, text, path}) {

    chrome.browserAction.setIcon({
        path,
        tabId,
    });
    chrome.browserAction.setBadgeBackgroundColor({
        color,
        tabId,
    });
    chrome.browserAction.setBadgeText({
        text,
        tabId,
    });
}
