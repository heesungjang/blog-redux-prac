import React from "react";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import PostWrite from "./pages/PostWrite";

import { history } from "./redux/configureStore";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <React.Fragment>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/write" component={PostWrite} />
                    <Route path="/detail/:id" component={Detail} />
                </Switch>
            </ConnectedRouter>
        </React.Fragment>
    );
}

export default App;
