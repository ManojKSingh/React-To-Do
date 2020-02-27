import React from 'react';
import styled, { css } from 'styled-components';

const styles = css`
    background-color: ${props => props.theme.button.bgColor};
    color: ${props => props.theme.button.textColor};
    font-weight: bold;
    padding: 10px;
    margin: 0 5px;
    border: 2px solid ${props => props.theme.borderColor};
    border-radius: 4px;
`;

const Button = ({children, ...otherProps}) => (
    <button {...otherProps}>
        {children}
    </button>
);

export default styled(Button)`
  ${styles};
`;
export { Button as ButtonVanilla };
