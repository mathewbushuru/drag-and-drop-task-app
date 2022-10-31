import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Title = styled.h3``;
const TaskList = styled.div``;

const Column = (props) => {
  return (
    <Container>
      <Title>
        <div>{props.column.title}</div>
      </Title>
      <TaskList>Tasks go here</TaskList>
    </Container>
  );
};

export default Column;
