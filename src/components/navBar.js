import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { Navbar, Nav, Container } from "react-bootstrap"

const NavItem = ({ to, title }) => {
  return (
    <Link to={`/` + to} className="link-no-style">
      <Nav.Link as="span" eventKey={to}>
        {title}
      </Nav.Link>
    </Link>
  )
}

const CustomNavbar = ({ siteTitle, pageInfo }) => {
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar" className="bg-dark">
        <Container>
          <Link to="/" className="link-no-style">
            <Navbar.Brand as="span" className="pb-0">
              {siteTitle}
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
              <NavItem to="inspiration" title="Inspiration" />
              <NavItem to="credits" title="Credits" />
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
