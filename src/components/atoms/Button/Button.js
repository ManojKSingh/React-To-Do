import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${props => props.theme.button.bgColor};
    color: ${props => props.theme.button.textColor};
    font-weight: bold;
    padding: 10px;
    margin: 0 5px;
    border: 2px solid ${props => props.theme.borderColor};
    border-radius: 4px;
    ${props =>
        props.styleType === 'remove'
        ? `
            padding: 2px 6px;
            border-radius: 50%;
            margin-left: auto;
            width: 22px;
            height: 22px;
            line-height: 0;
        `:``}
`;

const Button = ({children, ...otherProps}) => (
    <StyledButton {...otherProps}>
        {children}
    </StyledButton>
);

export default Button;
