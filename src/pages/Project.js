import { Container } from "react-bootstrap";
import CardComp from "../components/CardComp";
import Navmenu from "../components/NavMenu";
import projet1 from "../assets/images/project1.jpg"
import projet2 from "../assets/images/project2.jpg"
import projet3 from "../assets/images/project3.jpg"
import projet4 from "../assets/images/project4.jpg"

const Project = () => {

    const projects = [
        {
            title: "Projet 1", 
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
            img: projet1, 
            link: "#"
        },
        {
            title: "Projet 2", 
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
            img: projet2, 
            link: "#"
        },
        {
            title: "Projet 3", 
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
            img: projet3, 
            link: "#"
        },
        {
            title: "Projet 4", 
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
            img: projet4, 
            link: "#"
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