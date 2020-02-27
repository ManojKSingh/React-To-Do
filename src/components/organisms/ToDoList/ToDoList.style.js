import { css } from 'styled-components';
import breakPoints from '../../../breakpoint';

const AppStyles = css`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
    .to-do-container {
        padding: 20px;
        text-align: center;
        margin: 20px auto;
        @media (min-width: ${breakPoints.desktop}) {
            width: 60%;
        }
    }
`;

export default AppStyles;