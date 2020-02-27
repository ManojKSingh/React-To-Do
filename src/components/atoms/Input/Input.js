import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    padding: 10px;
    border: 2px solid ${props => props.theme.borderColor};
    border-radius: 4px;
    margin: 0 5px;
`;

const Input = ({type, placeholder}) => (
    <StyledInput type={type} placeholder={placeholder} />
);

export default Input;