import React, { useState } from "react";
import initialData from "./data/initial-data";
import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";

const App = () => {
  const [data, setData] = useState(initialData);

  const dragEndHandler = () => {
    console.log("Drag ended");
    //TODO: reorder column
  };

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      {data.columnOrder.map((columnId) => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

        // return column.title;
        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
};

export default App;
