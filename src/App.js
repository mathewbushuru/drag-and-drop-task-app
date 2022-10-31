import React, { useState } from "react";
import initialData from "./data/initial-data";
import Column from "./components/Column";

const App = () => {
  const [data, setData] = useState(initialData);

  return (
    <>
      <div>Hello World App </div>
      {data.columnOrder.map((columnId) => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

        // return column.title;
        return <Column key={column.id} column={column} tasks={tasks} />
      })}
    </>
  );
};

export default App;
