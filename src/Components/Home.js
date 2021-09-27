import React, { Component } from 'react'
// import Logo from '../z.jpg'
export default class Home extends Component {
    render() {
        return (
            <>
           
            <div className="home">
                <h1>Welcome to my personal website</h1>
            </div>
            <div className="home2">
                <h2>I am a <span>Developer</span> from Lebanon, I have a fresh and active experience in developing websites. I like to like code and in my free time I play basketball.</h2>
            </div>

             {/* <div className="logo">
                <img src={Logo} alt="backpics"/>
            </div> */}

            
            </>
            
          
        )
    }
}

