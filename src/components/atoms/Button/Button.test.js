import React from 'react';
import { renderWithTheme } from '../../../test-helper';
import { Button } from './Button';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Button/>', () => {
  it('renders correctly default button', () => {
    const tree = renderWithTheme(<Button>Add</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly remove button', () => {
    const tree = renderWithTheme(<Button styleType='remove'>x</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

