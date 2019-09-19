import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { Navbar, Nav, Container } from "react-bootstrap"

const CustomNavbar = ({ siteTitle, pageInfo }) => {
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar" className="bg-dark">
        <Container>
          <Link to="/" className="link-no-style">
            <Navbar.Brand as="span">{siteTitle}</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/credits" className="link-no-style">
                <Nav.Link as="span" eventKey="credits">
                  Credits
                </Nav.Link>
              </Link>
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
