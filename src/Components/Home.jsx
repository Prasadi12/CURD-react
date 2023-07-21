import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  let history = useNavigate();

  // const [backendData,setBackendData] = useState([{}]);

  // useEffect(() => {
  //   fetch("/emp").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // },[]);

  const handleEdit = (id, name, age) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
  };

  const handleDelete = (id) => {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);

    Employees.splice(index, 1);

    history("/");
  };

  return (
    <Fragment>
      <div
        style={{
          paddingBottom: "10px",
          fontFamily: "sans-serif",
          fontWeight: "900",
          textDecoration: "underline",
          color: "#180ba3",
        }}
      >
        <h2>Employees Table</h2>
      </div>
      <div style={{ margin: "10ren" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>
                        <Link to={`/edit`}>
                          <Button
                            style={{
                              backgroundColor: "#50b7c7",
                              border: "#50b7c7",
                            }}
                            onClick={() =>
                              handleEdit(item.id, item.name, item.age)
                            }
                          >
                            EDIT
                          </Button>
                        </Link>
                        &nbsp;
                        <Button
                          style={{
                            backgroundColor: "#eb4034",
                            border: "#eb4034",
                          }}
                          onClick={() => handleDelete(item.id)}
                        >
                          DELETE
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "No Data Available."}
          </tbody>
        </Table>

        <br />
        <br />
        <Link className="d-grid gap-2" to="/create">
          <center>
            <Button
              style={{
                backgroundColor: "green",
                border: "green",
                width: "25%",
                alignItems: "center",
              }}
              size="lg"
            >
              Create
            </Button>
          </center>
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
