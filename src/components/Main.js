import React from "react"
import { Route, Switch } from "react-router-dom"
import LandingPage from "./LandingPage"
import Aboutme from "./Aboutme"
import Contact from "./Contact"
import Projects from "./Projects"
import Resume from "./Resume"


const Main = () => {

    return (
    <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/Aboutme" component={Aboutme}></Route>
        <Route path="/Contact" component={Contact}></Route>
        <Route path="/Projects" component={Projects}></Route>
        <Route path="/Resume" component={Resume}></Route>
    </Switch>

    )
}

export default Main;