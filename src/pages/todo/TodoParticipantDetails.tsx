// react import
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
// bootstrap import
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// bootstrap icon import
import { Trash, Pencil, CheckCircleFill, CheckSquare, HandThumbsUp, HandThumbsDown } from 'react-bootstrap-icons';

// project import
import { TodoRestApi, RestApiConfiguration } from '../../services/TodoRestApi';
import { TodoItemTable } from '../../components/TodoItemTable';
import { ShowConfirmDeleteDialog } from '../../components/ConfirmModalDialog';
import { AlertBox } from '../../components/Alert';
// service import
import { TodoServiceApiFactory, TodoDto, TodoItemDto, TodoDtoStatusEnum, ParticipantDto, ApprovalDto, ErrorResponse, Configuration } from "../../generated/client/todoservice";

export const TodoParticipantDetails = () => {
    const { t } = useTranslation()
    // the todoId is provided through the uri.
    const { todoId } = useParams() as { todoId:string };
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const navigateTodoItemNew = () => {
       navigate("/todo/" + todoId + "/items/new");
    };

    return (
    <Container>
        { error && <AlertBox title={t("applicationErrorTitle")} message={error} /> }

        <Card className="m-2">
           <Card.Header>
                    <h4 className="float-start">Participant</h4>
                    <Button className="float-end ms-2"  size="sm" variant="outline-primary">{t("back")}</Button>
           </Card.Header>
           <Card.Body>

           </Card.Body>
        </Card>
    </Container>
    )
}