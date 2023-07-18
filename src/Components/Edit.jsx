import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { useEffect, useState } from "react";

const Edit = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  let history = useNavigate();

  var index = Employees.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = Employees[index];
    a.name = name;
    a.age = age;

    history("/");
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
  }, []);

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
        <h2>Edit Employee</h2>
      </div>
      <Form className="d-grid gap-2" style={{ margin: "15ren" }}>
        <center>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Control
              style={{ width: "50%", padding: "10px" }}
              type="text"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAge">
            <Form.Control
              style={{ width: "50%", padding: "10px" }}
              type="text"
              placeholder="Enter your age"
              required
              value={age}
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
            Update
          </Button>
        </center>
      </Form>
    </div>
  );
};

export default Edit;
