import { render } from 'react-dom';
import React from 'react';
import Root from './components/root';
import createStore from './store';
import { pushMessage } from './ducks/tapStatus';
import { bindActionCreators } from 'redux';

export function renderTapResult(element, controls) {
    const store = createStore(controls);

    render(<Root store={store} controls={controls}/>, element);

    setTimeout(function(){
        controls.pingTapExtension();
    }, 500);

    return {
        dispatch: store.dispatch
    }
}
