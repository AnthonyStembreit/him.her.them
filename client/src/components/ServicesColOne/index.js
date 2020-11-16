import React, { useState, useEffect } from 'react';
import ServiceCard from '../serviceCard'
import servicesColOne from '../../data/servicesColOne.json'

export default function ServiceColOne( ){
    const [colOneState, setColOneState] = useState([])
    useEffect(()=> setColOneState(servicesColOne), [])
    return(
        colOneState.map(service => (
            <ServiceCard
            name={service.name}
            />
        ))
        
    )
}