import { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { editTodo } from "./features/TodoSlice";
import { useDispatch } from "react-redux";
const TodoItem = (props) => {
  const [updateText, setUpdateText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const deleteTodo = () => {
    props.onCheck(props.id);
  };
  const handleUpdateText = (e) => {
    setUpdateText(e.target.value);
  };
  const handleUpdateSave = (e) => {
    e.preventDefault();
    dispatch(editTodo({ id: props.id, updateText: updateText }));
    setUpdateText("");
    setIsEditing(false);
  };

  const editTemplate = (
    <form className="editForm" onSubmit={handleUpdateSave}>
      <div className="todo-item">
        <div className="todo-textEdit">Update Task</div>
        <input
          type="text"
          value={updateText}
          onChange={handleUpdateText}
          id={props.id}
          required
        />
        <div className="todo-btns">
          <div className="todo-update-icon-edit">
            <button className="update-icon" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
          <div className="todo-save-icon-edit">
            <button type="submit" className="save-icon">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="todo-item">
      <div className="todo-text">I have to {props.text}</div>
      <div className="todo-btns">
        <div className="todo-update-icon">
          <AiFillEdit
            className="update-icon"
            onClick={() => setIsEditing(true)}
          />
        </div>
        <div className="todo-delete-icon">
          <AiFillDelete className="delete-icon" onClick={deleteTodo} />
        </div>
      </div>
    </div>
  );
  return <div className="todo">{isEditing ? editTemplate : viewTemplate}</div>;
};
export default TodoItem;
