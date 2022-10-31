import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  // width: 250px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
  // flex-grow: 1;
  // min-height: 100px;

  display: flex;
`;

const Column = (props) => {
  return (
    <Container>
      <Title>{props.column.title} </Title>
      {/* 
      Draggable can only be dropped into a droppable that shares the same type
      Here 3rd column will have type 'done' and 1st  two  will  be type 'active'
      Can move tasks between to-do, progress and done but not backlog.
      */}
      <Droppable
        droppableId={props.column.id}
        type={props.column.id === "column-4" ? "backlog" : "active"}
        direction="horizontal"
      >
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {props.tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
