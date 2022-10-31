const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Groceries[DRAG DISABLED]" },
    "task-2": { id: "task-2", content: "Finish ELEC 400M assignment" },
    "task-3": { id: "task-3", content: "Go to gym" },
    "task-4": { id: "task-4", content: "Take trash out" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    // "column-2": {
    //   id: "column-2",
    //   title: "In progress",
    //   taskIds: [],
    // },
    // "column-3": {
    //   id: "column-3",
    //   title: "Done",
    //   taskIds: [],
    // },
    // "column-4": {
    //   id: "column-4",
    //   title: "Backlog[DRAG DISABLED]",
    //   taskIds: [],
    // },
  },
  //For reordering of columns
//   columnOrder: ["column-1", "column-2", "column-3", "column-4"],
columnOrder: ["column-1"],
};

export default initialData;
