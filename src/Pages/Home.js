import React from 'react';
import '../index.css';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../logo.png';

const Home = () => {
  return (
    <Container className="home">
      <Row>
        <Col md={5} className="justify-content-center">
          <img src={logo} alt="The Daily Puzzle Logo" style={{ width: '200px', height: '200px' }} />
        </Col>
        <Col md={7} className="justify-content-end">
          <p>
            This is an unofficial solver of puzzles from the mobile app <a href="https://play.google.com/store/apps/details?id=com.typosaurus.thedailypuzzle&hl=en_US&gl=US">The Daily Puzzle</a> developed by <a href="https://typosaurusgames.com/">Typosaurus</a>.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
