import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { Container } from "react-bootstrap";

const Header = ({ siteTitle }) => (
  <header className="d-flex justify-content-center align-items-center">
    <Container className="text-center">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
