import React from "react";

import { Row, Col } from "react-bootstrap";

const Definition = ({ term, children, md = 3, lg = 2, ...rest }) => {
  return (
    <Row as="dl">
      <Col as="dt" md={md} lg={lg} {...rest}>
        {term}
      </Col>
      <Col as="dd">{children}</Col>
    </Row>
  );
};

export default Definition;
