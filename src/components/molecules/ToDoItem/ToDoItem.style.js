import { css } from 'styled-components';

const AppStyles = css`
    display: flex;
    align-items: center;
    padding: 15px 5px 15px 15px;
    margin: 10px 0;
    border: 1px solid ${props => props.theme.itemBorderColor};
    &.disable {
        background-color: ${props => props.theme.disableBgColor};
        color: ${props => props.theme.disableTextColor};
    }
    .item-text {
        text-align: justify;
        padding-right: 10px;
        cursor: pointer;
    }
    .item-text.marked {
        text-decoration: line-through;
    }
`;

export default AppStyles;