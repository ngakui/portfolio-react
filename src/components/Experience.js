import { Card, Col, Row } from "react-bootstrap";

/**
 * Composant Card pour afficher les expériences
 * @param {string} period Periode du poste
 * @param {string} enterprise Entreprise
 * @param {string} position Poste occupé
 * @param {string} mission Mission accomplis au sein de l'entreprise.
 */

const Experience = ({period, enterprise, position, mission}) => {

    return (
        <Card>
            <Row>
                <Col md={3}>
                    <Card.Body className="experience-contain-header">
                        <p>{period}</p>
                        <h5>{enterprise}</h5>
                    </Card.Body>
                </Col>
                <Col md={9}>
                    <Card.Body>
                        <h5>{position}</h5>
                        <p>{mission}</p>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

export default Experience;