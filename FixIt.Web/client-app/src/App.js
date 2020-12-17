import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ServiceScreen from './screens/ServiceScreen';
import DashboardScreen from './screens/DashboardScreen';
import JobDataScreen from './screens/JobFormScreen';
import OrderScreen from './screens/OrderScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/service/:id" component={ServiceScreen} />
          <Route path="/job/:id" component={JobDataScreen} />
          <Route path="/order" component={OrderScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
