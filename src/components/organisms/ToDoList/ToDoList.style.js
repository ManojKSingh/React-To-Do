import { css } from 'styled-components';
import breakPoints from '../../../breakpoint';

const AppStyles = css`
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
    .to-do-container {
        padding: 20px;
        text-align: center;
        margin: 20px auto;
        @media (min-width: ${breakPoints.desktop}) {
            width: 350px;
        }
    }
    .theme-switch {
        line-height: 32px;
        font-weight: 900;
        font-size: 20px;
    }
`;

export default AppStyles;