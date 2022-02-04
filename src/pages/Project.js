import { Container } from "react-bootstrap";
import CardComp from "../components/CardComp";
import Navmenu from "../components/NavMenu";
import projet1 from "../static/images/project1.jpg"
import projet2 from "../static/images/project2.jpg"
import projet3 from "../static/images/project3.jpg"
import projet4 from "../static/images/project4.jpg"

/**
 * Page projets où sont representés tous les projets de la personne.
 */

const Project = () => {

    const projects = [
        {
            title: "Projet 1", 
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
            img: projet1, 
            link: "https://ngakui.fr"
        },
        {
            title: "Projet 2", 
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
            img: projet2, 
            link: "https://ngakui.fr"
        },
        {
            title: "Projet 3", 
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
            img: projet3, 
            link: "https://ngakui.fr"
        },
        {
            title: "Projet 4", 
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
            img: projet4, 
            link: "https://ngakui.fr"
        },
    ];

    return (
        <div>
            <Navmenu/>
            <Container>
                {
                    projects.map((project, index) => (
                    <CardComp className="container" key={index}
                    title={project.title} 
                    desc={project.desc} 
                    img={project.img}
                    link={project.link}
                    />
                ))
                }
            </Container>
        </div>
    );
}

export default Project;