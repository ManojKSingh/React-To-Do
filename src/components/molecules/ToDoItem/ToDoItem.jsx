import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styles from './ToDoItem.style';
import { Button } from '../../atoms/Button';

const ToDoItem = ({itemId, isDone, onRemove, markDone, className, children, ...otherProps}) => {
    return (
        <div className={`${className} ${isDone ? 'disable' : ''}`} onClick={() => markDone(itemId)}>
            <div className={`item-text ${isDone ? 'marked': ''}`}>{children}</div>
            <Button styleType='remove' onClick={(e) => onRemove(e, itemId)}>x</Button>
        </div>
    );
}

ToDoItem.defaultProps = {
  className: ''
};

ToDoItem.propTypes = {
	itemId: PropTypes.string,
  isDone: PropTypes.bool,
  onRemove: PropTypes.func,
  markDone: PropTypes.func
};

const container = styled(ToDoItem)`
    ${styles}
`;

export {container as ToDoItem}