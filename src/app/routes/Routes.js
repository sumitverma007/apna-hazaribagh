import React from 'react'
import { BrowserRouter,Redirect , Route , Switch} from 'react-router-dom'
import { baseUrl } from '../urlConfig'
import LazyloadComponent from './LazyloadComponent'

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path = {baseUrl + "/"}>
                <Redirect to={baseUrl + '/login'} />
            </Route>

            <Route
                exact
                path={'/login'}
                component={props => (
                <LazyloadComponent {...props} renderComponent={'login'} />
                )}
             />
              <Route
                exact
                path={'/signup'}
                component={props => (
                <LazyloadComponent {...props} renderComponent={'signup'} />
                )}
             />

             <Route 
             exact
             path={'/post/:slug'}
             component = {props => (
                <LazyloadComponent {...props} renderComponent ={'post'} />
    )}
             />
              <Route 
             exact
             path={'/home'}
             component = {props => (
                <LazyloadComponent {...props} renderComponent ={'home'} />
    )}
             />

<Route 
             exact
             path={'/add-new'}
             component = {props => (
                <LazyloadComponent {...props} renderComponent ={'createPost'} />
    )}
             />


        </Switch>
        </BrowserRouter>
    )
}


export default Routes