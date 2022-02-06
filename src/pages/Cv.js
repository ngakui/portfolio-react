import {Col, Container, Row } from "react-bootstrap";
import Navmenu from "../components/NavMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import profil from "../static/images/profil.jpg"
import Experience from "../components/Experience";
/**
 * Page CV où est representé toutes les informations de la personne.
 */

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

                {/* Section d'Information*/}
                <section>
                    <Row>
                        <Col md={6}>
                            <div className="img-circle">
                                <img src={profil} alt="Profile"/>
                            </div>
                        </Col>
                        <Col md={6}>
                            <p>Prenom, Nom</p>
                            <p><FontAwesomeIcon icon={faEnvelope} /> Email: ghost@gmail.com</p>
                            <p><FontAwesomeIcon icon={faPhoneAlt} /> Télephone: </p>
                            <p><FontAwesomeIcon icon={faMapMarkedAlt} /> Adresse: </p>
                        </Col>
                    </Row>
                </section>

                {/* Section A Propos*/}
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

                {/* Section Experiences*/}
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
                
                {/* Section Formations*/}
                <section className="education">
                    <div className="section-inner">
                        <h1>Formations</h1>
                        <div className="content">
                            <div className="item">
                                <h3 className="title">Spécialité - <span className="place"><a href="https://ngakui.fr">Ecole de Formation / Université</a></span> <span className="year">(Mois année - Mois année)</span></h3>
                            </div>
                            <div className="item">
                                <h3 className="title">Spécialité - <span className="place"><a href="https://ngakui.fr">Ecole de Formation / Université</a></span> <span className="year">(Mois année - Mois année)</span></h3>
                            </div>
                            
                            <div className="item">
                                <h3 className="title">Spécialité - <span className="place"><a href="https://ngakui.fr">Ecole de Formation / Université</a></span> <span className="year">(Mois année - Mois année)</span></h3>
                            </div>

                            <div className="item">
                                <h3 className="title">Spécialité - <span className="place"><a href="https://ngakui.fr">Ecole de Formation / Université</a></span> <span className="year">(Mois année - Mois année)</span></h3>
                            </div>
                            
                        </div>
                    </div>
                </section>

                {/* Section Compétences*/}
                <section className="skills">
                    <div className="section-inner ">
                        <h2>Compétences</h2>
                        <div className="skillset">
                            <div className="item">
                                <h3 className="level-title">Python &amp; Django</h3>
                                <div className="level-bar">
                                    <div className="level-bar-inner" style={{width: '50%'}} >
                                    </div>                                      
                                </div>                               
                            </div>
                            <div className="item">
                                <h3 className="level-title">Python &amp; Django</h3>
                                <div className="level-bar">
                                    <div className="level-bar-inner" style={{width: '80%'}} >
                                    </div>                                      
                                </div>                               
                            </div>
                            <div className="item">
                                <h3 className="level-title">Python &amp; Django</h3>
                                <div className="level-bar">
                                    <div className="level-bar-inner" style={{width: '40%'}} >
                                    </div>                                      
                                </div>                               
                            </div>
                            <div className="item">
                                <h3 className="level-title">Python &amp; Django</h3>
                                <div className="level-bar">
                                    <div className="level-bar-inner" style={{width: '75%'}} >
                                    </div>                                      
                                </div>                               
                            </div>
                            <div className="item">
                                <h3 className="level-title">Python &amp; Django</h3>
                                <div className="level-bar">
                                    <div className="level-bar-inner" style={{width: '50%'}} >
                                    </div>                                      
                                </div>                               
                            </div>
                            <div className="item">
                                <h3 className="level-title">Python &amp; Django</h3>
                                <div className="level-bar">
                                    <div className="level-bar-inner" style={{width: '50%'}} >
                                    </div>                                      
                                </div>                               
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Diplomes & Certifications*/}
                <section className="education" style={{marginBottom: '40px'}}>
                    <div className="section-inner">
                        <h1>Diplômes / Certification</h1>
                        <div className="content">
                            <div className="item">
                                <h3 className="title">Intitulé du diplôme / certification - <span className="year">(Année d'obtention)</span></h3>
                            </div>
                            <div className="item">
                                <h3 className="title">Intitulé du diplôme / certification - <span className="year">(Année d'obtention)</span></h3>
                            </div>
                            <div className="item">
                                <h3 className="title">Intitulé du diplôme / certification - <span className="year">(Année d'obtention)</span></h3>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
}

export default Cv;