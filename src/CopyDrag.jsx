import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import StrictModeDroppable from "./components/StrictModeDroppable";

const Kiosk = styled.div``;

export const CopyDrag = () => {
  const ITEMS = [
    {
      id: "headlineElement",
      content: "Headline",
    },
    {
      id: "copyElemet",
      content: "Copy",
    },
    {
      id: "imageElement",
      content: "Image",
    },
    {
      id: "slideshowElement",
      content: "Slideshow",
    },
    {
      id: "quoteElement",
      content: "Quote",
    },
  ];

  const dragEndHandler = (result) => {
    console.log("Element  dropped");
  };

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <StrictModeDroppable droppableId="kioskDroppable" isDropDisabled={false}>
        {(provided) => (
          <Kiosk {...provided.droppableProps} ref={provided.innerRef}>
            Copy drag
          </Kiosk>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
};
