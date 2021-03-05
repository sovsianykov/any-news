import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/actions/country";

import pic from "./assets/img/markus-winkler-aB4BJSZoTTI-unsplash.jpg";
import News from "./News";

const CardNews = ({
  title,
  description,
  src,
  pubDate,
  content,
  url,
  onClick,
  id,
}) => {
  function newsHolderHandler() {
    const newsHold = document.querySelectorAll(".newsHolder");
    newsHold[id].classList.toggle("ishidden");
  }

  return (
    <div className="box-dark">
      <Card style={{ width: "100%" }}>
        <Card.Body className="box-dark">
          <div className="cardImgHolder ">
            <Card.Img className="cardImg" variant="top" src={src} />
          </div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Title>{pubDate}</Card.Title>
          <Button variant="outline-light" onClick={newsHolderHandler}>
            read more {id}
          </Button>
          <div className="newsHolder">
            <News id={id} key={id} onClick={onClick} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
export default CardNews;
