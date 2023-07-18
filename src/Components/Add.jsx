import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      b = age;

    Employees.push({ id: uniqueId, name: a, age: b });

    history("/");
  };

  return (
    <div>
      <div
        style={{
          paddingBottom: "10px",
          fontFamily: "sans-serif",
          fontWeight: "900",
          textDecoration: "underline",
          color: "#180ba3",
        }}
      >
        <h2>Create Employee</h2>
      </div>
      <Form className="d-grid gap-2" style={{ margin: "15ren" }}>
        <center>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Control
              style={{ width: "50%", padding: "10px" }}
              type="text"
              placeholder="Enter Your name"
              required
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAge">
            <Form.Control
              style={{ width: "50%", padding: "10px" }}
              type="text"
              placeholder="Enter Your age"
              required
              onChange={(e) => setAge(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button
            style={{
              backgroundColor: "green",
              border: "green",
              width: "25%",
              alignItems: "center",
            }}
            size="lg"
            onClick={(e) => handleSubmit(e)}
            type="submit"
          >
            Submit
          </Button>
        </center>
      </Form>
    </div>
  );
};

export default Add;
