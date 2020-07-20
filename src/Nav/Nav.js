import React, { Component } from 'react'
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
class Nav extends Component {
    about = () => {
        this.props.history.push('/about')
    }
    render(){
        return (
          <div className="nav">
            <Button variant="contained" color="secondary" onClick={this.about}>
                About Me
            </Button>
            {/* <Link className="about" to="/about">
              About
            </Link> */}
            <Link className="homepage" to="/homepage">
              Home
            </Link>
          </div>
        );
    }
}
export default Nav