import theme from 'client/theme';
import styled from 'styled-components';
type Props = {
    error?: boolean;
}
export const Container = styled.div<Props>`
    font-size: 16px;
    color: ${(props) => (props.error) ? theme.colors.error : theme.colors.text}
`;
