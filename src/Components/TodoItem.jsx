import React from "react";
import { FaPen, FaTrashCan } from "react-icons/fa6";

function TodoItem(props) {
  const dialog = React.useRef();
  const [editing, setEditing] = React.useState(false);
  const openModal = (isEditing) => {
    isEditing ? setEditing(true) : setEditing(false);
    console.log(isEditing);
    dialog.current.showModal();
    
  };
  const closeModal = () => [ dialog.current.close()]
  const clickOutside = (e) => {
    if (e.target === dialog.current) {
      closeModal();
    }
}
return (
    <>
      <li className="flex bg-white rounded shadow-sm p-4 mt-4 first:mt-0">
        <div className="flex gap-x-4 mr-auto items-center">
          <div className="flex h-6 w-6 rounded-full shadow-sm text-white text-sm bg-teal-400 items-center justify-center leading-none">
            {props.id + 1}
          </div>
          <div>
            <p className="font-semibold">{props.todo.title}</p>
            <p className="text-sm text-gray-400">{props.todo.date}</p>
          </div>
        </div>
        <div className="flex item-center gap-x-2">
          <button
            type="button"
            className="to-btn"
            onClick={() => openModal(false)}
          >
            <FaTrashCan />
          </button>
          <button
            type="button"
            className="to-btn"
            onClick={() => openModal(true)}
          >
            <FaPen />
          </button>
        </div>
      </li>
      <dialog ref={dialog} onClick ={clickOutside} className="rounded-md w-[480px] fixed top-1/5 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <form className="p-6">
          <h3 className="font-semibold text-xl text-center">
            Modal
            <div className="text-center">
              {editing ? "Edit Task" : "Delete Task"}
            </div>
          </h3>
          <div className="mt-2 text-center">
            {editing ? "edit" : "Will you delete the task permanently?"}
          </div>
          <div className="mt-2 text-end space-x-2">
            <button
              type="submit"
              className={
                editing
                  ? "rounded bg-teal-500 border border-gray-200 px-3 py-2 text-white hover:bg-teal-600 "
                  : "rounded bg-rose-500 border border-gray-200 px-3 py-2 text-white hover:bg-rose-600 "
              }
            >
              {editing ? "Comfirm" : "Delete"}
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="rounded border border-gray-200 px-3 py-2 hover:bg-gray-50"
            >
              Close
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default TodoItem;
