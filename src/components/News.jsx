import React from "react";
import { Modal } from "react-bootstrap";

import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function News(id) {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.newsFt.fetchedItems);

  function showNews(news) {
    news.forEach((el, i) => {
      if (news.showcontent) {
        let content = el.content;
        return content;
      }
    });
  }
  let content = showNews(news);
  console.log(id.id);
  return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{news[id.id].content}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
}

export default News;
