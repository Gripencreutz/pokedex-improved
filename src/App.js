import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './Components/Layout/Navbar'
import Dashboard from './Components/Layout/Dashboard'
import Pokemon from './Components/Pokemon/Pokemon'

import BgImg from './pattern.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="App" style={{ background: `url(${BgImg})` }}>
                    <NavBar />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />

                        </Switch>

                    </div>
                </div>
            </Router>
        )
    }
}
