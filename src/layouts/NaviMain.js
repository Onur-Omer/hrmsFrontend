import React from "react";
import { Link } from "react-router-dom";
import {  Menu,Container } from "semantic-ui-react";

export default function NaviMain() {
  return (
    <div>
      <Menu size="massive" inverted>
        <Container>
          <Menu.Item name="home" as={Link} to="/" />
          <Menu.Menu position="right">
          <Menu.Item name="Login" as={Link} to="/loginForEmployee" />
          <Menu.Item name="Register" as={Link} to="/registerForEmployee" />
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
