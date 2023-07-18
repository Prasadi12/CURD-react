import React from "react";
import { Button,Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
// import {v4 as uuid} from 'uuid';
import { useEffect, useState } from "react";

const Edit = () => {

    const [id,setId] = useState('');
    const [name,setName] = useState('');
    const [age,setAge] = useState('');

    let history = useNavigate();

    var index = Employees.map(function(e){
        return e.id;
    }).indexOf(id);

    const handleSubmit = (e) =>{
        e.preventDefault();

        let a = Employees[index];
        a.name =name;
        a.age =age;

        history('/');
    };

    useEffect(()=>{
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
    },[]);

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin:'15ren' }}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter your name" required value={name} onChange={(e)=>setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter your age" required value={age} onChange={(e)=>setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e)=>handleSubmit(e)} type="submit">Update</Button>
            </Form>
        </div>
    )
}

export default Edit;