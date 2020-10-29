import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Col,
  FormFeedback,
  Card,
  CardHeader,
  CardBody,
  Spinner,
  Row,
} from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import * as authActions from "../redux/actions/auth";
import { requiredMsg } from "../util/form-messages";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required(requiredMsg),
  password: Yup.string().required(requiredMsg),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false);
  const history = useHistory();

  const onSubmit = async ({ email, password }) => {
    setisLoading(true);
    const result = await dispatch(authActions.login(email, password));

    if (result) {
      history.push("/home");
    } else {
      setisLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "test@gmail.com",
      password: "tesing!",
    },
    validationSchema: LoginSchema,
    onSubmit,
  });

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card className="auth-card">
        <CardHeader>Login</CardHeader>
        <CardBody>
          <Form onSubmit={formik.handleSubmit}>
            <FormGroup row>
              <Label for="email" sm={3}>
                Email
              </Label>
              <Col sm={9}>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={formik.getFieldProps("email").onChange}
                  onBlur={formik.getFieldProps("email").onBlur}
                  value={formik.values.email}
                  invalid={formik.touched.email && !!formik.errors.email}
                />
                <FormFeedback className="pl-1">
                  {formik.touched.email && formik.errors.email}
                </FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" sm={3}>
                Password
              </Label>
              <Col sm={9}>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={formik.getFieldProps("password").onChange}
                  onBlur={formik.getFieldProps("password").onBlur}
                  value={formik.values.password}
                  invalid={formik.touched.password && !!formik.errors.password}
                />
                <FormFeedback className="pl-1">
                  {formik.touched.password && formik.errors.password}
                </FormFeedback>
              </Col>
            </FormGroup>
            <Row>
              <Col
                xs={{ order: 2, size: 12 }}
                sm={{ order: 1, size: true }}
                className="mt-2"
              >
                <Link to="/signup">Don't have an account?</Link>
              </Col>
              <Col xs={{ order: 1, size: 12 }} sm={{ order: 2, size: "auto" }}>
                <Button
                  className="float-right"
                  type="submit"
                  color="primary"
                  disabled={isLoading}
                >
                  Submit
                  {isLoading && (
                    <Spinner
                      className="ml-2"
                      style={{ marginBottom: "0.1rem" }}
                      size="sm"
                      color="light"
                    />
                  )}
                </Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginPage;
