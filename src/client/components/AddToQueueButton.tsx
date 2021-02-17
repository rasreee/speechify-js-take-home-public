import React, { useState } from 'react';
import { DataType } from '../../common';

interface IAddToQueueButton {
	type: DataType;
	onClick: (type: DataType) => Promise<void>;
}

const AddToQueueButton: React.FC<IAddToQueueButton> = ({ type, onClick }) => {
	const [loading, setLoading] = useState(false);
	const handleClick: React.MouseEventHandler = async (e) => {
		e.preventDefault();
		setLoading(true);
		await onClick(type);
		setLoading(false);
	};
	return (
		<button
			type="button"
			onClick={handleClick}
			className="add-to-queue-button"
		>
			{loading ? 'Submitting...' : `Add ${type} Data to Queue`}
		</button>
	);
};

export default AddToQueueButton;
