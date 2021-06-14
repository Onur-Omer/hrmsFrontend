import React from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";

export default function NaviMain() {
  return (
    <div>
      <Menu size="small" inverted>
        <Menu.Item name="home" />
        <Menu.Menu position="right">
          <Menu.Item>
            <Button primary>Login</Button>
          </Menu.Item>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
