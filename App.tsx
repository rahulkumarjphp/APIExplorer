import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/provider/:providerName" component={DetailsPage} />
            </Switch>
        </Router>
    );
};

export default App;