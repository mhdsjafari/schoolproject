import { NavLink } from "react-router-dom";
import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

export default function FormButton({ password, IDNumber, phonenumber }) {
  const [show, setShow] = useState(false);
  const [pass, setpass] = useState("");
  const [IDnum, setIDnum] = useState("");
  const [phonenum, setphonenum] = useState("");
  const handleClose = () => setShow(false);

  const handleShow = () => {
    setpass(password);
    setIDnum(IDNumber);
    setphonenum(phonenumber);
    setShow(true);
  };

  return (
    <>
      <Button onClick={handleShow} className="main_form_button">
        ورود
      </Button>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header className="modal1">
          <Modal.Title>خوش آمدید {} </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal1 modal_body1">
          {/* {user === ""
            ? "این اکانت یافت نشد"
            : "You're not a member! click to create an account"} */}
        </Modal.Body>
        <Modal.Footer className="modal1">
          <Button className="modal_button" onClick={handleClose}>
            بازگشت
          </Button>
          <Button className="modal_button" onClick={handleClose}>
            <NavLink to={`/SchoolForm`} exact={true}>
              ادامه
            </NavLink>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
