import React from "react";
import { Button, Row, Col, Card, CardImg, Alert } from "react-bootstrap";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { FaExclamationCircle } from "react-icons/fa";

import Layout from "components/Layout";
import Definition from "components/Definition";
import SEO from "components/SEO";

const Potterware = ({ data }) => {
  const allImages = data.allFile.edges.reduce((ret, { node }) => {
    // This is actually ok.. see https://github.com/airbnb/javascript/issues/719
    // eslint-disable-next-line no-param-reassign
    ret[node.name] = node;
    return ret;
  }, {});
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
      <div className="mb-5">
        <Button
          href="http://www.emergingobjects.com/potterware/membership-login/"
          rel="nooopener noreferrer"
          target="_blank"
        >
          Launch Potterware
        </Button>{" "}
        <Button
          href="https://www.notion.so/a545e30a662d4c74bd2bc9c016e0286c?v=f02c082ecd1c4fe3ab785c05d0120c89"
          rel="nooopener noreferrer"
          target="_blank"
        >
          View Potterware Examples
        </Button>
      </div>

      <section>
        <h2>Initial Settings</h2>
        <p>
          Before you start twisting and distorting your pottery, make sure that
          your initial settings will result in the look you want. All of these
          options are listed <em>before</em> the ABCDE settings.
        </p>
        <Definition term="Printer Type">
          <p>
            The most important step is selecting the correct Printer Type from
            the dropdown menu. Our printer is compatible with the{" "}
            <span className="smcp font-weight-bold">Potterbot Duet XL</span>{" "}
            setting.
          </p>
          <p>
            If you do not remember to set the correct printer, the nozzle's
            coordinates will be misconfigured and your design will start to
            print off of the printing tray.
          </p>
        </Definition>
        <Definition term="Printer Speed">
          Defaults to 100. This should be adjusted as needed through printer
          interface.
        </Definition>
        <Definition term="Height">
          The physical height of your piece in millimeters (1" is 25.4mm). Your
          piece can go from 4mm to 1500mm tall. The default value, 85, is about
          3.3”. For our purposes, the maximum height should be about 400.
        </Definition>
        <Definition term="Layer Height">
          <p>
            Refers to how "squished together" the layers get, on a scale of 0-10
            (default: <span className="text-info font-weight-bold">1.5</span>).
            The clay will always come out of the printer based on the size of
            the attached nozzle, but this setting lets you configure how
            compressed those layers should be.
          </p>
          <p>
            Low layer height will be very tight/squished and high layer height
            will be very loose and noodle-like.
          </p>
          <p>
            We recommend a layer height between 1 and 2 for beginners. When in
            doubt, the default is a good option.
          </p>
        </Definition>
        <Definition term="Skirt Offset">
          <strong>Only applies when you are printing a base.</strong> This is
          the “ring” that gets printed around the base and is intended to be cut
          away. The skirt can be offset from 0 to 50 (default:{" "}
          <span className="text-info font-weight-bold">17</span>). We recommend
          the default or larger, not to exceed 25 on a standard bat.
        </Definition>
        <Definition term="Base Layers">
          <p>
            The base layer is used to print a base using the printer, versus
            attaching your pottery to a slab leaving an open bottom. This
            setting can go from 0-10 (default:{" "}
            <span className="text-info font-weight-bold">2</span>).
          </p>
          <p>
            Successfully printing a base is an ongoing investigation, and we
            currently recommend setting the Base Layer to 0.
          </p>
        </Definition>
        <Definition term="Base Layer Spacing">
          <strong>Without a base, this setting will have no effect.</strong>{" "}
          This setting controls the number of revolutions or “rings” in the
          base. A higher number creates less-dense “rings” with fewer
          revolutions. This setting can go from 0-9.99 (default:{" "}
          <span className="text-info font-weight-bold">2.74</span>). This
          setting’s impact with a base is an ongoing investigation.
        </Definition>
        <Definition term="Scale Base Layers">
          <p>
            <strong>Without a base, this setting will have no effect.</strong>{" "}
            Changes how much larger or smaller the base is compared to the
            design. This setting can go from 0-9.99 (default:{" "}
            <span className="text-info font-weight-bold">0.95</span>).
            Increasing the scale to anything greater than 1 will extend the base
            outside of your pottery.
          </p>
          <p>
            The Scale Base will change in size based on the diameter of “E” in
            the forming process and will also adjust when different wave types
            are applied.
          </p>
        </Definition>
        <Definition term="Scale X &amp; Scale Y">
          <p>
            <span className="smcp font-weight-bold">X</span> and{" "}
            <span className="smcp font-weight-bold">Y</span> each affect one
            horizontal dimension (
            <span className="smcp font-weight-bold">Z</span> is the height).
          </p>
          <p>
            Stretches your design across the respective axis from 1-2.99
            (default: <span className="text-info font-weight-bold">1</span>).
            You can use this to make an oval-shaped form instead of a circular
            form.
          </p>
        </Definition>
      </section>
      <section>
        <h2 className="mt-5 pt-5">
          Planar: Changing the Shape on the X Axis &amp; Y Axis
        </h2>
        <p>
          This is your opportunity to create something complex! But be warned:
          Potterware cannot show you if a design will be stable when printed,
          and large differences in these values may result in a collapsed form.
        </p>
        <Definition term="Profile">
          The profile of your pottery can be set to{" "}
          <span className="smcp font-weight-bold">Smooth</span> (default) or{" "}
          <span className="smcp font-weight-bold">Angular</span>. Here are 2
          pieces with the same shape and other settings, but different profiles.
          Note that the maximum diameter of the design changed.
          <Row className="mt-3">
            <Col sm="6">
              <Img
                fluid={allImages.smooth.childImageSharp.fluid}
                className="rounded shadow"
                alt="Smooth profile"
              />
            </Col>
            <Col sm="6">
              <Img
                fluid={allImages.angular.childImageSharp.fluid}
                className="rounded shadow"
                alt="Angular profile"
              />
            </Col>
          </Row>
        </Definition>
        <Definition term="Maximum Diameter">
          <p>
            This advanced setting acts as a multiplier for the “ABCDE” values
            and will scale the profile values while maintaining the proportion
            between them. If adjusting the diameter, pay attention to the change
            of the written maximum diameter below the piece. Note that this
            setting is
            <em>not</em> the physical maximum diameter.
          </p>
          <p>
            This value can be set from 0-1000 (default:{" "}
            <span className="text-info font-weight-bold">100</span>) and should
            not be changed without an understanding of a successful print.
          </p>
        </Definition>
        <Definition term="A, B, C, D, E">
          Modifies the width of your pottery in 5 different points on a scale of
          0-500 millimeters (default:{" "}
          <span className="text-info font-weight-bold">100</span>).
        </Definition>
        <Definition term="Wave Type">
          Select which mathematical wave should be used to decorate your pottery
          (default: <span className="smcp font-weight-bold">Sinewave</span>).
          Changes to the wave type are easiest to see from above with a base
          layer enabled.
          <Row className="mt-3">
            <Col sm="4" className="my-3">
              <Card className="shadow border-0">
                <CardImg
                  as={Img}
                  fluid={allImages.none.childImageSharp.fluid}
                />
                <Card.Footer className="p-2 small border-0 bg-white">
                  <span className="smcp font-weight-bold">None</span> creates a
                  smooth circle
                </Card.Footer>
              </Card>
            </Col>
            <Col sm="4" className="my-3">
              <Card className="shadow border-0">
                <CardImg
                  as={Img}
                  fluid={allImages.sinewave.childImageSharp.fluid}
                />
                <Card.Footer className="p-2 small border-0 bg-white">
                  <span className="smcp font-weight-bold">Sinewave</span> uses
                  gentle waves
                </Card.Footer>
              </Card>
            </Col>
            <Col sm="4" className="my-3">
              <Card className="shadow border-0">
                <CardImg
                  as={Img}
                  fluid={allImages.sawtooth.childImageSharp.fluid}
                />
                <Card.Footer className="p-2 small border-0 bg-white">
                  <span className="smcp font-weight-bold">Sawtooth</span> makes
                  angular cuts
                </Card.Footer>
              </Card>
            </Col>
            <Col sm="4" className="my-3">
              <Card className="shadow border-0">
                <CardImg
                  as={Img}
                  fluid={allImages.square.childImageSharp.fluid}
                />
                <Card.Footer className="p-2 small border-0 bg-white">
                  <span className="smcp font-weight-bold">Square</span> has
                  notched edges
                </Card.Footer>
              </Card>
            </Col>
            <Col sm="4" className="my-3">
              <Card className="shadow border-0">
                <CardImg
                  as={Img}
                  fluid={allImages.jitter.childImageSharp.fluid}
                />
                <Card.Footer className="p-2 small border-0 bg-white">
                  <span className="smcp font-weight-bold">Jitter</span>{" "}
                  generates random-looking, wobbly waves
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Definition>
        <Definition term="Cycle">
          Unless you also change the{" "}
          <span className="smcp font-weight-bold">Spacing</span>, you will not
          see any changes when you modify this number. Cycle can range from 1-4
          (default: <span className="text-info font-weight-bold">1</span>) and
          specifies how many rows of "special effect" layers should be grouped
          together before inserting a smooth layer.
        </Definition>
        <Definition term="Spacing">
          Spacing can range from 0-4 (default:{" "}
          <span className="text-info font-weight-bold">0</span>). Increasing the
          spacing adds smooth/non-wave layers between the wave effect layers.
        </Definition>
        <Definition term="Twist">
          Adding a twist rotates the top surface from the bottom surface in
          0-360 degree increments (default:{" "}
          <span className="text-info font-weight-bold">0</span>).
        </Definition>
        <Definition term="Interior Wave Offset">
          <p>
            This setting applies to the special effect wave layers and offsets
            them “in” or “out” from the smooth layers. Changing this offset can
            create dynamic exterior and interior surfaces, but overextending it
            may cause the layer to separate from the form.
          </p>
          <p>
            The offset can have a value between 0-10 (default:{" "}
            <span className="text-info font-weight-bold">1.5</span>). Larger
            numbers move the wave effect “inside” and smaller numbers move the
            wave effect “outside”.
          </p>
        </Definition>
        <Definition term="Planar Repetitions">
          <p>
            How many times the wave will wrap around the pottery horizontally,
            from 3-100 (default:{" "}
            <span className="text-info font-weight-bold">30</span>).
          </p>
          <p>
            With a high amplitude, this is twice the number of "corners". When
            you choose an odd number, you may notice a “start” and “stop” point
            on one side of the piece.
          </p>
          <p>
            The higher the value, the busier the surface becomes. Lower values
            create simpler forms and can be used to create more architectural,
            geometric effects.
          </p>
        </Definition>
        <Definition term="Planar Amplitude">
          How dramatic the wave effect is on the horizontal surface, from 1-40
          (default: <span className="text-info font-weight-bold">4</span>). High
          amplitude creates the largest difference between "in" and "out"
          points. Increasing the amplitude creates a surface with more depth,
          but in excess, this can create a droopy, noodle-like effect that may
          not be stable.
        </Definition>
        <Definition term="Planar Starting&nbsp;% and Ending&nbsp;%">
          <p>
            Both of these values go from 0-100% (default:{" "}
            <span className="text-info font-weight-bold">0</span>).{" "}
            <span className="smcp font-weight-bold">Starting Percentage</span>{" "}
            specifies the vertical height where the special effect should begin,
            and <span className="smcp font-weight-bold">Ending Percentage</span>{" "}
            sets the height where the effect should end. You can use this to
            create a "band" on your piece with smooth layers above and below.
          </p>
          <p>
            We recommend setting a starting percentage of ~5% when attaching a
            slab and an even higher starting percentage with more complex,
            higher-amplitude forms.
          </p>
        </Definition>
      </section>

      <section>
        <Row className="mt-5 pt-5 mb-4">
          <Col xs="12" lg="6">
            <h2>Non-Planar: Changing the Printed Rows on the Z Axis</h2>
            <p>
              So far, changes have affected the design by moving in and out
              horizontally (along the{" "}
              <span className="smcp font-weight-bold">X-axis</span> and{" "}
              <span className="smcp font-weight-bold">Y-axis</span>), but the
              overall printed rows have been smooth.
            </p>
            <p>
              You can make changes along the{" "}
              <span className="smcp font-weight-bold">Z-axis</span> by adjusting
              the <span className="smcp font-weight-bold">non-planar</span>{" "}
              settings, such as the wave type, repetitions, and amplitude. The
              definitions are the same as the previous section, just affecting a
              different dimension.
            </p>
            <p>
              For example, this design would otherwise be a perfect cylinder,
              but changes to the{" "}
              <span className="smcp font-weight-bold">
                Non-Planar Wave Type
              </span>{" "}
              and{" "}
              <span className="smcp font-weight-bold">
                Non-Planar Amplitude
              </span>{" "}
              made a "crown" effect.
            </p>
          </Col>
          <Col className="mt-3 mb-4 my-lg-0">
            <Img
              fluid={allImages["non-planar"].childImageSharp.fluid}
              className="rounded shadow"
              alt="Non-planar wave effect applied"
            />
          </Col>
        </Row>
        <Definition term="Non-Planar Wave Type">
          Select which mathematical wave should be used to decorate your pottery
          on the vertical surface (default:{" "}
          <span className="smcp font-weight-bold">None</span>). Experiment with
          this only after gaining a base understanding of the printing process.
        </Definition>
        <Definition term="Non-Planar Effect Gradient">
          <p>
            The non-planar effect can increase from bottom to top (default) or
            increase to the middle of the design. The{" "}
            <span className="smcp font-weight-bold">Increase to Middle</span>{" "}
            setting will have an interesting vertical pattern, but not as
            dramatic as the uneven edge created by{" "}
            <span className="smcp font-weight-bold">Increase to Top</span>.
          </p>
          <p>
            <strong>
              If a non-planar wave is not selected, this will have no effect.
            </strong>
          </p>
        </Definition>
        <Definition term="Non-Planar Repetitions">
          <p>
            How many times the wave will move up and down along the Z axis the
            pottery, from 3-100 (default:{" "}
            <span className="text-info font-weight-bold">14</span>). This
            provides additional visual interest.
          </p>
          <p>
            <strong>
              If a non-planar wave is not selected, this will have no effect.
            </strong>
          </p>
        </Definition>
        <Definition term="Non-Planar Amplitude">
          <p>
            How dramatic the wave effect is on the vertical surface, from 0-100
            (default: <span className="text-info font-weight-bold">12</span>).
            As the printer nozzle moves up and down, there may come a point
            where clay sticks to the nozzle and results in an undesirable
            “dragging” and “tearing” of the previous layer. This happens when
            the non-planar amplitude is set too high. Unfortunately, this is not
            a magic number and is design-dependent: your repetitions, wave type,
            and amplitude create a unique combination.
          </p>
          <p>
            <strong>
              If a non-planar wave is not selected, this will have no effect.
            </strong>
          </p>
        </Definition>
        <Definition term="Non-Planar Starting&nbsp;% and Ending&nbsp;%">
          <p>
            Both of these values go from 0-100% (default:{" "}
            <span className="text-info font-weight-bold">0</span>).{" "}
            <span className="smcp font-weight-bold">Starting Percentage</span>{" "}
            specifies where the special effect should begin on the wall of the
            form, and{" "}
            <span className="smcp font-weight-bold">Ending Percentage</span>{" "}
            sets where the effect should end.
          </p>
          <p>
            <strong>
              If a non-planar wave is not selected, this will have no effect.
            </strong>
          </p>
        </Definition>
      </section>

      <section>
        <h2 className="mt-5 pt-5">Miscellaneous Settings</h2>
        <Definition term="Jitter Seed">
          <p>
            <strong>Only applies when the Jitter wave type is selected.</strong>{" "}
            Jitter is a “random” setting in lieu of a traditional mathematical
            wave. Potterware doesn’t generate a true random value and instead
            uses a pre-generated set of values. Changing the seed uses a
            different set of values.
          </p>
          <p>
            For a general understanding of how Jitter Seed works, set your wave
            type to Jitter, increase the planar amplitude and repetitions to 30,
            and view the shape from overhead.
          </p>
        </Definition>
      </section>

      <section>
        <h2 className="mt-5 pt-5">Print Settings</h2>
        <p>
          Potterware has settings to print multiple copies of your design. Do
          not print multiples until you have successfully completed and fired a
          test print!
        </p>
        <p>
          Not all of the settings in the final printing section apply to our
          printer. For our purposes, leave these values alone.
        </p>
        <Definition term="Scara X and Y Position">
          <strong>Not applicable to our printer.</strong> Changing these values
          will have no effect.
        </Definition>
        <Definition term="Print Multiple">
          May be used to print multiple copies of the same form. Not recommended
          for large forms, as all copies need to fit on the same bat.
        </Definition>
        <Definition term="Multi-Print Spacing">
          <p>
            Adjusts the gap between forms on a scale of 30-200 (default:{" "}
            <span className="text-info font-weight-bold">35</span>).
          </p>
          <p>
            <strong>
              Will not have an effect unless printing multiple forms.
            </strong>
          </p>
        </Definition>
        <Definition term="Multi-Print Retract Height">
          <p>
            How high the printer nozzle should move on the Z axis before moving
            over to print another copy of the form.
          </p>
          <p>
            <strong>
              Will not have an effect unless printing multiple forms.
            </strong>
          </p>
        </Definition>
        <Definition term="X and Y Count">
          <p>
            How many copies of the form should be printed on each horizontal
            axis (default: <span className="text-info font-weight-bold">2</span>
            ). Left alone, this would result in 4 copies of your form being
            printed.
          </p>
          <p>
            <strong>
              Will not have an effect unless printing multiple forms.
            </strong>
          </p>
        </Definition>
        <Definition term="Scara Count">
          <strong>Not applicable to our printer.</strong> Changing these values
          will have no effect.
        </Definition>
        <Definition term="Extrusion Speed %">
          The speed in which the clay is pushed through the printer nozzle.{" "}
          <strong>
            This can instead be controlled with our printer software and should
            not be changed.
          </strong>
        </Definition>
      </section>

      <section>
        <h2 className="mt-5 pt-5">Saving Your Design</h2>
        <Definition term="Name Your File">
          Choose a name that relates to the form you have created, as the GCODE
          cannot be easily opened and viewed after saving. “Triangular Vase with
          Large Twist” is more informative than “Vase”.
        </Definition>
        <Definition term="Download Current Parameters">
          Downloads a copy of your Potterware settings in a text document. This
          file cannot be reopened in Potterware and you will need to retype all
          of the values.
        </Definition>
        <Definition term="Download GCODE">
          <p>
            When you are happy with your design, click the{" "}
            <span className="smcp font-weight-bold">Download GCode</span>{" "}
            button. If you are on campus in the ceramics classroom, it will be
            saved in the Downloads folder. If you are off-campus or on another
            computer, you can bring your file(s) on a flash drive.
          </p>
          <p>
            Your parameters are listed at the top of your GCODE file and can be
            viewed in a text editor (like Notepad).
          </p>
        </Definition>

        <Alert variant="info" className="mt-4">
          <Row className="align-items-md-center">
            <Col xs="auto">
              <FaExclamationCircle size="3em" />
            </Col>
            <Col>
              <p className="lead mb-2">Wait, what was that design again?</p>
              <p className="mb-2">
                File organization is crucial, and it's helpful to see a preview
                of your form when referencing the parameters.
              </p>
              <p className="mb-2">
                Take a screenshot of the design and put it in a folder with the
                GCODE file. That way, you can see a preview without retyping all
                the numbers or uploading your file to a{" "}
                <a
                  href="http://gcode.ws/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GCode viewer
                </a>
                .
              </p>
            </Col>
          </Row>
        </Alert>
      </section>
    </Layout>
  );
};

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
`;

export default Potterware;
