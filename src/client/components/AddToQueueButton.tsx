import React, { useState } from "react";
import { DataType } from "@common";
import DataGenerator from "../generator";
import { SpeechifyClient } from "@common/client";

type Props = {
  type: DataType;
  generator: DataGenerator;
  client: SpeechifyClient;
  onError: (message: string) => void;
};

export const AddToQueueButton = ({ type, onError, generator, client }: Props) => {
  const [loading, setLoading] = useState(false);
  const onClick = async () => {
    setLoading(true);
    const data = generator.getData(type);
    try {
      await client.addToQueue(data);
    } catch (error) {
      onError(`Oops! Failed to add ${type} to the queue\${error}`);
    } finally {
      // simulate loading
      setTimeout(() => setLoading(false), 500);
    }
  };
  return (
    <div onClick={onClick} className="add-to-queue-button">
      {loading ? "Submitting..." : `Add ${type} Data to Queue`}
    </div>
  );
};
