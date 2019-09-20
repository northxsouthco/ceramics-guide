import React from "react"

import { Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Inspo = () => {
  const data = useStaticQuery(graphql`
    query FetchAllInstaImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "instagram" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              id
              fluid {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.edges
  return (
    <Layout pageInfo={{ pageName: "inspiration" }}>
      <SEO title="Inspiration" />
      <h1>Inspiration</h1>
      <Row>
        {images.map(({ node }) => (
          <Col key={node.id} xs="12" md="4" className="mb-4">
            <a
              href={`https://www.instagram.com/p/${
                node.childImageSharp.fluid.originalName.split(".")[0]
              }`}
            >
              <Img
                fluid={{ ...node.childImageSharp.fluid, aspectRatio: 1 }}
                alt=""
                className="border rounded"
              />
            </a>
          </Col>
        ))}
      </Row>
    </Layout>
  )
}

export default Inspo
