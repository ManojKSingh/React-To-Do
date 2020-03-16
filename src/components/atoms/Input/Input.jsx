import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
    padding: 10px;
    border: 2px solid ${props => props.theme.borderColor};
    border-radius: 4px;
    margin: 0 5px;
`;

StyledInput.displayName = 'input';

const InputRef = ({type, placeholder, onChange, ...otherProps}, ref) => (
    <StyledInput type={type} ref={ref} placeholder={placeholder} onChange={onChange} {...otherProps} />
);

const Input = ({type, placeholder, onChange, ...otherProps}) => (
    <StyledInput type={type} placeholder={placeholder} onChange={onChange} {...otherProps} />
);

Input.defaultProps = {
  type: 'text'
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export const RefInput = React.forwardRef(InputRef);

export {Input};