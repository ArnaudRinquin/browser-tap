import React from 'react';
import { connect } from 'react-redux';
import { nicinabox as theme } from 'redux-devtools-themes';

const statusColors = {
    finished: theme.base0B,
    empty: theme.base03,
    running: theme.base07,
}

export function TestSummary({ status, assertCount, okCount, errorCount }) {

    const resultStyle = {
        color: errorCount ? theme.base09 :
            assertCount > 0 && assertCount === okCount ? theme.base0B : theme.base03,
    }

    const statusStyle = {
        color: statusColors[status],
    };

    const errors = errorCount ?
        <span style={styles.counter}>errors: {errorCount}</span> :
        null;

    return <section style={styles.container}>
        <div style={statusStyle}>Status: {status}</div>
        <div style={resultStyle}>
            <span style={styles.counter}>total: {assertCount}</span>
            <span style={styles.counter}>passing: {okCount}</span>
            {errors}
        </div>
    </section>
}

export default connect(function({tapStatus}) {
    const {
        status,
        assertCount,
        okCount,
        errorCount,
    } = tapStatus;

    return {
        status,
        assertCount,
        okCount,
        errorCount,
    };

})(TestSummary)

const styles = {
    container: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    counter: {
        marginRight: 10,
    }
}
