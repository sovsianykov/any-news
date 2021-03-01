import React from "react";
import {Card,Button} from "react-bootstrap";
import pic from './assets/img/markus-winkler-aB4BJSZoTTI-unsplash.jpg'

const CardNews =() => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pic} />
                <Card.Body className='box-dark'>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="outline-light">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default CardNews
