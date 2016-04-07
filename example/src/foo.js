import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

export default function Foo({onButtonClick}) {
    return <button on-click={onButtonClick}>click!</button>;
}

test('<Foo />', (t) =>{
    const onButtonClick = sinon.spy();
    onButtonClick();
    const wrapper = shallow(
        <Foo onButtonClick={onButtonClick} />
    );
    wrapper.find('button').simulate('click');
    t.ok(onButtonClick.calledOnce, 'has a clickable button');
    t.end();
});
