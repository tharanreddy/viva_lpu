import { useState } from "react";

export default function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  function onInputChange(event) {
    setInput(event.target.value);
  }
  function onAdd() {
    setTodos([...todos, input]);
    setInput("");
  }
  function onDelete(index){
    const filterTodos = todos.filter((_,i) => {
        return i !== index;
    });
    setTodos(filterTodos);
  }
  return (
    <div>
      <h1>ToDo</h1>
      <input
        type="text"
        placeholder="add a task"
        onChange={onInputChange}
        value={input}
      />
      <button onClick={onAdd}>Add Task</button>
      {todos.map((list, index) => (
        <li>
          <p> {list} </p>
          <button
            onClick={function () {
              onDelete(index);
            }}
            >delete
            </button>
        </li>
      ))}
    </div>
  );
}