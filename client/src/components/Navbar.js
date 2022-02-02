import React from "react";
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';


const Navbar = () => {

  return (
    <Menu>
      <NavLink to="/">
        <Menu.Item>
          Find Product
        </Menu.Item>
      </NavLink>
      <NavLink to="/products">
        <Menu.Item>
          Products
        </Menu.Item>
      </NavLink>
      <NavLink to="/categories">
        <Menu.Item>
          Categories
        </Menu.Item>
      </NavLink>
    </Menu>
  )
}

export default Navbar;