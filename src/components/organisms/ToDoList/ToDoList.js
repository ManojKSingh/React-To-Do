import React from 'react';
import styled from 'styled-components';
import styles from './ToDoList.style';
import Input from '../../atoms/Input';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';

class ToDoList extends React.Component {
    render() {
        const {className} = this.props;
        return (
            <div className={className}>
                <div className="to-do-container">
                    <Heading text="To Do List" />
                    <Input type="text" placeholder="To Do"/>
                    <Button>Add</Button>
                </div>
            </div>
        )
    }
}

export default styled(ToDoList)`
  ${styles};
`;