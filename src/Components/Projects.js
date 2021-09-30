import React, { Component } from 'react'
import Sc from '../z1.png';
import Sc1 from '../z2.png';
import Sc2 from '../z3.png';
export default class Projects extends Component {
    render() {
        return (
            <>
            <div>
                <h2>Welcome to my Projects Page</h2>
            </div>

            <div>
                <p>Here I will showcase some of the projects that I worked on and some that in my opinion looks good and well made.</p>
            </div>

            <div>
                <h3>Jack's Website</h3>
                <a href="https://jacekjeznach.com/" target="_blank" rel="noreferrer" >Press here</a>

                <div className="sitepic">
                <img src={Sc} className="sitepic2"  alt="backp"/>
                </div>
            </div>


            <div>
                <h3>Francois's Website</h3>
                <a href="http://www.francoisrisoud.com/" target="_blank" rel="noreferrer">Click me to see something cool</a>
                <div className="sitepic3">
                <img src={Sc1} className="sitepic4" alt="back"/>
                </div>
            </div>

            <div>
                <h3>Species in Pieces</h3>
                <a href="http://www.species-in-pieces.com/#" target="_blank" rel="noreferrer">Click this button right here</a>
                <div className="sitepic5">
                <img src={Sc2} className="sitepic6" alt="backk"/>
                </div>
            </div>

            </>
        )
    }
}
