import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Service from './../components/Service';
import services from './../service';
import axios from 'axios';

const HomeScreen = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/jobs/');

      console.log(data);
      setServices(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Our services</h1>
      <Row>
        {services.map((service) => (
          <Col sm={12} md={6} lg={4} xl={2}>
            <Service service={service} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
