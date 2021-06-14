import React from "react";
import { Dropdown, Menu, Image, Container } from "semantic-ui-react";

export default function NaviEmployer() {
    return (
      <div>
      <Menu size="large" inverted>
        <Container >
          <Menu.Item name="home" />

          <Menu.Item position="right">
            
            <Dropdown pointing="top left" text="Engin">
              <Dropdown.Menu>
                <Dropdown.Item text="İlan ekle" icon="info" />
                <Dropdown.Item text="İlanlarım" icon="info" />
                <Dropdown.Item text="Çıkış Yap" icon="sign-out" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Container>
      </Menu>
    </div>
    )
}
