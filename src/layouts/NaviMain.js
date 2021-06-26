import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu,Container } from "semantic-ui-react";

export default function NaviMain() {
  return (
    <div>
      <Menu size="massive" inverted>
        <Container>
          <Menu.Item name="home" as={Link} to="/" />
          <Menu.Menu position="right">
            <Dropdown item text="Login">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/loginForEmployee">
                  Employee
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/loginForEmployer">
                  Employer
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="Register">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/registerForEmployee">
                  Employee
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/registerForEmployer">
                  Employer
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
