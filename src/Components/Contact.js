import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebook, faGithub, faDiscord} from '@fortawesome/free-brands-svg-icons';


export default class Contact extends Component {
    render() {
        return (
            <>
            {/* <div>
                <h1>Contact Page</h1>
            </div> */}
            
            <div className="form">
               <h2>Have a problem with a project ?</h2>     
            </div>
            
            <div className="social-container">
                <h3>Contact me at the following platforms</h3>
                <a href="https://youtu.be/58RRl1JTJvY" target="_blank" rel="noreferrer"
                className="youtube social">
                    <FontAwesomeIcon icon = {faYoutube} size="2x"/>
                </a>
                <a href="https://www.facebook.com/george.saifi" target="_blank" rel="noreferrer"
                className="facebook social">
                    <FontAwesomeIcon icon = {faFacebook} size="2x"/>
                </a>
                <a href="https://github.com/GeorgeSai" target="_blank" rel="noreferrer"
                className="github social">
                    <FontAwesomeIcon icon = {faGithub} size="2x"/>
                </a>
                <a href="https://discordapp.com/users/GeorgeSaifi#8189" target="_blank" rel="noreferrer"
                className="discord social">
                    <FontAwesomeIcon icon = {faDiscord} size="2x"/>
                </a>
            </div>
            </>
        )
    }
}
