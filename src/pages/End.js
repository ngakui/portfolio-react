import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

/**
 * Page End où sont affichés les resultat du Quiz.
 * @param {Object} props Contient les données envoyées depuis une page extérieure.
 */

const End = (props) => {

    const [note, setNote] = useState(0);


    useEffect(() => {
        setNote(props.location.state);
    },[props])

    if (note >= 5) {
        return (
            <Container>
                Bravo!!!! vous avez eu {note}/10.
                <br/>
                <Link to="/quiz"><Button variant="outline-primary"> Retour aux quiz</Button></Link>
                <Link to="/"><Button variant="outline-primary">Accueil</Button></Link>
            </Container>
        );
    } else {
        return (
            <Container>
                Retentez votre chance!!! Vous avez eu {note}/10.
                <br/>
                <Link to="/quiz"><Button variant="outline-primary"> Retour aux quiz</Button></Link>
                <Link to="/"><Button variant="outline-primary">Accueil</Button></Link>
            </Container>
        );
    }
}

export default End;