import React from 'react';
import { AssertionList } from './assertionList';
import { nicinabox as theme } from 'redux-devtools-themes';

export function TestItem({tests, id, depth}) {
    const test = tests[id];
    if (!test) return null;
    const { name, subtests, assertions } = test;

    const subtestsComponents = subtests.map(function(subtestId){
        const childDepth = depth + 1;
        const style = {
            marginLeft: childDepth * 30,
        }
        return <div style={style}>
            <TestItem id={subtestId} key={subtestId} tests={tests} depth={childDepth}/>
        </div>
    });

    return <div style={styles.container}>
        <div style={styles.name}>{name}</div>
        <AssertionList style={styles.assertionList} assertions={assertions}/>
        { subtestsComponents }
    </div>
}

const styles = {
    container: {
        maringTop: 5,
    },
    assertionList: {
        marginLeft: 30,
    },
    name: {
        padding: 5,
        background: theme.base01,
        color: theme.base06,
    }
}
