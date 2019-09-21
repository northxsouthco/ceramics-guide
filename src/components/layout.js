/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container } from "react-bootstrap"

import Header from "./header"
import Navbar from "./navBar"
import Footer from "./Footer"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Navbar pageInfo={pageInfo} siteTitle={data.site.siteMetadata.title} />
        <Container as="main" className="mt-5 flex-grow-1">
          {children}
        </Container>
        <Footer />
      </>
    )}
  />
)

export default Layout
