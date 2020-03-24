import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import PrivateRoute from './privateRoute';
import app from './base';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Characters from './Characters/characters';
import Header from './Form/header';
import Main from './Form/mainPage';
import CharacterDetails from './Characters/characterDetails';
import Houses from './Houses/houses';
import HouseDetails from './Houses/houseDetails';
import Spells from './Spells/spells';
import Hat from './Hat/hat';

class App extends Component {
    /*state = {
        loading: true,
        authenticated: false,
        user: null
    };

    componentWillMount() {
        app.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    authenticated: true,
                    currentUser: user,
                    loading: false
                });
            } else {
                this.setState({
                    authenticated: false,
                    currentUser: null,
                    loading: false
                });
            }
        });
    }*/

    render() {
        /*const {authenticated, loading} = this.state;

        if (loading) {
            return <p>Loading</p>;
        }*/

        return (
            <div className='app'>
                <Route path='/' render={() =>
                    <Redirect to='/home' />
                }
                />
                <Header />
                <Switch>
                    <Route
                        path='/home'
                        render={() =>
                            <Main />
                        }
                    />
                    <Route
                        path='/characters/:character'
                        render={(props) =>
                            <CharacterDetails {...props} />
                        }
                    />
                    <Route
                        path='/characters'
                        render={() =>
                            <Characters />
                        }
                    />
                    <Route
                        path='/houses/:house_id'
                        render={(props) =>
                            <HouseDetails {...props} />
                        }
                    />
                    <Route
                        path='/houses'
                        render={() =>
                            <Houses />
                        }
                    />
                    <Route
                        path='/spells'
                        render={() =>
                            <Spells />
                        }
                    />
                    <Route
                        path='/hat'
                        render={() =>
                            <Hat />
                        }
                    />
                </Switch>
            </div>
        );
        /*return (
            <Router>
                <div>
                    <PrivateRoute
                        exact
                        path="/"
                        component={Characters}
                        authenticated={authenticated}
                    />
                    <Route exact path="/login" component={LogIn} />
                    <Route exact path="/signup" component={SignUp} />
                </div>
            </Router>
        );*/
    }
}

export default App;