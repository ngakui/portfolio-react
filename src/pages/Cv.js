import { Card, Col, Container, Row } from "react-bootstrap";
import Navmenu from "../components/NavMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import profil from "../assets/images/profil.jpg"
import Experience from "../components/Experience";

const Cv = () => {

    const experiences = [
        {
            period: "March 2016 - Present", 
            enterprise: "CreativeM", 
            position: "Web Developer", 
            mission: "Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui."
        },
        {
            period: "March 2016 - Present", 
            enterprise: "CreativeM", 
            position: "Web Developer", 
            mission: "Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui."
        },
        {
            period: "March 2016 - Present", 
            enterprise: "CreativeM", 
            position: "Web Developer", 
            mission: "Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui."
        },
    ];

    return (
        <div>
            <Navmenu />
            <Container>
                <section>
                    <Row>
                        <Col md={6}>
                            {/* <div className="img-circle">
                                <img src={profil} />
                            </div> */}
                        </Col>
                        <Col md={6}>
                            <p>Prenom, Nom</p>
                            <p><FontAwesomeIcon icon={faEnvelope} /> Email: ghost@gmail.com</p>
                            <p><FontAwesomeIcon icon={faPhoneAlt} /> Télephone: </p>
                            <p><FontAwesomeIcon icon={faMapMarkedAlt} /> Adresse: </p>
                        </Col>
                    </Row>
                </section>
                <section>
                    <h1>A Propos de Moi</h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged.
                    </p>
                </section>
                <section>
                    <h1>Experiences</h1>
                    {
                        experiences.map((exp, idx) => (
                            <Experience key={idx}
                            period={exp.period}
                            enterprise={exp.enterprise}
                            position={exp.position}
                            mission={exp.mission}
                             />
                        ))
                    }
                </section>
                <section>
                    Formations
                </section>
                <section>
                    Compétences
                </section>
                <section>
                    Diplôme/Certification
                </section>
            </Container>
        </div>
    );
}

export default Cv;