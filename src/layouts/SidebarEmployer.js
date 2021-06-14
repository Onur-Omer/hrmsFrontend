import React from "react";
import {  Menu } from "semantic-ui-react";

export default function SidebarEmployer() {
  return (
    <div>
      <Menu size="large" inverted>
        <Menu.Item name="Aktif İlanlar" />
        <Menu.Item name="Pasif İlanlar" />

       
      </Menu>
    </div>
  );
}
