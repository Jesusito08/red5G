import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import INFO from './Info.model';

function Modals({title, msg}: INFO): JSX.Element {
  const [show, setShow] = useState(true);   // Cuando el estado "show" sea true, se va a mostrar el modal, de lo contrario se mantiene oculto.
  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{title}</strong>
            <small>Justo ahora</small>
          </Toast.Header>
          <Toast.Body>{msg}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default Modals;