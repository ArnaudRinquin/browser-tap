import { renderTapResult } from '.';
import samples from './results.sample';

const appRoot = document.getElementById('app');

window.app = renderTapResult(appRoot, {
    startTesting(){
        samples.forEach(function(sample) {
            window.app.dispatch({
                ...sample,
                type: `tapResult/${sample.type}`,
            });
        });

        for(let i = 30; i < 80; i++) {
            window.app.dispatch({
                id: i,
                name: `sample test ${i}`,
                type: `tapResult/test`,
            });
        }

        window.app.dispatch({
            type: `tapResult/endAll`,
        });
    },
    pingTapExtension(){
        window.app.dispatch({type: 'tapResult/init'});
    },
    postMessageToBackground(message){
        console.log('MESSAGE TO BACKGROUND', message);
    }
});
