import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import Static
// import Loading from '../components/loader/Loading';
import Cv from '../pages/Cv';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Project from '../pages/Project';

// Lazy Import
// const Home = lazy(() => import('../pages/Home'));
// const About = lazy(() => import('../pages/About'));


const Rooter = () => (
    <Suspense fallback={<Loading/>}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/project" component={Project}/>
                <Route path="/cv" component={Cv}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    </Suspense>
);

export default Rooter;