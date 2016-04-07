import test from 'tape';
import expect from 'expect';
import React from 'react';
import { render } from 'react-dom';
import MyComponent from './my-component';

if(process.env.NODE_ENV === 'ci') {
    test.onFinish(function(){
        window.close();
    });
}

render(<MyComponent>This component achieves nothing</MyComponent>, document.getElementById('app'));

test('top level test case', function(t){
    t.pass('top-level assertion');

    t.test('sub level test case', function(tt) {
        tt.pass('sub level assertion');
        tt.end();
    });

    t.end();
});

test('using some extra lib', function(t){
    expect(true).toExist();
    t.pass('works perfectly well');
    t.end();
});

test('tape API coverage', function(t){

    t.skip('t.skip')
    t.comment('t.comment');
    t.pass('t.pass');
    t.fail('t.fail');
    t.error(new Error('message error'), 't.error');
    t.throws(function(){
        // throw new Error('YOLO')
    }, 't.throw');
    t.doesNotThrow(function(){
        throw new Error('thrown on purpose');
    }, 't.doesNotThrow');
    t.equal(3, 4, 't.deepEqual');
    t.deepEqual({a:1, b:{c: 3}}, {a:1, b:{c: 2}}, 't.deepEqual');

    t.test('t.timeout', function(tt){
        tt.timeoutAfter(50);
        setTimeout(function(){
            tt.end();
        }, 100);
    });

    t.end();
});
