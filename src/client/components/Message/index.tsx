import React from 'react';

import { Container } from './styles';

interface MessageProps extends React.HTMLAttributes<HTMLSpanElement> {
	error?: boolean;
	children: string;
}

const Message: React.FC<MessageProps> = ({
	error = false,
	children,
	...props
}) => {
	if (children.length === 0) return null;
	return (
		<Container error={error} {...props}>
			{children}
		</Container>
	);
};

export default Message;
