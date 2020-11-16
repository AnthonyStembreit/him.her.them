import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './logo.css'

export default function Logo(){
    return(
        <div id="logo">
            <Jumbotron>
                <img id="logoimg" alt="salon logo" src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t31.0-8/22459446_293779794361443_678799294940314683_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=snuzwefW4aIAX8wSWZT&_nc_ht=scontent.fmkc1-1.fna&oh=e492fbb3a2acb14cd6114e0459f14255&oe=5FD6BE7B"></img>
                <br></br>
                <pre id="jumboLogo"> Him.    Her.    Them. </pre>
                <p id="brandStatement">"Dolore aliqua ipsum enim proident sunt commodo ad amet quis. Dolore aliqua ipsum enim proident sunt commodo ad amet quis.Dolore aliqua ipsum enim proident sunt commodo ad amet quis."</p>
            </Jumbotron>
        </div>
    )
}