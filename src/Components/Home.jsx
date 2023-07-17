import React, { Fragment } from "react";
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";

const Home = () => {
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
                                            <Button onClick={ () => alert(item.id)}>DELETE</Button>
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