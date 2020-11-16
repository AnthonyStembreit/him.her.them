import React from 'react'
import Navigation from '../components/navbar'
import About from '../components/about'
import StylistCard from '../components/stylistCard'
import Location from '../components/location'
import './home.css'


export default function Home() {
    return (
        <div id="home">
            <Navigation />
            <About />
            <div id="stylist">
                <StylistCard />
            </div>
            <Location />
        </div>
    )
}