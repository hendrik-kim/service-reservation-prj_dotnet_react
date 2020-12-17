import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Service = ({ service }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/service/${service.serviceId}`}>
        <Card.Img src={service.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/service/${service.serviceId}`}>
          <Card.Title as="div">
            <strong>{service.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="p">
          Description : <br /> {service.description}
        </Card.Text>
        {/* <Card.Text as="p">Initial : ${service.initHourRate}</Card.Text>
        <Card.Text as="p">+Hour : ${service.addHourRate}</Card.Text> */}
      </Card.Body>
    </Card>
  );
};

export default Service;
