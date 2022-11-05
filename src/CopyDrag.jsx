import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import StrictModeDroppable from "./components/StrictModeDroppable";
import { Draggable } from "react-beautiful-dnd";

import { droppedItems } from "./data/copy-drag-data";

const Container = styled.div`
  margin: 0.5rem;
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: center;
`;

const List = styled.div`
  border: 1px
    ${(props) => (props.isDraggingOver ? "dashed  #000" : "solid #ddd")};
  background-color: white;
  padding: 0.5rem 0.5rem 0;
  margin: 0.5rem 0.5rem;
  border-radius: 3px;
`;
const Kiosk = styled(List)`
  // position: absolute;
  // right: 0;
  // width: 200px;
  flex: 1 1 15%;
`;
const Item = styled.div`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px ${(props) => (props.isDragging ? "dashed #4099ff" : "solid #ddd")};
  border-radius: 3px;
  background-color: white;
`;
const Clone = styled(Item)`
  // + div {
  //   display: none !important;
  // }
`;
const Content = styled(List)`
  flex: 6 3 80%;
`;

export const CopyDrag = () => {
  const [droppedItemsData, setDroppedItemsData] = useState(droppedItems);

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
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    console.log(`
        Drag ended. 
        draggableId:${result.draggableId}. 
        source-id:${result.source.droppableId}.
        source-index:${result.source.index}.
        destination-id:${result.destination.droppableId}.
        destination-index:${result.destination.index}.
    `);
    if (result.destination.droppableId === "contentDroppable") {
      console.log("Element  dropped  in content box");
    }
  };

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <Container>
        <StrictModeDroppable droppableId="kioskDroppable" isDropDisabled={true}>
          {(provided, snapshot) => (
            <Kiosk
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {/* {ITEMS.map((item, index) => (
              <p key={item.id}>{item.content}</p>
            ))} */}
              {ITEMS.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <>
                      <Item
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                      >
                        {item.content}
                      </Item>
                      {snapshot.isDragging && <Clone>{item.content}</Clone>}
                    </>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Kiosk>
          )}
        </StrictModeDroppable>

        <StrictModeDroppable
          droppableId="contentDroppable"
          isDropDisabled={false}
        >
          {(provided, snapshot) => (
            <Content
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              <p>Drop elements here</p>
              {droppedItemsData.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <>
                      <Item
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                      >
                        {item.content}
                      </Item>
                      {snapshot.isDragging && <Clone>{item.content}</Clone>}
                    </>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Content>
          )}
        </StrictModeDroppable>
      </Container>
    </DragDropContext>
  );
};
