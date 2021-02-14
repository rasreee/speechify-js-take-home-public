import React from 'react';

import { Container } from './styles';

type MessageProps = {
  error?: boolean;
  children: any;
}

const Message: React.FC<MessageProps> = ({ error = false, children, ...props }) => {
  return (
    <Container error={error}>
      {children}
    </Container>
  );
};

export default Message;
