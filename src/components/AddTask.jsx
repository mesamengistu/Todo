import { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
const AddTask = () => {
  const [newTask, setNewTask] = useState("");
  return (
    <div className="  col-5 new-task-container g-0 ">
      <div className="input-group flex-nowrap ">
        <span className="input-group-text" id="addon-wrapping">
          <IoAddSharp />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Add Task"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>
    </div>
  );
};
export default AddTask;
