import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

const LoginPage = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" placeholder="Email" />
        </FormGroup>
      </Form>
    </div>
  );
};

export default LoginPage;
