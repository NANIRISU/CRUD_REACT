import React from 'react';

import {Button,Row,Container,Col,Form,Navbar,Table} from 'react-bootstrap';

function Input(){
    const [tasks,setTasks]=React.useState([]);
    const [newTask,SetnewTask]=React.useState('');
    const [updateTask,setupdateTask]=React.useState('');
    
    React.useEffect(()=>{
        const readTasks=()=>{
            if(localStorage.getItem('tasks')) {
                setTasks(JSON.parse(localStorage.getItem('tasks')))
            }
        }
        readTasks()
    },[]);
    const onCreate =()=>{
         tasks.push(newTask)
         localStorage.setItem('tasks',JSON.stringify(tasks))
        SetnewTask('')
    };

    function onDelete (task){
        let index =tasks.indexOf(task);
        tasks.splice(index,1)
        localStorage.setItem('tasks',JSON.stringify(tasks))
        setTasks('')
        setTasks(JSON.parse(localStorage.getItem('tasks')))
        
    }
    const onUpdate =(task)=>{
        let index =tasks.indexOf(task);
        let task2=JSON.parse(localStorage.getItem('tasks'))

        task2[index]=updateTask
        localStorage.setItem('tasks',JSON.stringify(task2))
        setTasks(JSON.parse(localStorage.getItem('tasks')))
    }
    return (
        <div>
            <Navbar bg="dark" variant='dark'>
                <Navbar.Brand href='#home'>
                    AddUser
                </Navbar.Brand>
            </Navbar>
            <br></br>
            <Container>
            <Row>
                <Col>
                <h3>Add user here</h3>
                <Form>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Control autoComplete='off' type='text' value={newTask} onChange={e=>SetnewTask(e.target.value)}/>
                    </Form.Group>
               <Button variant="primary" onClick={onCreate}>createUser</Button>
                </Form>
                </Col>
            </Row>
            <br>
            </br>
            <Row>
                <Col>
                <Table striped bordered hover variant='dark'>
                    <thead>
                        <tr>
                            <th>UserName</th>
                            <th>DeleteName</th>
                            <th>UpdateName</th>
                        </tr>
                    </thead>
                    <tbody>
                        { tasks.map(task=>(
                            <tr key={task}>
                                <td>{task}</td>
                                <td><Button variant="danger" onClick={()=>onDelete(task)}>Delete</Button> </td>
                                <td>
                                    <input type="text" className="" onChange={e=> setupdateTask(e.target.value)} placeholder={task}></input>
                                    <Button className="text-white ml-4" variant="warning" onClick={()=>onUpdate(task)}>Update</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                </Col>
            </Row>
            </Container>
        </div>

    )
    
}

export default Input;