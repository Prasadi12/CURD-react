import React, { Fragment } from "react";
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import { Link,useNavigate } from 'react-router-dom';

const Home = () => {

    let history = useNavigate();

    const handleEdit = (id,name,age) => {
        localStorage.setItem('id',id);
        localStorage.setItem('name',name);
        localStorage.setItem('age',age);
    }

    const handleDelete = (id) => {
        var index = Employees.map(function(e){
            return e.id;
        }).indexOf(id);

        Employees.splice(index,1);

        history('/');
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
                                            <Link to={`/edit`}>
                                            <Button onClick={ () => handleEdit(item.id,item.name,item.age)}>EDIT</Button>
                                            </Link>
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
                <br/><br/>
                <Link className="d-grid gap-2" to="/create">
                    <Button size="lg">Create</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;