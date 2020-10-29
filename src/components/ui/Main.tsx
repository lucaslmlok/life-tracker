import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import SideMenu from "./SideMenu";
import TopNavbar from "./TopNavbar";
import { Container, Row, Col } from "reactstrap";

const Main = () => {
  return (
    <>
      <TopNavbar />
      <Container fluid={true}>
        <Row>
          {/* <Col xs="3">
            <SideMenu />
          </Col>
          <Col xs="9">
            <Switch>
              <Route path="/"></Route>
            </Switch>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Main;
