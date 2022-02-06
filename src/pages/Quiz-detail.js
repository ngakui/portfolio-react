import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";

/**
 * Page Quiz-Detail où sont listés les quiz par rapport à un thème.
 */

const QuizDetail = (props) => {
    let history = useHistory();
    const [questions, setQuestion] = useState([]);
    let result = [];
    var reponse1 = "";
    var reponse2 = "";
    var reponse3 = "";
    var reponse4 = "";
    var reponse5 = "";
    var reponse6 = "";
    var reponse7 = "";
    var reponse8 = "";
    var reponse9 = "";
    var reponse10 = "";

    const onChangeValue = (event) => {
        if (event.target.name === "valeur0") {
            reponse1 = event.target.value;
        } else if (event.target.name === "valeur1") {
            reponse2 = event.target.value;
        } else if (event.target.name === "valeur2") {
            reponse3 = event.target.value;
        } else if (event.target.name === "valeur3") {
            reponse4 = event.target.value;
        } else if (event.target.name === "valeur4") {
            reponse5 = event.target.value;
        } else if (event.target.name === "valeur5") {
            reponse6 = event.target.value;
        } else if (event.target.name === "valeur6") {
            reponse7 = event.target.value;
        } else if (event.target.name === "valeur7") {
            reponse8 = event.target.value;
        } else if (event.target.name === "valeur8") {
            reponse9 = event.target.value;
        } else if (event.target.name === "valeur9") {
            reponse10 = event.target.value;
        }
      }

      const validate = () => {
        let note = 0;
        result = [reponse1,reponse2, reponse3,reponse4, reponse5,reponse6, reponse7, reponse8, reponse9,reponse10];

        for (let i = 0; i < questions.length; i++) {
            for (let j = 0; j < questions[i].propositions.length; j++){
                if(questions[i].propositions[j].value === result[i]){
                    if (questions[i].propositions[j].status === true) {
                        note++
                    }
                }
            }
            
        }
        history.push({
            pathname: '/quiz/end',
            state: note
        })
      }

    useEffect(() => {
        setQuestion(props.location.state);
    },[props])

    return (
        <Container>
            {
                questions.map((question, index) => (
                    <Card key={index}>
                        <Card.Body>
                            <Card.Title>{question.text}</Card.Title>
                            <Card.Text>
                                <div onChange={onChangeValue}>
                                {
                                    question.propositions.sort(() => 0.5 - Math.random()).map((prop, idx) => (
                                        <label key={idx}><input type="radio" value={prop.value} name={"valeur"+index} /> {prop.value}</label>
                                    )) 
                                }
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
            }
                <Button onClick={validate} variant="outline-primary"> Valider</Button>
        </Container>
    );
}


export default QuizDetail;
