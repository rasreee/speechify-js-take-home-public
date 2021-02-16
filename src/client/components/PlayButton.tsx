import React, { MouseEventHandler, useEffect, useState } from 'react'
import {
    SpeechifyClient,
    SpeechifyClientEvent,
    ClientEventType,
    ClientState,
} from '@common/client'
import { observer } from 'mobx-react-lite';
import PlayButtonViewModel from '../view-models/PlayButtonViewModel';

type Props = {
    viewModel: PlayButtonViewModel;
}

export const PlayButton = observer(({ viewModel }: Props) => {

    const handleClick: MouseEventHandler = (e) => {
        e.preventDefault()
        viewModel.handleClick()
    }

    return viewModel.isPlaying ? (
        <button className="main-control pause" onClick={handleClick}>
            PAUSE
        </button>
    ) : (
            <button className="main-control play" onClick={handleClick}>
                PLAY
            </button>
        )
})
