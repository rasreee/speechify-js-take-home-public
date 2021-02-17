import styled from 'styled-components';

type Props = {
	error?: boolean;
};
export const Container = styled.div<Props>`
	font-size: 16px;
	color: ${(props) => (props.error ? "#fa6f6f" : "black")};
`;
