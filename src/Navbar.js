import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

const Navbar = () => (
  <Menu className="custom-navbar" fixed="top" secondary>
    <Menu.Item className="navbar-title">
      DEV@Deakin
    </Menu.Item>

    <Menu.Item name="home" className="navbar-item" />
    
    <Menu.Item name="about" className="navbar-item" />
    <Menu.Item name="features" className="navbar-item" />

    <Menu.Menu position="right">
      <Menu.Item>
        <Button primary className="navbar-button">Post Login</Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;