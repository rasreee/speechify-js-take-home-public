import styled from 'styled-components'
import theme from '../../theme'

type Props = {
    error?: boolean
}
export const Container = styled.div<Props>`
    font-size: 16px;
    color: ${(props) => (props.error ? theme.colors.error : theme.colors.text)};
`
