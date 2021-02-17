import React from 'react';
import PlayButton from '../PlayButton';

import { Container } from './styles';

interface IPlayer extends React.HTMLAttributes<HTMLDivElement> {
	onPlay: () => void;
	onPause: () => void;
	isPlaying: boolean;
	isDisabled: boolean;
}

const Player: React.FC<IPlayer> = ({ isPlaying, onPlay, onPause, isDisabled, children, ...props }) => {
	const handleClick = () => {
		if (isDisabled) return;
		return isPlaying ? onPause() : onPlay()
	};
	return (
		<Container  {...props}>
			<PlayButton className={isDisabled ? "main-control-disabled" : "main-control"} onClick={handleClick} isPlaying={isPlaying} />
			{children}
		</Container>
	);
}


export default Player;
