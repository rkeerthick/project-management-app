import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ addProject, handleCancelProject }) => {
  const modal = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const dueRef = useRef();

  const handleSave = () => {
    const title = titleRef?.current?.value;
    const desc = descRef?.current?.value;
    const dueDate = dueRef?.current?.value;

    if (title.trim() === "" || desc.trim() === "" || dueDate.trim() === "") {
      modal.current.open();
      return;
    }

    addProject({
      title: title,
      description: desc,
      dueDate: dueDate,
    });
  };
  return (
    <>
      <Modal ref={modal} buttonTitle="Close">
        <h2 className="text-xl font-bold text-stone-600 my-6">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Ooops... looks like you forget to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please provide valid value for each value.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-8 my-4">
          <li>
            <button onClick={handleCancelProject} className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              type="button"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} title="Title" isTextarea={false} type="text" />
          <Input ref={descRef} title="Description" isTextarea={true} />
          <Input ref={dueRef} title="Due Date" isTextarea={false} type="date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
