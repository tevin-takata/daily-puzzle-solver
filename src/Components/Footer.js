import '../App.css';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container className="footer">
      <p>"The Daily Puzzle" published by Typosaurus</p>
      <p>This is an unofficial solver created by <a href="https://github.com/tevin-takata">Tevin Takata</a></p>
    </Container>
  );
}

export default Footer;