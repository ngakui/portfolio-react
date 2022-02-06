import { Nav, Container, Navbar,} from 'react-bootstrap';
import { Link } from 'react-router-dom';

/**
 * Composant Navbar pour faciliter la navigation sur le site.
 */

const Navmenu = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link ><Link to="/">Accueil</Link></Nav.Link>
            <Nav.Link ><Link to="/project">Projets</Link></Nav.Link>
            <Nav.Link ><Link to="/cv">CV</Link></Nav.Link>
            <Nav.Link ><Link to="/quiz">Quiz</Link></Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    );
}

export default Navmenu;