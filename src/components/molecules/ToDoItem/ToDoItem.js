import React from 'react';
import styled from 'styled-components';
import styles from './ToDoItem.style';
import Button from '../../atoms/Button';

const ToDoItem = ({children, isDone, itemId, onRemove, markDone, className, ...otherProps}) => {
    return (
        <div className={className}>
            <div className={`item-text ${isDone ? 'marked': ''}`} onClick={() => markDone(itemId)}>{children}</div>
            <Button styleType='remove' onClick={() => onRemove(itemId)}>x</Button>
        </div>
    );
}

export default styled(ToDoItem)`
    ${styles}
`;