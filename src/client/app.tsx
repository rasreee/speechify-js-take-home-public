import * as React from "react";
import { DataType } from "@common";
import { SpeechifyClient } from "@common/client";
import { PlayButton, AddToQueueButton, Message } from "./components";
import { useState } from "react";

type Props = {
  client: SpeechifyClient;
  generator: any;
};

export default function App(props: Props) {
  const [error, setError] = useState('');
  return (
    <>
      <h1>Speechify CarPlay</h1>
      <PlayButton client={props.client} />
      <div className="add-to-queue-buttons">
        <AddToQueueButton
          client={props.client}
          generator={props.generator}
          type={DataType.HTML}
          onError={setError}
        />
        <AddToQueueButton
          client={props.client}
          generator={props.generator}
          type={DataType.TXT}
          onError={setError}
        />
        <AddToQueueButton
          client={props.client}
          generator={props.generator}
          type={DataType.JSON}
          onError={setError}
        />
      </div>
      <Message error>{error}</Message>
    </>
  );
}
