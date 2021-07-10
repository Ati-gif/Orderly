import React, {useState, useEffect} from 'react'
import {Button, } from "react-bootstrap";
import {Card, Image} from 'react-bootstrap'
import orderlyImg from '../images/about.png'

const About = () => {
    return (
        <div>
            <Card className="text-center"style={{display: 'flex'}}>
      <Card.Body>
        <Image src={orderlyImg} fluid />
        <Card.Text>
            <p></p>
        Remember those moments when you don't want to spend extra money, but you’re wasting your time between supermarket aisles desperately trying to remember which products are really needed? 
      Well, you’re in luck! Thanks to Orderly you’ll be able to print a inventory list and organize your shopping before you go!
        </Card.Text>
        <p></p>
        <Button variant="outline-secondary" href='https://github.com/Ati-gif/Orderly' >Our GitHub</Button>{' '}
       
      </Card.Body>
    </Card>
        </div>
    )
} 

export default About