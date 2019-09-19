import { Link } from "gatsby"
import React from "react"
import {
  FaCreativeCommons,
  FaCreativeCommonsBy,
  FaCreativeCommonsSa,
} from "react-icons/fa"
import { Container } from "react-bootstrap"

const Footer = () => (
  <footer className="bg-light py-4">
    <Container>
      <p className="text-center lead mb-2">
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          rel="license"
          className="text-decoration-none"
        >
          <FaCreativeCommons />
          &thinsp;
          <FaCreativeCommonsBy />
          &thinsp;
          <FaCreativeCommonsSa />
        </a>
      </p>
      <p className="text-center text-dark small m-0">
        Except where otherwise <Link to="/credits">noted</Link>, content on this
        site is licensed under a{" "}
        <a href="https://creativecommons.org/licenses/by/4.0/" rel="license">
          Creative Commons Attribution-ShareAlike 4.0 International license
        </a>
        .
      </p>
    </Container>
  </footer>
)

export default Footer
