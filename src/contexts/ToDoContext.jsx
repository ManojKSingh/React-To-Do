import React, { createContext, useReducer } from 'react';
import { ToDoReducer } from '../reducers/ToDoReducer'

export const ToDoContext = createContext();

const ToDoContextProvider = (props) => {
    const [ToDos, dispatch] = useReducer(ToDoReducer, {});
    return (
        <ToDoContext.Provider value={{ToDos, dispatch}}>
            {props.children}
        </ToDoContext.Provider>
    )
}

export default ToDoContextProvider;