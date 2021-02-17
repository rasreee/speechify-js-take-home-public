import React from 'react';
import { AddToQueueControls, Message, QueueInfo } from './components';
import AppViewModel from './view-models/AppViewModel';
import { useClient, useRootStore, useGenerator } from './hooks';
import Player from './components/Player';
import { LoadingPage } from './components/pages';
import { observer } from 'mobx-react-lite';

const App: React.FC = observer(() => {
    const client = useClient();
    const generator = useGenerator();
    const store = useRootStore();

    if (!client) return <LoadingPage />;

    const viewModel = new AppViewModel({ store, client, generator });

    return (
        <>
            <h1>Speechify CarPlay</h1>
            <Player
                onPlay={viewModel.handlePlay}
                onPause={viewModel.handlePause}
                isPlaying={viewModel.store.isPlaying}
                isDisabled={viewModel.store.isDisabled}
            ><QueueInfo queue={viewModel.store.queue} />
                <Message error>{store.error}</Message>
                <AddToQueueControls onAddToQueue={viewModel.handleAddToQueue} />
            </Player>
        </>
    );
});

export default App;
