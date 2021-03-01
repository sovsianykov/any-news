import React from "react";
import {Row,Col,FormControl,Form,Button} from "react-bootstrap";
import CartNews from "./CartNews";
import Gif from "../components/assets/img/news.gif";
import PicHero from "../components/assets/img/mr-cup-fabien-barral-Mwuod2cm8g4-unsplash.jpg";


const Home = ()=>{
    return  (
        <div className='hdr container-fluid' >

            <Row md={12} >
                <Col md={3}>
                    <div className="box-dark">
                        <Form>
                            <Form.Group controlId="FormText">
                                <Form.Label>SEARCH</Form.Label>
                                <Form.Control type="text" placeholder="query" />
                            </Form.Group>
                            <Button  variant="outline-light" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>

                </Col>
                <Col md={6}>
                    <div className="box-hero">
                    </div>
                </Col>
                <Col md={3}>
                    <div className="box-gif">
                        <img src={Gif} alt="news"/>
                    </div>
                </Col>
            </Row>

            <Row md={12} >
                <Col md={3}>
                    <div className="box-dark">
                        <CartNews/>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="box-dark">
                        <CartNews/>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="box-dark">
                        <CartNews/>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="box-dark">
                        <CartNews/>
                    </div>
                </Col>
            </Row>


        </div>


    )
}
export default Home
