import React from "react";
import {Card,Button} from "react-bootstrap";
import pic from './assets/img/markus-winkler-aB4BJSZoTTI-unsplash.jpg'

const CardNews =({title,description,src, pubDate,content,url}) => {
    return (
        <div className='box-dark gridItem'>
            <Card style={{ width: '23rem' }}>
                <Card.Body className='box-dark'>
                    <div className="cardImgHolder ">
                        <Card.Img className='cardImg' variant="top" src={src} />
                    </div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>{pubDate}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="outline-light" >
                        <a href={url}>источник</a>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default CardNews
