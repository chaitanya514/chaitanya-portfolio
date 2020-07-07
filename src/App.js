import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import 'react-mdl/extra/material.css';
import {Link} from  "react-router-dom"

import Main from "./components/Main"

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Aboutme">About Me</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
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
