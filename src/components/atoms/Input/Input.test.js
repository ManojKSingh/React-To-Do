import React from 'react';
import { renderWithTheme } from '../../../test-helper';
import {Input} from './Input';

import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Input/>', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Input type="text" placeholder="Add to do" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should call onChange prop', () => {
    const onChangeMock = jest.fn();
    const value = 'the-value';
    const component = shallow(<Input type="text" placeholder="Add to do" onChange={onChangeMock}/>);
    component.find('input').simulate('change', value);
    expect(onChangeMock).toBeCalledWith('the-value');
  });
});