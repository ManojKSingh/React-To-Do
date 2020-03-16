import React from "react";
import { renderWithTheme } from "../../../test-helper";
import {ToDoList} from "./ToDoList";
import {ToDoItem} from "../../molecules/ToDoItem";
import ToDoContextProvider from '../../../contexts/ToDoContext';
import { ThemeProvider } from 'styled-components';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import themes from '../../../themes';

const theme = themes['light'];

configure({ adapter: new Adapter() });

describe("<ToDoList/>", () => {
  it("renders correctly", () => {
    const mockThemeToggle = jest.fn();
    const tree = renderWithTheme(
      <ToDoContextProvider>
        <ToDoList
          toggleTheme={mockThemeToggle}
        />
      </ToDoContextProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Test add to', () => {
    const mockThemeToggle = jest.fn();

    const toDoList = mount((
    <ThemeProvider theme={theme}>
    <ToDoContextProvider>
        <ToDoList
          toggleTheme={mockThemeToggle}
        />
      </ToDoContextProvider>
    </ThemeProvider>));
    toDoList.find('.to-do-input').first().simulate('change', { target: { value: 'Hello' } })
    toDoList.find('form').simulate('submit');
    expect(toDoList.find(ToDoItem)).toHaveLength(1);
    toDoList.find('.to-do-input').first().simulate('change', { target: { value: 'Hello' } })
    toDoList.find('form').simulate('submit');
    expect(toDoList.find(ToDoItem)).toHaveLength(2);
  });
});
