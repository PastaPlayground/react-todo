import { useState } from "react";
import { Button, Form } from "react-bootstrap";

// create a form for user to input task
function FormTodo({ addTodo }) {
  // set value of input form
  const [value, setValue] = useState("");

  // handle error from submitting task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    // user enter task value -> use as arg for addTodo
    addTodo(value);
    setValue("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Task</b>
        </Form.Label>

        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add Task"
        />
      </Form.Group>
      {/* button for submit */}
      <Button variant="primary mb-3" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default FormTodo;
