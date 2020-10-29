import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  NavLink,
  Dropdown,
} from "reactstrap";
import { BsPencilSquare, BsPeopleCircle } from "react-icons/bs";

import { State } from "../../redux/state";

const TopNavbar = () => {
  const { username } = useSelector((state: State) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">
        <BsPencilSquare size="2em" />
        <b className="mx-2">Life Tracker</b>
      </NavbarBrand>
      <Nav className="mr-auto" navbar></Nav>
      <Dropdown isOpen={isOpen} toggle={toggle}>
        <DropdownToggle
          outline
          color="secondary"
          className="d-flex justify-content-center align-items-center"
        >
          <span className="mr-2">{username}</span>
          <BsPeopleCircle size="2em" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Account Setting</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Navbar>
  );
};

export default TopNavbar;
