// react import
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// bootstrap import
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// boots6rap icon import
import { Trash } from 'react-bootstrap-icons'
// project import
import { TodoItemTable } from '../../components/TodoItemTable';

export const TodoDetailsView = () => {
    // the todoId is provided through the uri.
    const { todoId } = useParams();

    const navigate = useNavigate();
        const navigateTodoItemNew = () => {
           navigate("/todo/" + todoId + "/items/new");
        };

    const [isOpen, setIsOpen] = useState(false);
    return (
    <Container>
        <h4>todoId: {todoId}</h4>
        <Card className="m-4">
           <Card.Header>
                 <Navbar className="justify-content-between">
                   <Navbar.Text>Todo item list</Navbar.Text>
                   <Button onClick={() => navigateTodoItemNew()} size="sm" variant="outline-primary" >Add</Button>
               </Navbar>
           </Card.Header>
                <Card.Body>
                     <TodoItemTable todoId={todoId}/>
                </Card.Body>
        </Card>
    </Container>
    )
}