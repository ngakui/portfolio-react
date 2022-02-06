import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import { Card } from "react-bootstrap";

/**
 * Composant Card pour afficher les projets
 * @param {string} title Nom du projet
 * @param {string} desc Description du projet
 * @param {string} img Image location
 * @param {string} link External link of project.
 */

const CardComp = ({title, desc, img, link}) => {
    return (
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {desc}
            </Card.Text>
            <a href={link}>Go to project     <FontAwesomeIcon icon={faExternalLinkAlt} /> </a>
            </Card.Body>
        </Card>
    );
}

export default CardComp;