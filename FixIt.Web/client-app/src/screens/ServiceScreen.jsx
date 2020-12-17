import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listServicesDetails } from './../actions/serviceActions';

const ServiceScreen = ({ history, match }) => {
  const [hour, setHour] = useState(0);

  const dispatch = useDispatch();

  const serviceDetails = useSelector((state) => state.serviceDetails);
  const { loading, error, service } = serviceDetails;

  useEffect(() => {
    dispatch(listServicesDetails(match.params.id));
  }, [dispatch, match]);

  const addToJobDataHandler = () => {
    history.push(`/job/${match.params.id}?hour=${hour}`);
  };

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Card style={{ width: '50rem' }}>
        <ListGroup variant="flush">
          {/* <ListGroup.Item>
            <Image src={service.image} alt={service.name} fluid />
          </ListGroup.Item> */}
          <ListGroup.Item>
            <h3>{service.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>Price: ${service.initHourRate} / initial hour</Col>
              <Col>${service.addHourRate}/ add hours</Col>
              <Col>
                <Form.Control
                  as="select"
                  value={hour}
                  onChange={(e) => setHour(e.target.value)}
                >
                  {[0, 1, 2, 3, 4, 5, 6].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Row>
          </ListGroup.Item>
          {/* <ListGroup.Item>
            <Row>
              <Col>Add Hour (${service.addHourRate}/hour)</Col>
              <Col>
                <Form.Control
                  as="select"
                  value={hour}
                  onChange={(e) => setHour(e.target.value)}
                >
                  {[1, 2, 3, 4, 5, 6, 7].map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Row>
          </ListGroup.Item> */}
          <ListGroup.Item>Description: {service.description}</ListGroup.Item>
          <ListGroup.Item>
            <Button
              onClick={addToJobDataHandler}
              className="btn-block"
              type="button"
            >
              Add to proceed Job Request
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      {/* <Button onClick={addToJobDataHandler} className="btn-block" type="button">
        Add to proceed Job Request
      </Button> */}
    </>
  );
};

export default ServiceScreen;
