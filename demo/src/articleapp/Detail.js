import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../components/styled-components.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button,FormGroup, FormControl, ControlLabel } from "react-bootstrap";

function ArticleDetail(props) {
    console.log(props.location.state);
    const [selectedFile, setSelectedFile] = useState(null);	//파일

    const handleFileUpload = () => {
        const formData = new FormData();
        setSelectedFile(props.location.state.image);
        console.log(props.location.state.image+"image 파일을 set해줬다 !")
       
        
        let variables = [{
            title: "title",
            content: "content"
          }]
       // formData.append("article", selectedFile, selectedFile.name);//, selectedFile.name
        formData.append("data", new Blob([JSON.stringify(variables)], {type: "application/json"}))
        // formData.append("title", formArticleTitle);
        formData.append("content", "test post");
        formData.append("writer", "12");
        formData.append("id", "31");

        axios.post('/articles/list/', formData)
          .then(res => {
            console.log('response :',JSON.stringify(res, null,2));
          })
          .catch(err => {
            console.log(formData);
            console.log('failed', err);
          });
      };
    return (
      <div>
        <div
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "4rem auto",
          }}
        >
          <h1>{props.location.state.title}</h1>
          <h5>{props.location.state.writer}</h5>
          <hr />

          <img
            style={{ width: "100%", borderRadius: "1rem", margin: "2rem 0" }}
            src={props.location.state.image}
            alt="article image"
          />

          <div style={{ textAlign: "left" }}>
            {props.location.state.content}
          </div>

          <hr />
        </div>
        <div
          style={{
            textAlign: "center",
            maxWidth: "500px",
            margin: "4rem auto",
          }}
        >
          <div className="mb-4">
            <h4>Comment Create</h4>
          </div>
          
         <Form.Group className="mb-3" controlId="formArticleTitle">
           <Form.Label>Content</Form.Label>
           <Form.Control as="textarea" rows={6} placeholder=" Content" />
         </Form.Group>
          <Button
            variant="primary"
            className="btn btn-dark rounded-pill col-6 mt-3 "
            onClick={handleFileUpload}
          >
            제출
          </Button>
        </div>
      </div>
    );
}

export default ArticleDetail
