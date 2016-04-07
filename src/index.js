import test from 'tape';
const wrapper = window.tapExtension ? window.tapExtension(test) : test;
export default wrapper;
