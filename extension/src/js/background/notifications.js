const notificationId = 'tapExtension';

export function sendNotification(options) {
    chrome.notifications.create(notificationId, options);
}
