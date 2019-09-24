import React from "react"
import { Button, Row, Col, Card, CardImg, Alert } from "react-bootstrap"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { FaExclamationCircle } from "react-icons/fa"

import Layout from "../../components/layout"
import Definition from "../../components/definition"
import SEO from "../../components/seo"

const Potterware = ({ data }) => {
  const allImages = data.allFile.edges.reduce((ret, { node }) => {
    ret[node.name] = node
    return ret
  }, {})
  return (
    <Layout pageInfo={{ pageName: "potterware" }}>
      <SEO title="Potterware" />
      <h1>Potterware</h1>
      <p className="lead">
        Potterware is a browser-based application that you can run on campus or
        at home. You can design 3D-printable pottery without heavy technical
        knowledge; it is very beginner-friendly.
      </p>
      <p>
        Potterware lets you change the width of your pottery at 5 different
        points, then use mathematical functions to twist, stretch, and reshape
        your design. Luckily, all of the math is worked out for you. Contact
        your instructor to learn how to log in.
      </p>
      <Button
        href="http://www.emergingobjects.com/potterware"
        rel="nooopener noreferrer"
        target="_blank"
      >
        Launch Potterware
      </Button>
      <Row className="mt-5 pt-5">
        <Col>
          <h2>Select Printer Type</h2>
          <p>
            The most important step is selecting the correct Printer Type from
            the dropdown menu. Our printer is compatible with the{" "}
            <span className="smcp">Potterbot Duet</span> setting.
          </p>
          <p>
            If you do not remember to set the correct printer, the nozzle's
            coordinates will be misconfigured and your design will start to
            print off of the printing tray.
          </p>
        </Col>
        <Col>
          <Img
            fluid={allImages["select-printer"].childImageSharp.fluid}
            className="rounded shadow"
            alt="Select Printer Type"
          />
        </Col>
      </Row>

      <h2>Initial Settings</h2>
      <p>
        Before you start twisting and distorting your pottery, make sure that
        your initial settings will result in the look you want. All of these
        options are listed <em>before</em> the ABCDE settings.
      </p>
      <Definition term="Layer Height">
        Refers to how "squished together" the layers get, on a scale of 0-10
        (default: 1.3). The clay will always come out of the printer based on
        the size of the attached nozzle, but this setting lets you configure how
        compressed those layers should be. Low layer height will be very
        tight/squished and high layer height will be very loose and noodle-like.
      </Definition>
      <Definition term="Height">
        The physical height of your piece in millimeters. Your piece can go from
        4mm to 1500mm tall. The default value, 100, is just shy of 4".
      </Definition>
      <Definition term="Base Layers">
        Used if you would not like to attach your pottery to a slab or would
        prefer an open bottom. This setting can go from 0-10 (default: 3). The
        printer has a hard time adhering the clay to the bat in the first layer,
        so printing a base layer gives it the opportunity to adhere better
        without messing up your design.
      </Definition>
      <Definition term="Scale Base Layers">
        Changes how much larger or smaller the base is compared to the design.
        This setting can go from 0-9.99 (default: 1). Increasing the scale to
        anything greater than 1 will extend the base outside of your pottery.
      </Definition>
      <Definition term="Scale X &amp; Scale Y">
        Stretches your design across the respective axis from 1-2.99 (default:{" "}
        1). You can use this to make an oval base shape instead of a circle.
      </Definition>

      <h2 className="mt-5 pt-5">Changing the Shape</h2>
      <p>
        This is your opportunity to create something complex! But be warned:
        Potterware cannot show you if a design will be stable when printed, and
        large differences in these values may make your piece collapse.
      </p>
      <Definition term="Profile">
        The profile of your pottery can be set to{" "}
        <span className="smcp">Smooth</span> (default) or{" "}
        <span className="smcp">Angular</span>. Here are 2 pieces with the same
        shape and other settings, but different profiles. Note that the maximum
        diameter of the design changed.
        <Row className="mt-3">
          <Col sm="6">
            <Img
              fluid={allImages["smooth"].childImageSharp.fluid}
              className="rounded shadow"
              alt="Smooth profile"
            />
          </Col>
          <Col sm="6">
            <Img
              fluid={allImages["angular"].childImageSharp.fluid}
              className="rounded shadow"
              alt="Angular profile"
            />
          </Col>
        </Row>
      </Definition>
      <Definition term="A, B, C, D, E">
        Modifies the width of your pottery in 5 different points on a scale of
        0-500 millimeters (default: 100).
      </Definition>
      <Definition term="Wave Type">
        Select which mathematical wave should be used to decorate your pottery
        (default: <span className="smcp">Sinewave</span>). Changes to the wave
        type are easiest to see from above with a base layer enabled.
        <Row className="mt-3">
          <Col sm="4" className="my-3">
            <Card className="shadow border-0">
              <CardImg
                as={Img}
                fluid={allImages["none"].childImageSharp.fluid}
              />
              <Card.Footer className="p-2 small border-0 bg-white">
                <span className="smcp">None</span> creates a smooth circle
              </Card.Footer>
            </Card>
          </Col>
          <Col sm="4" className="my-3">
            <Card className="shadow border-0">
              <CardImg
                as={Img}
                fluid={allImages["sinewave"].childImageSharp.fluid}
              />
              <Card.Footer className="p-2 small border-0 bg-white">
                <span className="smcp">Sinewave</span> uses gentle waves
              </Card.Footer>
            </Card>
          </Col>
          <Col sm="4" className="my-3">
            <Card className="shadow border-0">
              <CardImg
                as={Img}
                fluid={allImages["sawtooth"].childImageSharp.fluid}
              />
              <Card.Footer className="p-2 small border-0 bg-white">
                <span className="smcp">Sawtooth</span> makes angular cuts
              </Card.Footer>
            </Card>
          </Col>
          <Col sm="4" className="my-3">
            <Card className="shadow border-0">
              <CardImg
                as={Img}
                fluid={allImages["square"].childImageSharp.fluid}
              />
              <Card.Footer className="p-2 small border-0 bg-white">
                <span className="smcp">Square</span> has notched edges
              </Card.Footer>
            </Card>
          </Col>
          <Col sm="4" className="my-3">
            <Card className="shadow border-0">
              <CardImg
                as={Img}
                fluid={allImages["jitter"].childImageSharp.fluid}
              />
              <Card.Footer className="p-2 small border-0 bg-white">
                <span className="smcp">Jitter</span> generates random-looking,
                wobbly waves
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Definition>
      <Definition term="Planar Repetitions">
        How many times the wave will wrap around the pottery horizontally, from
        3-100 (default: 29). With a high amplitude, this is twice the number of
        "corners".
      </Definition>
      <Definition term="Planar Amplitude">
        How dramatic the wave effect is, from 1-40 (default: 4). High amplitude
        creates the largest difference between "in" and "out" points.
      </Definition>
      <Definition term="Cycle">
        Unless you also change the <span className="smcp">Spacing</span>, you
        will not see any changes when you modify this number. Cycle can range
        from 1-4 (default: 1) and specifies how many rows of "special effect"
        layers should be grouped together before inserting a smooth layer.
      </Definition>
      <Definition term="Spacing">
        Spacing can range from 0-4 (default: 0). Increasing the spacing adds
        smooth/non-wave layers between the wave effect layers.
      </Definition>
      <Definition term="Twist">
        Adding a twist rotates the top surface from the bottom surface in 0-360
        degree increments (default: 0).
      </Definition>
      <Definition term="Interior Offset">
        Increasing this offset decreases the maximum diameter of your piece by
        moving the edges closer to the inside of the shape. The offset can have
        a value between 0-10 (default: 0).
      </Definition>
      <Definition term="Planar Starting % and Ending %">
        Both of these values go from 0-100% (default: 0).{" "}
        <span className="smcp">Starting Percentage</span> specifies the vertical
        height where the special effect should begin, and{" "}
        <span className="smcp">Ending Percentage</span> sets the height where
        the effect should end. You can use this to create a "band" on your piece
        with smooth layers above and below.
      </Definition>

      <Row className="mt-5 pt-5 mb-4">
        <Col>
          <h2>Changing the Printed Rows</h2>
          <p>
            So far, changes have affected the design by moving in and out
            horizontally (along the <span className="smcp">X-axis</span> and{" "}
            <span className="smcp">Y-axis</span>), but the overall printed rows
            have been smooth. You can make changes along the{" "}
            <span className="smcp">Z-axis</span> by adjusting the{" "}
            <span className="smcp">non-planar</span> settings, such as the wave
            type, repetitions, and amplitude. The definitions are the same as
            the previous section, just affecting a different dimension.
          </p>
          <p>
            For example, this design would otherwise be a perfect cylinder, but
            changes to the <span className="smcp">Non-Planar Wave Type</span>{" "}
            and <span className="smcp">Non-Planar Amplitude</span> made a
            "crown" effect.
          </p>
        </Col>
        <Col>
          <Img
            fluid={allImages["non-planar"].childImageSharp.fluid}
            className="rounded shadow"
            alt="Non-planar wave effect applied"
          />
        </Col>
      </Row>
      <Definition term="Non-Planar Effect Gradient">
        The non-planar effect can increase from bottom to top (default) or
        increase to the middle of the design. The{" "}
        <span className="smcp">Increase to Middle</span> setting will have an
        interesting vertical pattern, but not as dramatic as the uneven edge
        created by <span className="smcp">Increase to Top</span>.
      </Definition>

      <h2 className="mt-5 pt-5">Print Settings</h2>
      <p>
        Potterware has settings to print multiple copies of your design. Do not
        print multiples until you have successfully completed and fired a test
        print!
      </p>
      <p>
        Not all of the settings in the final printing section apply to our
        printer. For our purposes, leave these values alone.
      </p>

      <h2 className="mt-5 pt-5">Saving Your Design</h2>
      <p>
        When you are happy with your design, click the{" "}
        <span className="smcp">Download GCode</span> button. If you are on
        campus in the ceramics classroom, it will be saved in the Downloads
        folder. If you are off-campus or on another computer, you can bring your
        file(s) on a flash drive. Rename your file so that you know which design
        it refers to; you may wish to take a screenshot of the design and put it
        in a folder with the <code>.gcode</code> file.
      </p>
      <Alert variant="info">
        <Row className="align-items-md-center">
          <Col xs="auto">
            <FaExclamationCircle size="3em" />
          </Col>
          <Col>
            <p className="lead mb-2">
              You <strong>CANNOT</strong> open your saved file to make changes!
            </p>
            <p className="mb-0">
              If you would like to tweak and refine your design, Potterware does
              not currently have a way to open your existing files. We recommend
              making a note with the settings that you changed so that you can
              reproduce your design in the Potterware system.
            </p>
          </Col>
        </Row>
      </Alert>
    </Layout>
  )
}

export const query = graphql`
  query FetchPotterwareImage {
    allFile(
      filter: {
        relativeDirectory: { eq: "potterware" }
        sourceInstanceName: { eq: "images" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Potterware
