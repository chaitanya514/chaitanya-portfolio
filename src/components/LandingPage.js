import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
    render() {
        return (

            <div style={{ width: "100", margin: "auto" }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://miro.medium.com/max/1200/1*lbRRHICAZjLkotvrMY7MLQ.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">

                            <h1>Full-Stack Developer</h1>
                            <hr />
                            <p>
                                HTML/CSS | JavaScript | React | React-Native| Redux | Postgres | GraphQL | MongoDB | Express | Node
                    </p>


                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/chaitanya-patel-a195579a/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>

                                </a>

                                <a href="https://github.com/chaitanya514" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>

                                </a>

                            </div>
                        </div>

                    </Cell>

                </Grid>
            </div>
        )
    }
}
export default LandingPage;