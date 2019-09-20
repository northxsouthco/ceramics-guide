import React from "react"
import { Link } from "gatsby"
import { FaCreativeCommons } from "react-icons/fa"
import { Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Colophon = () => (
  <Layout pageInfo={{ pageName: "credits" }}>
    <SEO title="Colophon & Credits" />
    <Row>
      <Col lg="3">
        <h1 className="sticky-main">Colophon & Credits</h1>
      </Col>
      <Col>
        <p>
          Designed by <a href="https://www.northxsouth.co">Stephy Miehle</a>, a
          digital media instructor and ceramics student at MCC.
        </p>
        <h2>Technology</h2>
        <p>
          Built with <a href="https://www.gatsbyjs.org">Gatsby</a> using{" "}
          <a href="https://github.com/billyjacoby/gatsby-react-bootstrap-starter">
            Gatsby React Bootstrap Starter
          </a>
          .
        </p>
        <h2>Typography</h2>
        <p>
          Heading font <strong>Brixton Sans</strong> &copy;{" "}
          <a href="https://tomchalky.com" rel="noopener noreferrer">
            Tom Chalky
          </a>{" "}
          and licensed for this project. Regretfully, any forks of this project
          without a webfont license will likely look strange and require some
          modifications.
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
          .
        </p>
        <p>
          Images on the <Link to="/inspiration">Inspiration</Link> page sourced
          from Instagram and &copy; their respective creators; each image links
          back to the original post.
        </p>
      </Col>
    </Row>
  </Layout>
)

export default Colophon
