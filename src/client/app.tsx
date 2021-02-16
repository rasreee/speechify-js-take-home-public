import React from 'react'
import { observer } from 'mobx-react-lite'
import { DataType } from '../common'
import SpeechifyClient from './speechify-client'
import { PlayButton, AddToQueueButton, Message } from './components'
import ViewModel from './view-model'
import PlayButtonViewModel from './view-models/PlayButtonViewModel'
import AddToQueueButtonViewModel from './view-models/AddToQueueButtonViewModel'

type Props = {
    client: SpeechifyClient
    generator: any
}

const App: React.FC<Props> = observer(({ client, generator }) => {
    const viewModel = new ViewModel({ client, generator })
    const playButtonViewModel = new PlayButtonViewModel(viewModel)
    const jsonButtonViewModel = new AddToQueueButtonViewModel(viewModel, DataType.JSON)
    const txtButtonViewModel = new AddToQueueButtonViewModel(viewModel, DataType.TXT)
    const htmlButtonViewModel = new AddToQueueButtonViewModel(viewModel, DataType.HTML)

    return (
        <>
            <h1>Speechify CarPlay</h1>
            <PlayButton
                viewModel={playButtonViewModel}
            />
            <div className="add-to-queue-buttons">
                <AddToQueueButton
                    viewModel={htmlButtonViewModel}
                />
                <AddToQueueButton
                    viewModel={txtButtonViewModel}
                />
                <AddToQueueButton
                    viewModel={jsonButtonViewModel}
                />
            </div>
            <Message error>{viewModel.error}</Message>
        </>
    )
})

export default App
