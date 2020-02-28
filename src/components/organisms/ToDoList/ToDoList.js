import React from 'react';
import styled from 'styled-components';
import styles from './ToDoList.style';
import {RefInput} from '../../atoms/Input/Input';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import ToDoItem from '../../molecules/ToDoItem';
import Switch from '../../atoms/Switch';

class ToDoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputText: '',
            count: 0,
            toDoList: {}
        }
        this.todoInputRef = React.createRef();
        this.toDoOnChange = this.toDoOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.markDone = this.markDone.bind(this);
    }

    componentDidMount() {
        this.todoInputRef.current.focus();
    }

    toDoOnChange(event) {
        const text = event.target.value;
        console.log(text);
        this.setState({
            inputText: text
        });
    }

    handleOnSubmit(e) {
        e.preventDefault();
        const value = this.state.inputText;

        if(!value) return false;

        this.setState(oldState => ({
            toDoList: {...oldState.toDoList, 
            [oldState.count+1]: {
                value: value,
                isDone: false
            }},
            inputText: "",
            count: oldState.count+1
        }));

        this.todoInputRef.current.focus();
    }

    removeItem(id) {
        this.setState(oldState => {
            const {[id]: removed, ...rest} = oldState.toDoList;
            console.log("removed", removed);
            return {
                ...oldState,
                toDoList: rest
            }
        })
    }

    markDone(id) {
        this.setState(oldState => {
            const {[id]: current, ...rest} = oldState.toDoList;
            const updatedCurrent = {...current, isDone: !current.isDone};
            return {
                ...oldState,
                toDoList: {...rest, [id]: updatedCurrent}
            }
        })
    }

    render() {
        const {className} = this.props;
        return (
            <div className={className}>
                <div className="theme-switch">
                    <Switch onChange={this.props.toggleTheme}/>
                    Dark Mode
                </div>
                <div className="to-do-container">
                    <Heading text="To Do List" />
                    <form onSubmit={this.handleOnSubmit}>
                        <RefInput type="text"
                            ref={this.todoInputRef}
                            name="toDo"
                            value={this.state.inputText}
                            onChange={this.toDoOnChange}/>
                        <Button type="submit">Add</Button>
                    </form>
                    <div>
                        {
                            Object.keys(this.state.toDoList).map((key, index) => {
                                const item = this.state.toDoList[key];
                                return (
                                    <ToDoItem key={index} 
                                        isDone={item.isDone}
                                        itemId={key}
                                        markDone={this.markDone}
                                        onRemove={this.removeItem}>
                                        {item.value}
                                    </ToDoItem>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default styled(ToDoList)`
  ${styles};
`;