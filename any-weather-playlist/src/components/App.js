import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { IntroPage, MainPage } from 'pages'; 

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path = '/' component = { IntroPage } />
                <Route exact path = '/main' component = { MainPage } />
            </Switch>
        </div>
    )
}

export default App;