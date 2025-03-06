import React, { use, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import { useNavigate } from 'react-router-dom';

import { ROOT, PARTNERS, OBJECTIVES, ACTIVITIES, DELIVERABLES, MATERIALS, CONTACTUS } from '../router/RouteNames';

import horizontalLogo from '../resources/Horizontal.png';

function NavbarComponent(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand onClick={() => navigate(ROOT.name)}>
            <img
                src={horizontalLogo}
                width="243"
                height="72"
                alt="Smartie"
            />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink onClick={() => navigate(PARTNERS.name)}>Partners</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => navigate(OBJECTIVES.name)}>Objectives</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={() => navigate(ACTIVITIES.name)}>Activities</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={() => navigate(DELIVERABLES.name)}>Deliverables</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={() => navigate(MATERIALS.name)}>Materials?</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={() => navigate(CONTACTUS.name)}>Contact Us!</NavLink>
            </NavItem>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;