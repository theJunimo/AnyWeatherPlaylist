import React from "react";
import { Switch, Route } from "react-router-dom";
import IntroPage from "pages/IntroPage";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={IntroPage} />
            </Switch>
        </div>
    );
};

export default App;
