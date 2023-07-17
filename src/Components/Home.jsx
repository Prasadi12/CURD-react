import React, { Fragment } from "react";
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import { Link,useNavigate } from 'react-router-dom';

const Home = () => {

    let history = useNavigate();

    const handleDelete = (id) => {
        var index = Employees.map(function(e){
            return e.id;
        }).indexOf(id);

        Employees.splice(index,1);
    }

    return (
        <Fragment>
            <div style={{ margin:'10ren' }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        Employees && Employees.length > 0 
                            ? 
                            Employees.map((item)=>{
                                return(
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>
                                            <Button onClick={ () => alert(item.id)}>EDIT</Button>
                                            &nbsp;
                                            <Button onClick={ () => handleDelete(item.id)}>DELETE</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            'No Data Available.'
                        }
                    </tbody>
                </Table>
            </div>
        </Fragment>
    )
}

export default Home;