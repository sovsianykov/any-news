import React from "react";
import {Card,Button} from "react-bootstrap";

import pic from './assets/img/markus-winkler-aB4BJSZoTTI-unsplash.jpg'
import News from "./News";

const CardNews =({title,description,src, pubDate,content,url,onClick}) => {



    return (
        <div className='box-dark'>
            <Card style={{ width: '100%' }}>
                <Card.Body className='box-dark'>
                    <div className="cardImgHolder ">
                        <Card.Img className='cardImg' variant="top" src={src} />
                    </div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Title>{pubDate}</Card.Title>
                    <Button variant="outline-light" onClick={onClick} >
                        read more
                    </Button>
                    <div className="newsHolder">
                        {content}
                    </div>
                </Card.Body>


            </Card>
        </div>
    )
}
export default CardNews
