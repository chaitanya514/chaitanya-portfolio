import React, { Component } from "react";
import "../App.css"
import {
    Tabs,
    Tab,
    Grid,
    Cell,
    Card,
    CardTitle,
    CardText,
    CardActions,
    CardMenu,
    IconButton,
    Button
} from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 0
        }
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
            
            <div className="project-grid">

                <Card shadow={0} style={{ width: '350px', height: '350px', margin: 'auto' }}>
                    <CardTitle expand style={{ color: '#fff', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png) bottom right 15% no-repeat #46B6AC' }}>React Project #1</CardTitle>
                    <CardText>
                        counter react project
                </CardText>
                    <CardActions border>
                        <Button colored >GitHub Repo.</Button>
                    </CardActions>
                </Card>

                <Card shadow={0} style={{ width: '350px', height: '350px', margin: 'auto' }}>
                    <CardTitle expand style={{ color: '#fff', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png) bottom right 15% no-repeat #46B6AC' }}>React Project #1</CardTitle>
                    <CardText>
                        counter react project
                </CardText>
                    <CardActions border>
                        <Button colored >GitHub Repo.</Button>
                    </CardActions>
                </Card>

                <Card shadow={0} style={{ width: '350px', height: '350px', margin: 'auto' }}>
                    <CardTitle expand style={{ color: '#fff', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png) bottom right 15% no-repeat #46B6AC' }}>React Project #1</CardTitle>
                    <CardText>
                        counter react project
                </CardText>
                    <CardActions border>
                        <Button colored >GitHub Repo.</Button>
                    </CardActions>
                </Card>
            </div>
            
        )
            
        }
        else if (this.state.activeTab === 1) {
            return <div><h1>This is Redux</h1></div>

        }
        else if (this.state.activeTab === 2) {
            return <div><h1>This is Postgres</h1></div>

        }
        else if (this.state.activeTab === 3) {
            return <div><h1>This is GraphQl</h1></div>

        }
    }
    render() {
        return (

            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Redux</Tab>
                    <Tab>Postgres</Tab>
                    <Tab>GraphQl</Tab>
                </Tabs>
                <section className="demo-tab">
                    <div className="content">Content for the tab: {this.state.activeTab}
                        <Grid className="projects-grid">
                            <Cell col={12}>
                                <div className="content"> {this.toggleCategories()}</div>
                            </Cell>
                        </Grid>

                    </div>
                </section>
            </div>
        )
    }
}
export default Projects;