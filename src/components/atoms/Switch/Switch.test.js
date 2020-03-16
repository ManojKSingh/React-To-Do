import React from 'react';
import { renderWithTheme } from '../../../test-helper';
import {Switch} from './Switch';

describe('<Switch/>', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Switch />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});