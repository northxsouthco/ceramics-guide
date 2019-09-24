import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"

const NavItem = ({ to, title }) => {
  return (
    <Nav.Link as={Link} eventKey={to} to={`/` + to}>
      {title}
    </Nav.Link>
  )
}

const NavDropItem = ({ to, title }) => {
  return (
    <Link to={`/` + to} className="link-no-style">
      <NavDropdown.Item as="span" eventKey={to}>
        {title}
      </NavDropdown.Item>
    </Link>
  )
}

const CustomNavbar = ({ siteTitle, pageInfo }) => {
  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        id="site-navbar"
        className="bg-dark py-0"
        sticky="top"
        collapseOnSelect
      >
        <Container>
          <Link to="/" className="link-no-style">
            <Navbar.Brand as="span" className="pb-0">
              {siteTitle}
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="primary-nav" />
          <Navbar.Collapse id="primary-nav">
            <Nav className="ml-auto" activeKey={pageInfo && pageInfo.pageName}>
              <NavItem to="inspiration" title="Inspiration" />
              <NavItem to="software" title="Software" />
              <NavItem to="credits" title="Credits" />
              <NavDropdown title="Tutorials" id="tut-dropdown">
                <NavDropItem to="tutorials/potterware" title="Potterware" />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

CustomNavbar.propTypes = {
  siteTitle: PropTypes.string,
}

CustomNavbar.defaultProps = {
  siteTitle: ``,
}

export default CustomNavbar
