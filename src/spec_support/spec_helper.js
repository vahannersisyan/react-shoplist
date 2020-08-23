import React from 'react';
import Enzyme from 'enzyme';

let globals;

beforeAll(() => {
  globals = {
    // Deferred,
    // MockPromises,
    React,
    mount: Enzyme.mount,
    shallow: Enzyme.shallow,
    render: Enzyme.render,
  };

  Object.assign(global, globals);
});
