import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import services from './../service';

const ServiceScreen = ({ match }) => {
  const service = services.find((p) => p._id === match.params.id);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      {/* <Row> */}
      {/* <Col md={3}>
          <Image src={service.image} alt={service.name} fluid />
        </Col> */}
      {/* <Col md={5}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Image src={service.image} alt={service.name} fluid />
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>{service.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Price: ${service.initHourRate}</ListGroup.Item>
            <ListGroup.Item>+hour: ${service.addHourRate}</ListGroup.Item>
            <ListGroup.Item>Description: {service.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}> */}
      <Card>
        <ListGroup variant="flush">
          {/* <ListGroup.Item>
            <Image src={service.image} alt={service.name} fluid />
          </ListGroup.Item> */}
          <ListGroup.Item>
            <h3>{service.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>Price: ${service.initHourRate}</ListGroup.Item>
          <ListGroup.Item>+hour: ${service.addHourRate}</ListGroup.Item>
          <ListGroup.Item>Description: {service.description}</ListGroup.Item>
          {/* </ListGroup>
          <ListGroup variant="flush"> */}
          {/* <ListGroup.Item>
            <Row>
              <Col>Price:</Col>
              <Col>
                <strong>${service.price}</strong>
              </Col>
            </Row>
          </ListGroup.Item> */}

          <ListGroup.Item>
            <Button
              className="btn-block"
              type="button"
              disabled={service.countInStock === 0}
            >
              Submit Request Form
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      {/* </Col> */}
      {/* </Row> */}
    </>
  );
};

export default ServiceScreen;
