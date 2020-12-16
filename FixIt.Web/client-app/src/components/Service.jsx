import React from 'react';
import { Card } from 'react-bootstrap';

const Service = ({ service }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/service/${service._id}`}>
        <Card.Img src={service.image} variant="top" />
      </a>

      <Card.Body>
        <a href={`/service/${service._id}`}>
          <Card.Title as="div">
            <strong>{service.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="p">Initial : ${service.initHourRate}</Card.Text>
        <Card.Text as="p">+Hour : ${service.addHourRate}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Service;
