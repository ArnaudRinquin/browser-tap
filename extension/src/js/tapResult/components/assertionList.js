import React from 'react';
import { nicinabox as theme } from 'redux-devtools-themes';
import JSONTree from 'react-json-tree';

export function ErrorDetails({assertion}) {
    const { operator, actual, expected } = assertion;
    switch (operator) {
        case 'equal':
        case 'notEqual':
        case 'deepEqual':
        case 'notDeepEqual':
        case 'ok':
        case 'notOk':
        case 'looseDeepEqual':
        case 'notLooseDeepEqual':
            const data = {
                actual,
                expected,
            }
            return <JSONTree data={data} theme={theme} hideRoot={true} expandAll={true}/>;
        case 'throws':
        case 'doesNotThrow':
            return <p style={styles.errorText}>an exception was expected or unexptected</p>;
        case 'error':
            return <p style={styles.errorText}>returned an error</p>;
        case 'fail':
            return null;
        default:
            return <div>
                <p style={styles.errorText}>Unhandled error type:</p>
                <JSONTree data={assertion} theme={theme} hideRoot={true} expandAll={true}/>
            </div>;
    }
}

export function AssertionItem({assertion}) {
    const { name, ok } = assertion;
    const style = {
        ...styles.item,
        color: ok ? theme.base0B : theme.base09,
    }

    const details = ok ? null : <ErrorDetails assertion={assertion}/>

    return <div style={style}>
        {name}
        {details}
    </div>
}

export function AssertionList({assertions, style}) {
    const assertionsComponents = assertions.map(function(assertion){
        return <AssertionItem key={assertion.id} assertion={assertion}/>
    });

    return <div style={style}>
        {assertionsComponents}
    </div>
}

const styles = {
    item: {
        backgroundColor: theme.base00,
        marginTop: 5,
        marginBottom: 5,
    },
    errorText: {
        marginLeft: 10,
        color: theme.base03,
    }
}
