import React from "react";
import {  Dropdown, Menu } from "semantic-ui-react";

export default function NaviMain() {
  return (
    <div>
      <Menu size="large" inverted>
        <Menu.Item name="home" />
        <Menu.Menu position="right">
        <Dropdown item text='Login'>
            <Dropdown.Menu>
              <Dropdown.Item>Employee</Dropdown.Item>
              <Dropdown.Item>Employer</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown item text='Register'>
            <Dropdown.Menu>
              <Dropdown.Item>Employee</Dropdown.Item>
              <Dropdown.Item>Employer</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Menu.Menu>
      </Menu>
    </div>
  );
}
