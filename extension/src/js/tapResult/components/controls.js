import React from 'react';
import { connect } from 'react-redux';
import { resetStatus } from '../ducks/tapStatus';
import { nicinabox as theme } from 'redux-devtools-themes';
import { notificationsOptions } from '../../background/options';

export function Controls({startTesting, resetStatus, options, setOptions}) {

    function onStartTesting(){
        resetStatus();
        startTesting();
    }

    function onToggleAutoStart(){
        const { autoStart } = options;
        setOptions({
            autoStart: !autoStart,
        });
        if (!autoStart) {
            resetStatus();
            startTesting();
        }
    }

    function onCycleNotifications(){
        const { notifications } = options;
        const currentIndex = notificationsOptions.indexOf(notifications);
        const newNotifications = notificationsOptions[(currentIndex + 1) % notificationsOptions.length];
        setOptions({
            notifications: newNotifications,
        });
    }

    return <div style={styles.buttonBar} className="controls">
        <a style={styles.button} onClick={onStartTesting}>Start Testing</a>
        <a style={styles.button} onClick={onToggleAutoStart}>Autorun: {options.autoStart ? 'on':'off'}</a>
        <a style={styles.button} onClick={onCycleNotifications}>Notifications: {options.notifications}</a>
    </div>
}

export default connect(function({extension}){
    const { options } = extension;
    return { options, };
}, {
    resetStatus,
})(Controls)

const styles = {
    buttonBar: {
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderColor: 'transparent',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: theme.base00,
    },
    button: {
        backgroundColor: theme.base01,
        cursor: 'pointer',
        fontWeight: 'bold',
        borderRadius: 3,
        padding: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 5,
        marginBottom: 5,
        flexGrow: 1,
        display: 'inline-block',
        fontSize: '0.8em',
        color: 'white',
        textDecoration: 'none',
    }
}
