import React from "react"
import { FaCreativeCommons } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Colophon = () => (
  <Layout pageInfo={{ pageName: "credits" }}>
    <SEO title="Colophon & Credits" />
    <h1>Colophon & Credits</h1>
    <p>
      Designed by <a href="https://www.northxsouth.co">Stephy Miehle</a>
    </p>
    <h2>Technology</h2>
    <p>
      Built with <a href="https://www.gatsbyjs.org">Gatsby</a> using{" "}
      <a href="https://github.com/billyjacoby/gatsby-react-bootstrap-starter">
        Gatsby React Bootstrap Starter
      </a>
    </p>
    <h2>Images</h2>
    <p>
      Header image{" "}
      <a
        href="https://creativecommons.org/licenses/by-sa/2.0/"
        rel="noopener noreferrer"
      >
        <FaCreativeCommons /> Attribution-ShareAlike 2.0
      </a>{" "}
      by{" "}
      <a
        href="https://www.flickr.com/photos/doctorow/17598550890/in/photolist-s9U3YP-sPeQCK-sPeKNz-sP8b4d-s9mnqx-sNMp64-6nBJV7"
        rel="noopener noreferrer"
      >
        Cory Doctorow
      </a>
    </p>
  </Layout>
)

export default Colophon
