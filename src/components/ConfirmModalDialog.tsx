import { useTranslation } from 'react-i18next';
import { useState } from 'react'
import { Modal, Button } from "react-bootstrap";

interface ShowConfirmDeleteDialogProps {
  isShow: boolean;
  itemId: string;
  message?: string;
  deleteRef: Function;
  cancelDeleteRef: Function;
}

export const ShowConfirmDeleteDialog: React.FC<ShowConfirmDeleteDialogProps> = (props: ShowConfirmDeleteDialogProps) => {
   const { t } = useTranslation()
   const [show, setShow] = useState(props.isShow);

   function handleConfirm() {
        setShow(false);
        props.deleteRef(props.itemId)
   }

   function handleCancel() {
        setShow(false);
        props.cancelDeleteRef(props.itemId);
   }

   return (
        <Modal show={show}>
            <Modal.Header>
              <Modal.Title>{t("confirmDelete")}</Modal.Title>
            </Modal.Header>
            <Modal.Body><div className="alert alert-danger">{props.message}</div></Modal.Body>
            <Modal.Footer>
              <Button variant="default" onClick={() => { handleCancel() } }>{t("cancel")}</Button>
              <Button variant="danger" onClick={() => { handleConfirm() } }>{t("yes")}</Button>
            </Modal.Footer>
        </Modal>
   )
}