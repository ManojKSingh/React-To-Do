import React from 'react';
import {ToDoList} from './ToDoList';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Organisms/ToDoList',
  component: ToDoList,
};

export const toDoItem = () => (<ToDoList toggleTheme={action("Action to toggle to theme")}/>);