import React from "react"
import { Link } from "gatsby"
import { Row, Col, Card, ListGroup } from "react-bootstrap"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

const Tutorials = () => {
  return (
    <Layout pageInfo={{ pageName: "tutorials" }}>
      <SEO title="Tutorials" />
      <Row>
        <Col>
          <Card className="mb-4 shadow">
            <Card.Body>
              <h2>Our Tutorials</h2>
              <p className="mb-0">
                We have written guides on the following&hellip;
              </p>
            </Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Link to="/tutorials/potterware">Potterware</Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card className="mb-4 shadow">
            <Card.Body>
              <h2>Recommended Links</h2>
              <p className="mb-0">
                These resources will help you use 3D software
              </p>
            </Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <a
                  href="https://www.thingiverse.com/thing:3702476"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Creating Spiralized Vases using Blender
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default Tutorials
