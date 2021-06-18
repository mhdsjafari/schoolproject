import { NavLink } from "react-router-dom";
import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

export default function CreateAccount() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <span onClick={handleShow} className="create-account">
        کلیک کنید
      </span>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header className="modal1"></Modal.Header>
        <Modal.Body className="modal1 modal_body2">
          <Button className="modal_button" onClick={handleClose}>
            <NavLink to={`/SchoolForm`} exact={true}>
              مدرسه
            </NavLink>
          </Button>
          <Button className="modal_button" onClick={handleClose}>
            <NavLink to={`/TeacherForm`} exact={true}>
              معلم
            </NavLink>
          </Button>
          <Button className="modal_button" onClick={handleClose}>
            <NavLink to={`/StudentForm`} exact={true}>
              دانش آموز
            </NavLink>
          </Button>
        </Modal.Body>
        <Modal.Footer className="modal1"></Modal.Footer>
      </Modal>
    </>
  );
}
