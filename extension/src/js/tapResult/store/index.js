import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../ducks';
import createBadgeMiddleware from './badgeMiddleware';
import createAutoStartMiddleware from './autoStartMiddleware';
import createNotificationsMiddleware from './notificationsMiddleware';

export default function({postMessageToBackground, startTesting}) {
    const middlewares = applyMiddleware(
        createBadgeMiddleware(postMessageToBackground),
        createAutoStartMiddleware(startTesting),
        createNotificationsMiddleware(postMessageToBackground)
    );

    const storeEnhancers = compose(
        middlewares,
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );

    return createStore(rootReducer, storeEnhancers);
}
