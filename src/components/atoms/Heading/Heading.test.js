import React from 'react';
import { renderWithTheme } from '../../../test-helper';
import {Heading} from './Heading';

describe('<Heading/>', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Heading text="To Do List" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});