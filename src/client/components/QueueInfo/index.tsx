import { Data } from '@common';
import React from 'react';

import { Container } from './styles';

interface IQueueInfo extends React.HTMLAttributes<HTMLDivElement> {
  queue: Array<Data>
}

const QueueInfo: React.FC<IQueueInfo> = ({ queue }) => {
  return (
    <Container>
      {queue.map((item, i) => <div key={i}>{JSON.stringify(item)}</div>)}
    </Container>
  );
};

export default QueueInfo;
