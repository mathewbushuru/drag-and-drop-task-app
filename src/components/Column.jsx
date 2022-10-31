import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { DragDropContext } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

const Column = (props) => {
  const dragEndHandler = () => {
    console.log("Drag ended");
    //TODO: reorder column
  };
  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <Container>
        <Title>{props.column.title} </Title>
        <TaskList>
          {props.tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </TaskList>
      </Container>
    </DragDropContext>
  );
};

export default Column;
