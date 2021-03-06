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
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  NAME_MIN_LENGTH,
  NAME_MAX_LENGTH,
} from "../util/form-config";
import { lengthMsg, requiredMsg, invalidEmailMsg } from "../util/form-messages";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email(invalidEmailMsg).required(requiredMsg),
  password: Yup.string()
    .min(PASSWORD_MIN_LENGTH, lengthMsg(PASSWORD_MIN_LENGTH, "min"))
    .max(PASSWORD_MAX_LENGTH, lengthMsg(PASSWORD_MAX_LENGTH, "max"))
    .required(requiredMsg),
  name: Yup.string()
    .min(NAME_MIN_LENGTH, lengthMsg(NAME_MIN_LENGTH, "min"))
    .max(NAME_MAX_LENGTH, lengthMsg(NAME_MAX_LENGTH, "max")),
});

const SignupPage = () => {
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false);
  const history = useHistory();

  const onSubmit = async ({ email, password, name }) => {
    setisLoading(true);
    const result = await dispatch(authActions.signup(email, password, name));

    if (result) {
      history.push("/home");
    } else {
      setisLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "test@gmail.com",
      password: "tesing",
      name: "",
    },
    validationSchema: SignupSchema,
    onSubmit,
  });

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card className="auth-card">
        <CardHeader>Signup</CardHeader>
        <CardBody>
          <Form onSubmit={formik.handleSubmit}>
            <small className="d-block text-right required mb-3">Required</small>
            <FormGroup row>
              <Label for="email" sm={3} className="required">
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
              <Label for="password" sm={3} className="required">
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
            <FormGroup row>
              <Label for="name" sm={3}>
                Name
              </Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={formik.getFieldProps("name").onChange}
                  onBlur={formik.getFieldProps("name").onBlur}
                  value={formik.values.name}
                  invalid={formik.touched.name && !!formik.errors.name}
                />
                <FormFeedback className="pl-1">
                  {formik.touched.name && formik.errors.name}
                </FormFeedback>
              </Col>
            </FormGroup>
            <Row>
              <Col
                xs={{ order: 2, size: 12 }}
                sm={{ order: 1, size: true }}
                className="mt-2"
              >
                <Link to="/login">Already have an account?</Link>
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

export default SignupPage;
