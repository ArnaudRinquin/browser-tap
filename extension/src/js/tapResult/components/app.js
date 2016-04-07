import React from 'react';
import { connect } from 'react-redux';
import Controls from './controls';
import TestList from './testList';
import TestSummary from './testSummary';
import { nicinabox as theme } from 'redux-devtools-themes';

export function App({controls, connected, options}) {
    if (!connected) {
        return <div style={styles.container}>
            Waiting for app to connect...
            <button onClick={controls.pingTapExtension}>Try</button>
        </div>
    }

    function setOption(newOptions) {
        controls.postMessageToBackground({
            type: 'setOptions',
            newOptions,
        })
    }

    return <div style={styles.container}>
        <Controls startTesting={controls.startTesting} setOptions={setOption}/>
        <TestSummary/>
        <TestList/>
        {/*<Colors/>*/}
    </div>;
}

export default connect(function({extension}){
    const { connected, options } = extension;
    return {
        connected,
        options,
    }
})(App)

const styles = {
    container: {
        fontFamily: 'monaco, Consolas, Lucida Console, monospace',
        position: 'relative',
        overflowY: 'hidden',
        width: '100%',
        height: '100%',
        direction: 'ltr',
        background: theme.base00,
        color: theme.base07,
    },
}

function Colors () {
    const colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'].map(function(index){
        const color = theme[`base0${index}`];
        const style = {
            backgroundColor: color
        }
        return <div key={index} style={style}>base0{index}: {color}</div>;
    });

    return <div>{colors}</div>;
}
