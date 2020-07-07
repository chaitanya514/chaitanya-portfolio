import React, {Component} from "react";
import {Grid,Cell} from "react-mdl";

class LandingPage extends Component {
    render(){
        return(
            
            <div style={{width:"100",margin:"auto"}}>
    <Grid className="landing-grid">
        <Cell col={12}>
                <img src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-10-avatar-2754575_120521.png"
                    alt="avatar"
                    className="avatar-img"
                />
                <div className="banner-text">

                    <h1>Full-Stack Developer</h1>
                    </div>
                   

        </Cell>
        
    </Grid>
            </div>
        )     
    }
}
 export default LandingPage;