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

        </Switch>
        </BrowserRouter>
    )
}


export default Routes