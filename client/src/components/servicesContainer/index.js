import React from 'react';
import ServicesColOne from '../ServicesColOne';
import ServicesColTwo from '../ServicesColTwo';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './services.css'

export default function Services() {
  return (

    <Row id="services">
      <Col lg={12}><h2 class="title">Services</h2></Col>
      <Col>
        <ul>
          <ServicesColOne />
        </ul>
      </Col>
      <Col>
        <ul>
          <ServicesColTwo />
        </ul>
      </Col>
    </Row>

  )
}