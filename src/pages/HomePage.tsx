import React from "react";
import { Container, Col, Row } from "reactstrap";
import TopNavbar from "../components/ui/TopNavbar";
import SideMenu from "../components/ui/SideMenu";

const HomePage = () => {
  return (
    <>
      <TopNavbar />
      <Container fluid={true}>
        <Row>
          <Col xs="3">
            <SideMenu />
          </Col>
          <Col xs="9"></Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
