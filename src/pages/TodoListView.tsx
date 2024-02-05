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
import { TodoForm } from 'components/TodoForm';
import { TodoTable } from 'components/TodoTable';

export const TodoListView = () => {
    let { userName } = useParams();
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
                    <TodoForm />
                </Collapse>
            </CardBody>
        </Card>
        <Card className="m-4">
            <CardHeader>
                <CardTitle>{userName} Todo lists</CardTitle>
            </CardHeader>
            <CardBody>
                <TodoTable userName={userName}/>
            </CardBody>
        </Card>
    </Container>
    )
}