import "./App.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import FormTodo from "./Task/FormTodo";
import Todo from "./Task/Todo";

// /https://towardsdatascience.com/build-a-simple-todo-app-using-react-a492adc9c8a4
// react todo app
// functions:
// 1. view task
// 2. add/ remove task
// 3. mark task as done

// allow user to type in name

// separate into different components

function App() {
  // default state of task = false
  const [todos, setTodos] = useState([
    {
      text: "Test task",
      isDone: false,
    },
  ]);

  // function to add todos
  // function will take in text input from user aka todo
  // append new task into exisiting todo list
  const addTodo = (text) => {
    // spread operator includes all the elements in a list
    const newTodos = [...todos, { text }];

    // overwrite existing list with new list
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];

    // remove task from its position
    // update task list
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // using index of each task
  const markTodo = (index) => {
    const newTodos = [...todos];

    // if done = true
    // update task list
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  // allow user to input a name
  const [name, setName] = useState("user");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    // user enter name
    setName("");
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>

        <form className="list-user" onSubmit={handleSubmit}>
          <p>
            Welcome{" "}
            <input
              className="username-input"
              onChange={(e) => setName(e.target.name)}
              placeholder="username"
            />
          </p>
        </form>

        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
