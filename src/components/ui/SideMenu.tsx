import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { menus, Menu } from "../../util/menus";

interface SideMenuItem {
  menu: Menu;
}

const SideMenuItem = (props: SideMenuItem) => {
  const { menu } = props;

  return (
    <ListGroupItem tag="a" href={menu.path} color="light">
      {menu.title}
    </ListGroupItem>
  );
};

const SideMenu = () => {
  return (
    <ListGroup flush>
      {menus.map((menu) => (
        <SideMenuItem menu={menu} />
      ))}
    </ListGroup>
  );
};

export default SideMenu;
