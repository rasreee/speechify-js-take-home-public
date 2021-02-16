import React, { useState, MouseEvent } from 'react'
import { DataType } from '@common'
import { SpeechifyClient } from '@common/client'
import DataGenerator from '../generator'
import AddToQueueButtonViewModel from '../view-models/AddToQueueButtonViewModel'
import { observer } from 'mobx-react-lite'

type Props = {
    viewModel: AddToQueueButtonViewModel
}

export const AddToQueueButton = observer(({ viewModel }: Props) => {
    const handleClick = async (e: MouseEvent) => {
        e.preventDefault()
        viewModel.handleClick()
    }
    return (
        <div onClick={handleClick} className="add-to-queue-button">
            {viewModel.isLoading ? 'Submitting...' : `Add ${viewModel.type} Data to Queue`}
        </div>
    )
})
