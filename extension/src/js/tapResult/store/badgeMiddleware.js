export default function createBadgeMiddleware(postMessageToBackground) {
    return store => next => action => {
        next(action);
        const { tapStatus, extension } = store.getState();
        const { connected } = extension;
        const { status, assertCount, okCount, errorCount } = tapStatus;

        const path = (!connected || status === 'empty') ? 'images/icon48-grey.png' :
            (status === 'running') ? 'images/icon48-blue.png' :
                errorCount ? 'images/icon48-red.png' : 'images/icon48-green.png';

        const text = !assertCount ? '' :
            (errorCount ? errorCount : assertCount) + '';

        const color = errorCount ? '#AA0000' : '#00AA00';
        const showBadge = assertCount ? true : false;

        postMessageToBackground({
            type: 'badgeUpdate',
            text,
            showBadge,
            color,
            path,
        });
    }
};
