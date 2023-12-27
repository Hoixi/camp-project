import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
export default function CartSummary() {
  return (
    <div>
      <Menu.Item>
        <Dropdown pointing="top" inline text='Sepetiniz'>
          <Dropdown.Menu>
            <Dropdown.Item>Acer Laptop</Dropdown.Item>
            <Dropdown.Item>Asus Laptop</Dropdown.Item>
            <Dropdown.Item>Dell Laptop</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>

    </div>
  )
}
