import React, { useState, MouseEvent } from "react";
import { DataType } from "@common";
import DataGenerator from "../generator";
import { SpeechifyClient } from "@common/client";

type Props = {
  type: DataType;
  onClick: (type: DataType) => void;
  loading: boolean;
};

export const AddToQueueButton = ({ type, onClick, loading }: Props) => {
  const handleClick = async (e: MouseEvent) => {
    e.preventDefault();
    onClick(type);
  };
  return (
    <div onClick={handleClick} className="add-to-queue-button">
      {loading ? "Submitting..." : `Add ${type} Data to Queue`}
    </div>
  );
};
