import React from "react";
import { addTodo, toggleTodo } from "./actions";
import { connect } from "react-redux";

const TodoList = ({ todos, addTodo, toggleTodo }) => {
  const handleAddTodo = () => {
    const text = prompt("Enter a new Todo : ");
    if (text) {
      addTodo(text);
    }
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state,
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
