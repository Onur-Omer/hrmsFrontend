import React from "react";
import { Dropdown, Menu, Image, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

let user=JSON.parse(localStorage.getItem("user"))

function signedOut() {
  console.log("Girdim")
  localStorage.removeItem("user")
  localStorage.removeItem("auth")
}

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
            <Dropdown pointing="top left" text={user.firstName}>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/employee" text="Bilgilerim" icon="info" />
                <Dropdown.Item as={Link} to="/" text="Çıkış Yap" icon="sign-out" onClick={signedOut}/>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}
