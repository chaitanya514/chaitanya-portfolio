import React from 'react';
import './App.css';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import 'react-mdl/extra/material.css';
import {Link} from  "react-router-dom"

import Main from "./components/Main"

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Chaitanya Patel" scroll>
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Aboutme">About Me</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Chaitanya Patel">
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/Aboutme">Projects</Link>
                <Link to="/Aboutme">About Me</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>

            <div className="page-content" />
            <Main />


        </Content>
    </Layout>
</div>


  );
}

export default App;
