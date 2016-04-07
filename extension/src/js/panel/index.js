import { init, onMessage, postMessage } from './backgroundConnection';
import { renderTapResult } from '../tapResult';

const controls = {
    pingTapExtension() {
        chrome.devtools.inspectedWindow.eval(
            'window.pingTapExtension();',
            { useContentScriptContext: false }
        );
    },
    startTesting(){
        // Send message directly into inspected window
        chrome.devtools.inspectedWindow.eval(
            'window.startTesting();',
            { useContentScriptContext: false }
        );
    },
    postMessageToBackground: postMessage,
};

init();

const appRoot = document.getElementById('app');
const app = renderTapResult(appRoot, controls);

onMessage(app.dispatch);
