import React from "react"

import { Row, Col, Card } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Inspo = () => {
  const data = useStaticQuery(graphql`
    query FetchAllInstaImages {
      allFile: allInspirationYaml {
        edges {
          node {
            id
            user
            image {
              name
              childImageSharp {
                fluid {
                  originalName
                  ...GatsbyImageSharpFluid
                }
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
      <p>
        Images on this page are &copy; their respective creators. For more
        images, try the hashtags{" "}
        <a
          href="https://www.instagram.com/explore/tags/potterbot/"
          rel="noopener noreferrer"
          target="_blank"
        >
          #potterbot
        </a>
        ,{" "}
        <a
          href="https://www.instagram.com/explore/tags/potterware/"
          rel="noopener noreferrer"
          target="_blank"
        >
          #potterware
        </a>
        , or{" "}
        <a
          href="https://www.instagram.com/explore/tags/3dpotter/"
          rel="noopener noreferrer"
          target="_blank"
        >
          #3dpotter
        </a>
        .
      </p>
      <Row className="mt-4">
        {images.map(({ node }) => (
          <Col key={node.id} xs="12" sm="6" md="4" lg="3" className="mb-4">
            <a
              href={`https://www.instagram.com/p/${node.image.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card>
                <Img
                  fluid={{
                    ...node.image.childImageSharp.fluid,
                    aspectRatio: 1,
                  }}
                  alt={`By ${node.user}`}
                  title={`By ${node.user}`}
                  className="card-img"
                />
                <Card.Footer className="p-2 small">@{node.user}</Card.Footer>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Layout>
  )
}

export default Inspo
