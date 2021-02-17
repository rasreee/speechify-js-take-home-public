import React from 'react';

interface IPlayButton {
	className: string;
	onClick: () => void;
	isPlaying: boolean;
}

const PlayButton: React.FC<IPlayButton> = ({ className, onClick, isPlaying, ...props }) => {
	const handleClick: React.MouseEventHandler = (e) => {
		e.preventDefault();
		onClick();
	};
	return (
		<button
			className={className}
			type="button"
			onClick={handleClick}
			{...props}
		>
			{isPlaying ? "PAUSE" : "PLAY"}
		</button>
	);
};

export default PlayButton;
