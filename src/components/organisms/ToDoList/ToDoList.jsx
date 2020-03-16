import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styles from './ToDoList.style';
import {RefInput} from '../../atoms/Input/Input';
import {Heading} from '../../atoms/Heading';
import { Button } from '../../atoms/Button';
import {ToDoItem} from '../../molecules/ToDoItem';
import {Switch} from '../../atoms/Switch';
import { ToDoContext } from '../../../contexts/ToDoContext';

const ToDoList = (props) => {
		//states
		const [inputValue, setInputValue] = useState('');
		const [id, setId] = useState(0);

		//Context
		const {ToDos, dispatch} = useContext(ToDoContext);

		const todoInputRef = useRef(null);

		useEffect(()=>{
			todoInputRef.current && todoInputRef.current.focus()
		}, []);

		//Events
		const handleOnSubmit = (e) => {
			e.preventDefault();
			const action  = {
				type: 'ADD_TO_DO',
				todo: {
					id: id + 1,
					value: inputValue
				}
			}
			dispatch(action);

			//reset values
			setId(id+1);
			setInputValue('');
			todoInputRef.current && todoInputRef.current.focus()
    }

		const removeItem = (event, id) => {
			event.stopPropagation();
			const action = {
				type: 'DELETE_TO_DO',
				id: id
			}
			dispatch(action);
    }

    const markDone = (id) => {
			const action = {
				type: 'UPDATE_TO_DO',
				id: id
			}
			dispatch(action);
    }

		const {className} = props;
		
		return (
			<div className={className}>
					<div className="theme-switch">
						<Switch onChange={props.toggleTheme}/>
						Dark Mode
					</div>
					<div className="to-do-container">
							<Heading text="To Do List" />
							<form onSubmit={handleOnSubmit}>
								<RefInput type="text"
									className="to-do-input"
									ref={todoInputRef}
									name="toDo"
									value={inputValue}
									onChange={(e) => setInputValue(e.target.value)}/>
								<Button type="submit">Add</Button>
							</form>
							<div>
								{
									Object.keys(ToDos).map((key, index) => {
										const item = ToDos[key];
										return (
											<ToDoItem key={index} 
												isDone={item.isDone}
												itemId={key}
												markDone={markDone}
												onRemove={removeItem}>
												{item.value}
											</ToDoItem>
										);
									})
								}
							</div>
					</div>
			</div>);
}

ToDoItem.propTypes = {
	toggleTheme: PropTypes.func,
};

ToDoItem.defaultProps = {
  className: ''
};

const styledContainer = styled(ToDoList)`
  ${styles};
`;

export {styledContainer as ToDoList}