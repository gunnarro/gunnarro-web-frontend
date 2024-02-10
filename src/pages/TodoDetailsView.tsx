// react import
import { useState } from 'react';
import { useParams } from 'react-router-dom';
// bootstrap import
import {
  Container,
  Collapse,
  Card,
  CardHeader,
  CardTitle,
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
                <CardTitle>New Todo</CardTitle>
                 <Button className="btn btn-primary btn-sm float-end" onClick={toggle}>Toggle</Button>
            </CardHeader>
            <CardBody>
                <Collapse isOpen={isOpen}>
                    <TodoItemForm />
                </Collapse>
            </CardBody>
        </Card>
        <Card className="m-4">
            <CardHeader>
           <CardTitle>New Todo</CardTitle>
            </CardHeader>
                <CardBody>
                    <TodoItemTable todoId={todoId} />
                </CardBody>
            </Card>
    </Container>
    )
}