import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

export default function({store, controls}) {
    return <Provider store={store}>
        <App controls={controls}/>
    </Provider>;
}
