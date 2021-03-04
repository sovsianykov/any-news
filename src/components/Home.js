import React from "react";
import {Row, Col, FormControl, Form, Button, Card} from "react-bootstrap";
import CartNews from "./CartNews";
import Gif from "../components/assets/img/news.gif";
import { useSelector, useDispatch }  from 'react-redux';

import {fetchNews } from '../redux/actions/country';
import store  from '../redux/store'



import PicHero from "../components/assets/img/mr-cup-fabien-barral-Mwuod2cm8g4-unsplash.jpg";
import News from "./News";


const Home = ()=>{
    const dispatch = useDispatch()



 const selectors = document.querySelectorAll('select')
 const inputs = document.querySelectorAll('input')
    let topicSelected = 'general'
    let querySelected =``
    function onQueryHandler()  {
       querySelected = inputs[0].value
        console.log(querySelected)
        dispatch(fetchNews(topicSelected,querySelected))
    }
  function onSelectHandler()  {
          topicSelected = selectors[0].value
         console.log(topicSelected)
      dispatch(fetchNews(topicSelected))
     }
    React.useEffect(() => {
        dispatch(fetchNews(topicSelected,querySelected))

    },[dispatch]);
    const news = useSelector(state =>
        (state.newsFt.fetchedItems)
    )
    console.log(news)
    function newsHolderHandler() {
        const newsHold = document.querySelector('.newsHolder')
        newsHold.classList.toggle('ishidden')
    }



    return  (
        <div className='hdr container-fluid  ' >

            <div  className='box-darker' >
                <div className='frm' >
                    <Form className='form' id='topic'>
                        <Form.Group   controlId="select">
                            <Form.Label> Topic</Form.Label>
                            <Form.Control  as="select" custom>
                                <option id='general'>general</option>
                                <option id='business'>business</option>
                                <option  id='tech'>tech</option>
                                <option  id='entertainment'>entertainment</option>
                                <option   id='sports'>sports</option>
                                <option   id='health'> health</option>
                            </Form.Control>
                        </Form.Group>
                        <Button  variant="outline-light"  onClick={onSelectHandler} >
                            SET
                        </Button>
                    </Form>
                    <Form className='form'>


                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Search News By Query</Form.Label>
                            <Form.Control type="text" placeholder="your query" defaultValue = ' '   />
                        </Form.Group>
                        <Button variant="outline-light" onClick={onQueryHandler}>
                            GET NEWS
                        </Button>
                    </Form>
                </div>




                    {/*<button  onClick={() => dispatch(fetchNews())} className='btn-danger btn'>Download News</button>*/}
                    <div className="box-hero">
                    </div>


                    <div className="box-gif">
                        <img src={Gif} alt="news"/>
                    </div>



            </div>


                <div >
                    <div className="middle">

                    </div>
                    <div className="newsHolder">
                    </div>
                    <div className="grid ">

                        {news.map((el,i) =>{
                            return (<CartNews key = {i}
                                             title ={el.title}
                                             content ={el.content}
                                             description ={el.description}
                                             src ={el.imageUrl}
                                             pubDate ={el.pubDate}
                                             onClick = {newsHolderHandler}
                            />)
                        })}

                    </div>

                </div>





        </div>


    )
}
export default Home
