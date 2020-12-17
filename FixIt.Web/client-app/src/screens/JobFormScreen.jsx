import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToJobForm, removeFromJobForm } from '../actions/jobDataAction';

const JobFormScreen = ({ match, location, history }) => {
  const serviceId = match.params.id;

  const hour = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const job = useSelector((state) => state.job);
  const { jobItems } = job;

  // console.log(jobItems);

  useEffect(() => {
    if (serviceId) {
      dispatch(addToJobForm(serviceId, hour));
    }
  }, [dispatch, serviceId, hour]);

  const removeFromJobHandler = (id) => {
    dispatch(removeFromJobForm(id));
  };

  const checkoutHandler = () => {
    // history.push('/login?redirect=ordering');
    history.push('/order');
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Job Form</h1>
        {jobItems.length === 0 ? (
          <Message>
            You have 0 service in form. <Link to="/">Check Services</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {jobItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/service/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.hour}
                      onChange={(e) =>
                        dispatch(
                          addToJobForm(item.service, Number(e.target.value))
                        )
                      }
                    >
                      {[0, 1, 2, 3, 4, 5, 6, 7].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromJobHandler(item.service)}
                    >
                      <i className="fas fa-times"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal ({jobItems.reduce((acc, item) => acc + item.hour, 0)})
                items
              </h2>
              $
              {jobItems
                .reduce((acc, item) => acc + item.hour * item.InitHour, 0) // Need to multiply Additional price
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={jobItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default JobFormScreen;
