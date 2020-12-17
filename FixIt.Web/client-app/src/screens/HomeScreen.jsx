import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Service from './../components/Service';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listServices } from './../actions/serviceActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const serviceList = useSelector((state) => state.serviceList);
  const { loading, error, services } = serviceList;

  useEffect(() => {
    dispatch(listServices());
  }, [dispatch]);
  return (
    <>
      <br />
      <h1>Our services</h1>
      <br />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {services.map((service) => (
            <Col sm={12} md={6} lg={4} xl={2}>
              <Service service={service} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
