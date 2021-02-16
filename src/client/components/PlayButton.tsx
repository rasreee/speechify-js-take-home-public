import React, { MouseEventHandler, useEffect, useState } from 'react'
import {
    SpeechifyClient,
    SpeechifyClientEvent,
    ClientEventType,
    ClientState,
} from '@common/client'

type Props = {
    isPlaying: boolean
    onClick: () => void
}

export const PlayButton = ({ isPlaying, onClick }: Props) => {
    const handleClick: MouseEventHandler = (e) => {
        e.preventDefault()
        onClick()
    }
    return isPlaying ? (
        <button className="main-control pause" onClick={handleClick}>
            PAUSE
        </button>
    ) : (
        <button className="main-control play" onClick={handleClick}>
            PLAY
        </button>
    )
}
