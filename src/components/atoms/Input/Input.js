import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    padding: 10px;
    border: 2px solid ${props => props.theme.borderColor};
    border-radius: 4px;
    margin: 0 5px;
`;

const InputRef = ({type, placeholder, ...otherProps}, ref) => (
    <StyledInput type={type} ref={ref} placeholder={placeholder} {...otherProps} />
);

const Input = ({type, placeholder, ...otherProps}) => (
    <StyledInput type={type} placeholder={placeholder} {...otherProps} />
);

export const RefInput = React.forwardRef(InputRef);

export default Input;