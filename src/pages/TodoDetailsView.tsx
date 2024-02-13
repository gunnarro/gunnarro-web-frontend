// react import
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// bootstrap import
import { Trash } from 'react-bootstrap-icons'
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
import { TodoItemTable } from 'components/TodoItemTable';

export const TodoDetailsView = () => {
    // the todoId is provided through the uri.
    let { todoId } = useParams();

    const navigate = useNavigate();
        const navigateTodoItemNew = () => {
           navigate("/todo/" + todoId + "/items/new");
        };

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
    <Container>
        <h4>todoId: {todoId}</h4>
        <Card className="m-4">
           <CardHeader>
                <Navbar>
                   <NavbarText>Todo item list</NavbarText>
                   <Button onClick={() => navigateTodoItemNew()} size="sm" className="bnt-sm float-end" color="primary" outline>Add</Button>
               </Navbar>
           </CardHeader>
                <CardBody>
                     <TodoItemTable todoId={todoId}/>
                </CardBody>
        </Card>
    </Container>
    )
}