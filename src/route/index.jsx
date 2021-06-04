/**
 * file: RootRoute
 * author: Jubi
 * lastModify: Jubi 2021-6-4
 */
import React, { Suspense } from 'react';
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom';

const HomePage = React.lazy(() => import('../page/home'));
const AboutPage =  React.lazy(() => import('../page/about'));

const RootRouter = ()=>{
    return <Suspense
        fallback={
            <div>
                Loading...
            </div>
        }
    >   
         <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to='/home'/>
                    </Route>
                    <Route path="/home"  component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                   
                </Switch>
            </Router>
    </Suspense>
}
export default RootRouter;