import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Container } from "react-bootstrap";

import Header from "components/Header";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const Layout = ({ children, pageInfo }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Navbar pageInfo={pageInfo} siteTitle={data.site.siteMetadata.title} />
      <Container as="main" className="mt-5 flex-grow-1">
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
