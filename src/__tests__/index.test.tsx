import React from 'react';
import renderer from 'react-test-renderer';

import Flag from '../index';

test('Flag', () => {
  const result = renderer.create(<Flag />).toJSON();
  expect(result).toMatchSnapshot();
});
