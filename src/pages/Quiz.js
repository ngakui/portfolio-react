import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navmenu from "../components/NavMenu";
import quizs from "../data/quiz.json"

/**
 * Page Quiz-Detail où sont listés tous les thèmes den Quiz.
 */

const Quiz = () => {

    const [allQuiz, setAllQuiz] = useState([]);

    useEffect(() => {
        setAllQuiz(quizs.quiz);
    }, [])

    return (
        <div>
            <Navmenu/>
            <Container>
                <p>Choisissez un thème:</p>
                {
                    allQuiz.map((theme, idx) => (
                        <Link to={{
                            pathname: "/quiz/questions",
                            state: theme.questions
                        }} key={idx}>
                            <Card >
                                <Card.Body>
                                    <Card.Title>{theme.nom}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    ))
                }
            </Container>
        </div>
    );
}

export default Quiz;