export default function createAutoStartMiddleware(startTesting) {

    let started;

    return store => next => action => {
        next(action);
        const { type } = action;
        const { tapStatus, extension } = store.getState();
        const { status } = tapStatus;
        const { options } = extension;
        const { autoStart } = options;

        if (type === 'tapResult/init' && autoStart) {
            startTesting();
            return;
        }
    }
};
