const defaultOptions = {
    autoStart: true,
    notifications: 'none',
}

export const notificationsOptions = [
    'none', 'onError', 'always',
];

export function createOptionsHandler() {
    let options;
    return {
        set(newOptions, callback) {
            chrome.storage.local.set(newOptions);
            options = {
                ...options,
                ...newOptions,
            };
            callback(options);
            return options;
        },
        get(callback) {
            if (options) {
                callback(options);
            } else {
                chrome.storage.local.get(defaultOptions, function(items) {
                    options = items;
                    callback(items);
                });
            }
        }
    };
}
