// react import
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// bootstrap import
import {
  Container,
  Collapse,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

// project import
import { TodoTable } from 'components/TodoTable';

export const TodoListView = () => {
    const navigate = useNavigate();
    const navigateTodoNew = () => {
       navigate('/todo/new');
    };

    let { userName } = useParams();

    return (
    <Container>
        <h4>Welcome, {userName}</h4>
        <Card className="m-4">
            <CardHeader>
                <Navbar>
                    <NavbarText>Todo list</NavbarText>
                    <Button onClick={() => navigateTodoNew()} size="sm" className="bnt-sm float-end" color="primary" outline>Add</Button>
                </Navbar>
            </CardHeader>
            <CardBody>
                <TodoTable userName={userName}/>
            </CardBody>
        </Card>
    </Container>
    )
}