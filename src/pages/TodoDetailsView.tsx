// react import
import { useState } from 'react';
import { useParams } from 'react-router-dom';
// bootstrap import
import {
  Container,
  Collapse,
  Card,
  CardHeader,
  CardBody,
  Button
} from 'reactstrap';

// project import
import { TodoItemForm } from 'components/TodoItemForm';
import { TodoItemTable } from 'components/TodoItemTable';

export const TodoDetailsView = () => {
    // the todoId is provided through the uri.
    let { todoId } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
    <Container>
        <Card className="m-4">
            <CardHeader>
                <h3>New item</h3>
                 <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
                        Toggle
                 </Button>
            </CardHeader>
            <CardBody>
                <Collapse isOpen={isOpen}>
                    <TodoItemForm />
                </Collapse>
            </CardBody>
        </Card>
        <Card className="m-4">
            <CardHeader>
            <h3>Todo item list</h3>
            </CardHeader>
                <CardBody>
                    <TodoItemTable todoId={todoId} />
                </CardBody>
            </Card>
    </Container>
    )
}