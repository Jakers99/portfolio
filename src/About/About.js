import React, { Component } from "react";
class About extends Component {
render(){
    return (
      <>
        <h1 className="aboutMe">About Me!</h1>
        <div className="icons">
          <img
            className="icon"
            src="https://png.pngitem.com/pimgs/s/17-171719_html-css-js-icons-hd-png-download.png"
          />
          <img
            className="pg"
            src="https://assets.puzzlefactory.pl/puzzle/205/866/original.jpg"
          />
          <div>
              <img className= 'react' src= 'https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png' />
              <img src= 'https://cdn.auth0.com/blog/nodenpm/logo.png' />
          </div>
        </div>
        <div className="about">
          <p>
            My name is Jacob Dahl, I am a very motivated and passionate software
            developer. I use multiple languages like HTML, CSS, JavaScript,
            Node, React, PostgreSQL, and many other languages that I have become
            proficient in over the 6 months I spent in Prime Digital Academy.
          </p>
          <h1 className="army">Army</h1>
          <p>
            I am currently an MP(Military Police) in the Army Reserves as a
            Specialist. My roles in the Army entail:
          </p>
          <ul className="duties">
            <li>Traffic and riot control </li>
            <li>Arrest and restraint of suspects</li>
            <li>Investigating and collecting evidence</li>
            <li>Povide Medical Treatment During Combat</li>
            <li>Convoys in a Combat Area</li>
          </ul>
        </div>
      </>
    );
}
}
export default About;