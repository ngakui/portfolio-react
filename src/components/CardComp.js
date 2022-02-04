import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import { Card } from "react-bootstrap";

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