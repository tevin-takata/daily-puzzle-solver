import '../App.css';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container className="footer">
      "The Daily Puzzle" published by Typosaurus

      This is an unofficial solver created by <a href="https://github.com/tevin-takata">Tevin Takata</a>
    </Container>
  );
}

export default Footer;