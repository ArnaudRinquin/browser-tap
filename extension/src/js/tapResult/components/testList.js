import React from 'react';
import { connect } from 'react-redux';
import { TestItem } from './testItem';

export function TestList({tests}) {

    const topLevelTests = Object.keys(tests).map(function(id){
        return tests[id];
    }).filter(function hasNoParent(test){
        return !test.parent;
    }).map(function({id}){
        return <TestItem id={id} key={id} tests={tests} depth={0}/>
    });

    return <div>
        {topLevelTests}
    </div>
}

export default connect(function({tapStatus}) {
    const {tests} = tapStatus;
    return {
        tests,
    }
})(TestList)
