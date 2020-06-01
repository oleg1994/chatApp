import React from 'react'
import './Auth.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { LoginForm, RegisterForm } from '../../modules/ModulesExports'



const Auth = () => {
    return (
        <section className='auth'>
            <div className='auth__content'>
                <Router>
                    <Switch>
                        <Route exact path={['/', '/login']}>
                            <LoginForm />
                        </Route>
                        <Route path="/register">
                            <RegisterForm />
                        </Route>
                    </Switch>
                </Router>
                </div>
        </section>
    )
}

export default Auth
