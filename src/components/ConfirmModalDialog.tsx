import { useTranslation } from 'react-i18next';
import { useState } from 'react'
import { Modal, Button } from "react-bootstrap";

interface ShowConfirmDeleteDialogProps {
  isShow: boolean;
  deleteMethodRef?: undefined;
}

export const ShowConfirmDeleteDialog: React.FC<ShowConfirmDeleteDialogProps> = (props) => {
   const { t } = useTranslation()
   const [show, setShow] = useState(true);

   function handleConfirm() {
        setShow(false);
   }

   function handleCancel() {
        setShow(false);
   }

   return (
        <Modal show={show}>
            <Modal.Header>
              <Modal.Title>{t("confirmDelete")}</Modal.Title>
            </Modal.Header>
            <Modal.Body><div className="alert alert-danger">{t("confirmDeleteMsg")}</div></Modal.Body>
            <Modal.Footer>
              <Button variant="default" onClick={() => { handleCancel() } }>{t("cancel")}</Button>
              <Button variant="danger" onClick={() => { handleConfirm() } }>{t("yes")}</Button>
            </Modal.Footer>
        </Modal>
   )
}