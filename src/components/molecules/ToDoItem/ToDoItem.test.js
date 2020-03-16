import React from "react";
import { renderWithTheme } from "../../../test-helper";
import {ToDoItem} from "./ToDoItem";

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("<ToDoItem/>", () => {
  it("renders correctly", () => {
    const mockOnRemove = jest.fn();
    const mockMarkDone = jest.fn();
    const tree = renderWithTheme(
      <ToDoItem
        itemId={1}
        isDone={false}
        onRemove={mockOnRemove}
        markDone={mockMarkDone}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when mark done", () => {
    const mockOnRemove = jest.fn();
    const mockMarkDone = jest.fn();
    const tree = renderWithTheme(
      <ToDoItem
        itemId={1}
        isDone={true}
        onRemove={mockOnRemove}
        markDone={mockMarkDone}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
