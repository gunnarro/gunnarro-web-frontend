// react import
import { useTranslation } from 'react-i18next';
import { Suspense, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// bootstrap import
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// project import
import { TodoTable } from '../../components/TodoTable';

export const TodoListView = () => {
    const { t } = useTranslation()
    const navigate = useNavigate();
    const navigateTodoNew = () => {
       navigate('/todo/new');
    };

    let { userName } = useParams();

    return (
    <Container>
        <Card className="m-4">
            <Card.Header>
                <div className="d-flex justify-content-between">
                    <h4>Todo list</h4>
                    <Button onClick={() => navigateTodoNew()} size="sm" variant="outline-primary">{t("add")}</Button>
                </div>
            </Card.Header>
            <Card.Body>
                <TodoTable userName={userName}/>
            </Card.Body>
        </Card>
    </Container>
    )
}