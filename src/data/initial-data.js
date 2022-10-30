const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take trash out" },
    "task-2": { id: "task-2", content: "Finish ELEC 400M assignment" },
    "task-3": { id: "task-3", content: "Go to gym" },
    "task-4": { id: "task-4", content: "Do  groceries" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },
  //For reordering of columns
  columnOrder: ["column-1"],
};

export default initialData;
