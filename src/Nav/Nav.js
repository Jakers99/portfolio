import React, { Component } from 'react'
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
class Nav extends Component {
    about = () => {
        this.props.history.push('/about')
    }

    render(){
        return (
          <div className="nav-bar">
            {/* <Button variant="contained" color="secondary" onClick={this.about}>
                About Me
            </Button> */}
            <Link className="nav-link" to="/homepage">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </div>
        );
    }
}
export default Nav