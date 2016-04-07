export default function createNotificationsMiddleware(postMessageToBackground) {

    function sendNotification(options) {
        postMessageToBackground({
            type: 'sendNotification',
            options,
        });
    }

    return store => next => action => {
        next(action);
        const { type } = action;

        if (type !== 'tapResult/endAll') return;

        const { tapStatus, extension } = store.getState();
        const { errorCount, assertCount, okCount } = tapStatus;
        const { options } = extension;
        const { notifications } = options;

        if (notifications === 'none') return;

        const message = `tests: ${assertCount}, passing: ${okCount}` + (errorCount ? `, errors: ${errorCount}` : '');

        if (errorCount) {
            sendNotification({
                type: 'basic',
                title: 'Browser TAP failure!',
                iconUrl: '/images/icon128-red.png',
                message,
            });
            return;
        }

        if (notifications === 'always') {
            sendNotification({
                type: 'basic',
                title: 'Browser TAP',
                iconUrl: '/images/icon128-green.png',
                message,
            });
        }
    }
};
