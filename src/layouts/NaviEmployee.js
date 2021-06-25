import React from "react";
import { Dropdown, Menu, Image, Container } from "semantic-ui-react";

export default function NaviEmployee() {
  return (
    <div>
      <Menu size="massive" inverted>
        <Container >
          <Menu.Item name="home" />

          <Menu.Item position="right">
            <Image
              avatar
              spaced="right"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4q4eyqUndMHmc7uxRPn2hVEsB1w6XfGSMtQ&usqp=CAU"
            />
            <Dropdown pointing="top left" text="Engin">
              <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info" />
                <Dropdown.Item text="Çıkış Yap" icon="sign-out" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}
