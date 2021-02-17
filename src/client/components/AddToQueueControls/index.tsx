import { DataType } from '@common';
import React from 'react';
import { AddToQueueButton } from '..';

import { Container } from './styles';

interface IAddToQueueControls {
	onAddToQueue: (type: DataType) => Promise<void>;
}

const AddToQueueControls: React.FC<IAddToQueueControls> = ({
	onAddToQueue
}) => (
	<Container className="add-to-queue-buttons">
		<AddToQueueButton type={DataType.HTML} onClick={onAddToQueue} />
		<AddToQueueButton type={DataType.JSON} onClick={onAddToQueue} />
		<AddToQueueButton type={DataType.TXT} onClick={onAddToQueue} />
	</Container>
);

export default AddToQueueControls;
