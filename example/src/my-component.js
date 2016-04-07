import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Foo from './foo';

export default function MyComponent ({children}) {
    return <div>
        <span className="icon-star">icon</span>
        <Foo/>
        <Foo/>
        <Foo/>
        {children}
    </div>;
}

test('<MyComponent />', (t) => {
    const wrapper = shallow(<MyComponent>
      <div className="unique" />
    </MyComponent>);

    t.equal(wrapper.find(Foo).length, 3, 'renders three <Foo /> components');
    t.equal(wrapper.find('.icon-star').length, 1, 'renders an `.icon-star`');
    t.ok(wrapper.contains(<div className="unique" />), 'renders children when passed in');
    t.end();
});
