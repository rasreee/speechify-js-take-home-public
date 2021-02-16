import * as React from "react";
import { DataType } from "@common";
import { SpeechifyClient } from "@common/client";
import { PlayButton, AddToQueueButton, Message } from "./components";
import ViewModel from "./view-model";
import { observable } from "mobx";

type Props = {
  client: SpeechifyClient;
  generator: any;
};

const App: React.FC<Props> = observable(({ client, generator }) => {
  const viewModel = new ViewModel({ client, generator });

  return (
    <>
      <h1>Speechify CarPlay</h1>
      <PlayButton isPlaying={viewModel.isPlaying} onClick={viewModel.handlePlayClick} />
      <div className="add-to-queue-buttons">
        <AddToQueueButton
          type={DataType.HTML}
          onClick={viewModel.handleAddToQueueClick}
          loading={viewModel.isHTMLLoading}
        />

        <AddToQueueButton
          type={DataType.TXT}
          onClick={viewModel.handleAddToQueueClick}
          loading={viewModel.isTXTLoading}
        />
        <AddToQueueButton
          type={DataType.JSON}
          onClick={viewModel.handleAddToQueueClick}
          loading={viewModel.isJSONLoading}
        />
      </div>
      <Message error>{viewModel.error}</Message>
    </>
  );
})

export default App