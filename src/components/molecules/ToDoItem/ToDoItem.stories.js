import React from 'react';
import ToDoItem from './ToDoItem';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Molecule/ToDoItem',
  component: ToDoItem,
};

export const toDoItem = () => (<ToDoItem isDone={false}
                                itemId='1'
                                markDone={action('Action to mark done')}
                                onRemove={action('Action to remove item')}>
                                Create Story Book
                            </ToDoItem>);