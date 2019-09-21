import React from "react"

import { Table, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from "gatsby"

const Software = ({ data }) => {
  const slicing = data.allSoftwareYaml.edges.filter(({ node }) =>
    node.type.includes("Slicing")
  )

  const modeling = data.allSoftwareYaml.edges.filter(({ node }) =>
    node.type.includes("Modeling")
  )

  return (
    <Layout pageInfo={{ pageName: "software" }}>
      <SEO title="Software" />

      <h1>Software</h1>
      <Row>
        <Col>
          <p>
            <strong>Modeling software</strong> helps you design your pieces. The
            applications in this section vary greatly in ease, capabilities, and
            even exported files. The majority of them save their files as{" "}
            <code>.stl</code> files that need to be sliced with the right
            settings for our printer.
          </p>
        </Col>
        <Col>
          <strong>Slicing software</strong> convert your 3D models to{" "}
          <code>.gcode</code> files that our printer can understand. If you used
          design software that already created a <code>.gcode</code>, you do not
          need a slicer.
        </Col>
      </Row>
      <h2 id="modeling">Modeling Software</h2>
      <Table responsive hover size="sm" className="small">
        <thead>
          <tr>
            <th>Software</th>
            <th>User Level</th>
            <th>Price</th>
            <th>Operating System</th>
          </tr>
        </thead>
        <tbody>
          {modeling.map(({ node }) => (
            <tr>
              <td>
                <a href={node.url} rel="noopener noreferrer">
                  {node.name}
                </a>
              </td>
              <td>{node.level.join(", ")}</td>
              <td>{node.price.join(", ")}</td>
              <td>{node.os.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p className="font-italic">
        Software list based on{" "}
        <a
          href="https://all3dp.com/2/best-free-cad-software-for-3d-printing/"
          rel="noopener noreferrer"
        >
          All3DP's "2019 Best Free CAD Software For 3D Printing"
        </a>
        .
      </p>

      <h2 id="slicing" className="mt-5">
        Slicing Software
      </h2>
      <Table responsive hover size="sm" className="small">
        <thead>
          <tr>
            <th>Software</th>
            <th>User Level</th>
            <th>Price</th>
            <th>Operating System</th>
          </tr>
        </thead>
        <tbody>
          {slicing.map(({ node }) => (
            <tr>
              <td>
                <a href={node.url} rel="noopener noreferrer">
                  {node.name}
                </a>
              </td>
              <td>{node.level.join(", ")}</td>
              <td>{node.price.join(", ")}</td>
              <td>{node.os.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p className="font-italic">
        Software list based on{" "}
        <a
          href="https://all3dp.com/1/best-3d-slicer-software-3d-printer/"
          rel="noopener noreferrer"
        >
          All3DP's "Best 3D Slicer Software for 3D Printers"
        </a>
        .
      </p>
    </Layout>
  )
}

export default Software

export const query = graphql`
  query FetchSoftware {
    allSoftwareYaml(sort: { fields: name, order: ASC }) {
      edges {
        node {
          name
          url
          level
          price
          os
          type
        }
      }
    }
  }
`
