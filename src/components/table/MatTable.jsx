import React from "react";
import MUIDataTable from "mui-datatables";

const columns = ["Task Name", "Description", "Status", "Due Date", "Actions"];

const options = {
  selectableRows: "none",
  download: true,
  print: true,
};

function MatTable({ tasks = [] }) {
  const data = tasks.map((task) => [
    task.taskName,
    task.taskDesc,
    task.taskStatus,
    new Date(task.taskDue).toLocaleDateString(),
    task._id, // Assuming this is the task ID for actions
  ]);

  return (
    <MUIDataTable
      title={"Task Table"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}

export default MatTable;
