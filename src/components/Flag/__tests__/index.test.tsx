import React from 'react';
import renderer from 'react-test-renderer';

import Flag from '../index';

describe('Flag', () => {
  test('renders correctly', () => {
    const result = renderer.create(<Flag countryCode="CA" />).toJSON();
    expect(result).toMatchSnapshot();
  });

  test('renders flat image correctly', () => {
    const result = renderer
      .create(<Flag countryCode="CA" variant="flat" />)
      .toJSON();
    expect(result).toMatchSnapshot();
  });

  test('checks country code for "IN"', () => {
    const result = renderer
      .create(<Flag countryCode="IN" variant="flat" />)
      .toJSON();
    expect(result).toMatchSnapshot();
  });

  test('checks country code for "DO"', () => {
    const result = renderer
      .create(<Flag countryCode="DO" variant="flat" />)
      .toJSON();
    expect(result).toMatchSnapshot();
  });
});
