// react import
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// bootstrap import
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// project import
import { TodoHistoryTable } from 'components/TodoHistoryTable';

export const TodoHistoryView = () => {
    const navigate = useNavigate();
    const navigateTodo = () => {
       navigate('/todo/guro');
    };

    let { todoId } = useParams();

    return (
    <Container>
        <Card className="m-4">
            <Card.Header>
                <Navbar className="justify-content-between">
                    <Navbar.Text>Todo History</Navbar.Text>
                    <Button onClick={() => navigateTodo()} size="sm" variant="outline-primary" >Back</Button>
                </Navbar>
            </Card.Header>
            <Card.Body>
                <TodoHistoryTable todoId={todoId}/>
            </Card.Body>
        </Card>
    </Container>
    )
}