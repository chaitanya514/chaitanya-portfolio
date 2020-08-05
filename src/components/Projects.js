import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 0
        }
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return <div><h1>This is React</h1></div>
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
                <section>
                    <div className="content">Content for the tab: {this.state.activeTab}

                        {this.toggleCategories()}
                    </div>
                </section>
            </div>
        )
    }
}
export default Projects;