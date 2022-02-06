import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import Static
// import Loading from '../components/loader/Loading';
import Cv from '../pages/Cv';
import End from '../pages/End';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Project from '../pages/Project';
import Quiz from '../pages/Quiz';
import QuizDetail from '../pages/Quiz-detail';

// Lazy Import
// const Home = lazy(() => import('../pages/Home'));
// const About = lazy(() => import('../pages/About'));

/**
 * Page des routes par laquelle 
 * la navigation est effectuée entre les différentes pages.
 */

const Rooter = () => (
    // <Suspense fallback={<Loading/>}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/project" component={Project}/>
                <Route exact path="/cv" component={Cv}/>
                <Route exact path="/quiz" component={Quiz}/>
                <Route exact path="/quiz/questions" component={QuizDetail}/>
                <Route exact path="/quiz/end" component={End}/>
                <Route exact path="*" component={NotFound}/>
            </Switch>
        </Router>
    // </Suspense>
);

export default Rooter;