import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import StrictModeDroppable from "./components/StrictModeDroppable";
import { Draggable } from "react-beautiful-dnd";

const List = styled.div`
  border: 1px solid #ddd;
  background-color: white;
  padding: 0.5rem 0.5rem 0;
  border-radius: 3px;
`;
const Kiosk = styled(List)`
  position: absolute;
  right: 0;
  width: 200px;
`;
const Item = styled.div`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 3px;
  background-color: white;
`;

export const CopyDrag = () => {
  const ITEMS = [
    {
      id: "headingElement",
      content: "Heading",
    },
    {
      id: "textlineElement",
      content: "Text  Line",
    },
    {
      id: "imageElement",
      content: "Image",
    },
    {
      id: "dropdownElement",
      content: "Dropdown",
    },
    {
      id: "fileuploadElement",
      content: "FileUpload",
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
            {/* {ITEMS.map((item, index) => (
              <p key={item.id}>{item.content}</p>
            ))} */}
            {ITEMS.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <Item
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    {item.content}
                  </Item>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Kiosk>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
};
