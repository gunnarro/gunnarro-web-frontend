import { useState } from 'react'
import { Modal, Button } from "react-bootstrap";

export function ShowConfirmDeleteDialog( isShow: boolean ) {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   function handleAction(isOk: boolean) {
   }

   return (
     <div className="modal show" style={{ display: 'block', position: 'initial' }} >
        <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Delete Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body><div className="alert alert-danger">Are you sure you want to delete the item?</div></Modal.Body>
            <Modal.Footer>
              <Button variant="default" onClick={() => { handleAction(false) } }>No</Button>
              <Button variant="danger" onClick={() => { handleAction(true) } }>Yes</Button>
            </Modal.Footer>
        </Modal.Dialog>
     </div>
    )
}