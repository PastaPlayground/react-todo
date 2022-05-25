import { Button } from "react-bootstrap";

// list of to do
function Todo({ todo, index, removeTodo, markTodo }) {
  return (
    <div className="todo">
      {/* if task is done apply strike */}
      {/* else no styling */}
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        {/* remove task */}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>
          ✕
        </Button>{" "}
        {/* mark task */}
        <Button variant="outline-success" onClick={() => markTodo(index)}>
          ✓
        </Button>
      </div>
    </div>
  );
}

export default Todo;
