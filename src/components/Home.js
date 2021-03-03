import React from "react";
import {Row,Col,FormControl,Form,Button} from "react-bootstrap";
import CartNews from "./CartNews";
import Gif from "../components/assets/img/news.gif";
import { useSelector, useDispatch }  from 'react-redux';

import {fetchNews } from '../redux/actions/country';
import store  from '../redux/store'



import PicHero from "../components/assets/img/mr-cup-fabien-barral-Mwuod2cm8g4-unsplash.jpg";


const Home = ()=>{
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchNews())

    });

    const news = useSelector(state =>
        (state.newsFt.fetchedItems)
    )
    console.log(news)


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
                    <button  onClick={() => dispatch(fetchNews())} className='btn-danger btn'>Download News</button>
                    <div className="box-hero">
                    </div>
                </Col>
                <Col md={3}>
                    <div className="box-gif">
                        <img src={Gif} alt="news"/>
                    </div>
                </Col>
            </Row>


                <div >
                    <div className="grid ">

                        {news.map((el,i) =>{
                            return (<CartNews key = {i}
                                             title ={el.title}
                                             content ={el.content}
                                             description ={el.description}
                                             src ={el.imageUrl}
                                             pubDate ={el.pubDate}

                            />)
                        })}

                    </div>
                </div>





        </div>


    )
}
export default Home
