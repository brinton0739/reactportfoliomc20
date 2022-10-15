import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
    const { validForm, setValidForm } = useState(false);

    const submitHandler = (event) => {
        event.preventDefault()
        const valid = event.currentTarget.checkValidity();
        if (!valid) {
            event.stopPropagation();
        } else {
            setValidForm(true);
        }
    }
    return (
      <div>
        <h2>Contact</h2>
        <Form
          className="contact-form"
          validate={validForm}
          onSubmit={submitHandler}
        >
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" required />
            <Form.Control.Feedback type="invalid">
              Please provide your name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>email</Form.Label>
            <Form.Control type="email" placeholder="me@email.org" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <textarea className="form-control" rows="5" />
          </Form.Group>
          <Button className="btn-form" variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </div>
    );
};

export default Contact;