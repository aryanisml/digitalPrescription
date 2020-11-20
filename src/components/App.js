import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Uploader from './Uploader';
import Header from './Header';
import FilesList from './FilesList';

const App = () => {
    return (
            <div className="container">
                <Header />
                <div className="main-content">
                    <Switch>
                        <Route path="/app/" exact={true}> <Uploader /> </Route>
                        <Route component={FilesList} path="/app/list" />
                    </Switch>
                </div>
            </div>
    )
}
export default App;