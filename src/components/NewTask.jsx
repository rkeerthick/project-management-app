import React, { useRef, useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

const NewTask = ({handleAddTask}) => {
    const dialog = useRef();
  const [task, setTask] = useState("");
  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };
  const handleClick = () => {
    if(task.trim() === '' ){
        dialog.current.open();
        return;
    }
    handleAddTask(task);
    setTask('');
  }
  return (
    <>
    <Modal ref={dialog} buttonTitle="Close">
        <p>Please enter all the field to add task</p>
    </Modal>
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleTaskChange}
        value={task}
        />
      <button onClick={handleClick} className=" text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
        </>
  );
};

export default NewTask;
