import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './logo.css'

export default function Logo(){
    return(
       
            <Jumbotron id="logo">
                <img id="logoimg" alt="salon logo" src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t31.0-8/22459446_293779794361443_678799294940314683_o.jpg?_nc_cat=107&ccb=3&_nc_sid=09cbfe&_nc_ohc=hPYrnePGmJsAX8ZhcEc&_nc_ht=scontent.fmkc1-1.fna&oh=c42661e5a8bef1d58b0aadbc8b7b4679&oe=605159FB"></img>
                <br></br>
                <pre id="jumboLogo"> Him.    Her.    Them. </pre>
                <p id="brandStatement">"Dolore aliqua ipsum enim proident sunt commodo ad amet quis. Dolore aliqua ipsum enim proident sunt commodo ad amet quis.Dolore aliqua ipsum enim proident sunt commodo ad amet quis."</p>
            </Jumbotron>
       
    )
}