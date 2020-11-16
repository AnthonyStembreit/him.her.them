import React from 'react'
import Navigation from '../components/navbar'
import Logo from '../components/logo'
import About from '../components/about'
import Services from '../components/servicesContainer'
import StylistCard from '../components/stylistCard'
import Location from '../components/location'
import './home.css'


export default function Home() {
    return (
        <div id="home">
            <Navigation />
            <Logo />
            <About/>
            <Services/>
            <div id="stylist">
                <StylistCard />
            </div>
            <Location />
        </div>
    )
}