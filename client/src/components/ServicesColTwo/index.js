import React, { useState, useEffect } from 'react';
import servicesColTwo from '../../data/servicesColTwo.json'
import ServiceCard from '../serviceCard'

export default function ServicesColTwo() {
    const [colTwoState, setColTwoState] = useState([])
    useEffect(()=> setColTwoState(servicesColTwo), [])
    return (
        colTwoState.map(service => (
            <ServiceCard
            name={service.name}
            />
        ))
    )
}