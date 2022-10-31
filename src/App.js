import React, { useState } from "react";
import initialData from "./data/initial-data";
import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const App = () => {
  const [data, setData] = useState(initialData);

  const dragStartHandler = (start) => {
    document.body.style.color = "grey";
    document.body.style.backgroundColor = "#eee";
  };
  const dragUpdateHandler = (update) => {};

  const dragEndHandler = (result) => {
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";
    //reorder column
    //result.destination null if draggable not dropped in a droppable
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    //if destination is  same as source, and order didnt change
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    console.log(`
        Drag ended. 
        id:${result.draggableId}. 
        source-id:${result.source.droppableId}.
        source-index:${result.source.index}.
        destination-id:${result.destination.droppableId}.
        destination-index:${result.destination.index}.
    `);

    //Retrieve the column
    const column = data.columns[source.droppableId];

    //new taskIds array with same content as last array
    //create new objects now instead  of mutating  state
    const newTaskIds = Array.from(column.taskIds);

    //move the task  id  from  the old index to the new index by reordering the array
    //at source.index,  remove one item
    newTaskIds.splice(source.index, 1);
    //at destination.index, remove nothing but insert 1 item
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };
    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },
    };
    setData(newData);
    //Call Server endpoint here for server to know a reorder has occured
  };

  return (
    <Container>
      <DragDropContext
        onDragEnd={dragEndHandler}
        onDragStart={dragStartHandler}
        onDragUpdate={dragUpdateHandler}
      >
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

          // return column.title;
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    </Container>
  );
};

export default App;
