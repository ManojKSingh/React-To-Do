import React from 'react';
import { ToDoReducer } from './ToDoReducer';

describe('To Do Reducer', () => {
  let initState;

  beforeEach(() => {
    initState = {};
  });
  it('should return initial state', () => {
    const action = {
      type: ''
    }
    const computedState = ToDoReducer(initState, action);
    expect(computedState).toEqual(initState);
  });

  it('should add to do', () => {
    const action = {
      type: 'ADD_TO_DO',
      todo: {
        id: 1,
        value: 'first item in list'
      }
    }

    const resultingState = {
      '1': {
        value: 'first item in list',
        isDone: false
      }
    }
    const computedState = ToDoReducer(initState, action);
    expect(computedState).toEqual(resultingState);
  });

  it('should delete to do by id', () => {
    initState = {
      '1': {
        value: 'first item in list',
        isDone: false
      },
      '2': {
        value: 'second item in list',
        isDone: false
      }
    }

    const resultingState = {
      '2': {
        value: 'second item in list',
        isDone: false
      }
    }

    const action = {
      type: 'DELETE_TO_DO',
      id: '1'
    }
    const computedState = ToDoReducer(initState, action);
    expect(computedState).toEqual(resultingState);
  });

  it('should mark to do as done by id', () => {
    initState = {
      '1': {
        value: 'first item in list',
        isDone: false
      },
      '2': {
        value: 'second item in list',
        isDone: false
      }
    }

    const resultingState = {
      '1': {
        value: 'first item in list',
        isDone: false
      },
      '2': {
        value: 'second item in list',
        isDone: true
      }
    }

    const action = {
      type: 'UPDATE_TO_DO',
      id: '2'
    }
    const computedState = ToDoReducer(initState, action);
    expect(computedState).toEqual(resultingState);
  });

  it('should mark to do as un-done by id', () => {
    initState = {
      '1': {
        value: 'first item in list',
        isDone: true
      },
      '2': {
        value: 'second item in list',
        isDone: false
      }
    }

    const resultingState = {
      '1': {
        value: 'first item in list',
        isDone: false
      },
      '2': {
        value: 'second item in list',
        isDone: false
      }
    }

    const action = {
      type: 'UPDATE_TO_DO',
      id: '1'
    }
    const computedState = ToDoReducer(initState, action);
    expect(computedState).toEqual(resultingState);
  });
});