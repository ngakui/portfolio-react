import { Col, Container, Row} from 'react-bootstrap';
import Navmenu from "../components/NavMenu";
import profil from "../assets/images/profil.jpg"

/**
 * Page d'accueil.
 */

const Home = () => {
    return (
        <div>
            <Navmenu/>
            <Container>
                <Row>
                    {/*Image de la personne.*/}
                    <Col className="home" md={6}><img src={profil} alt="Home image"/></Col>
                    
                    {/*Queslques détails sur la personne*/}
                    <Col className="home" md={6}>
                        <div className="name-detail">
                            <div>
                                <h1 >Nom et Prenom</h1>
                                <h2 className="poste">Développeur Web et Mobile</h2>
                                <h2 className="promo">Promotion</h2>
                            </div>
                            <div>Socials icons</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;