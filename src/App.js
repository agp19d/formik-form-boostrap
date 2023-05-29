import React from "react";
import "./App.css";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("form: ", values);
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};

      // Email validation
      if (!values.email) {
        errors.email = "Required";
      } else if (
        // Regular expression to check if email input is valid
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Username should be an email";
      }

      // Password validation
      if (!values.password) errors.password = "Field required";
      return errors;
    },
  });

  return (
    <div className="m-3">
      <Form onSubmit={formik.handleSubmit} className="border p-3 rounded">
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="font-weight-bold text-primary">Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            id="emailField"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="shadow-none"
          />
          {formik.errors.email ? (
            <div className="text-danger small" id="emailError">{formik.errors.email}</div>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="font-weight-bold text-primary">Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            id="pswField"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="shadow-none"
          />
          {formik.errors.password ? (
            <div className="text-danger small" id="pswError">{formik.errors.password}</div>
          ) : null}
        </Form.Group>

        <Button variant="outline-primary" type="submit" id="submitBtn" className="mt-3 w-100"> 
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
