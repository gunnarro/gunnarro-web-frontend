import { useState } from 'react'
import { Modal, Button } from "react-bootstrap";



export function showConfirmDeleteDialog({ isShow }) {
const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
     <div className="modal show" style={{ display: 'block', position: 'initial' }} >
        <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Delete Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body><div className="alert alert-danger">Are you sure you want to delete the item?</div></Modal.Body>
            <Modal.Footer>
              <Button variant="default" onClick={() => {false} }>No</Button>
              <Button variant="danger" onClick={() => {true} }>Yes</Button>
            </Modal.Footer>
        </Modal.Dialog>
     </div>
    )
}