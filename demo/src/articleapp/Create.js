import React, { useState} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

import "../components/styled-components.css";

const ArticleCreate = () => {
  // 403 에러를 막기위한 csrftoken 처리.
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  const [selectedFile, setSelectedFile] = useState(null); //파일
  // onChange 이벤트 역할
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
    //fd.append("file", event.target.files)
  };
  // formData라는 instance에 담아 보냄
  const handleFileUpload = () => {
    const formData = new FormData();

    formData.append("image", selectedFile, selectedFile.name); //, selectedFile.name

    // let variables = [{
    //     title: "title",
    //     content: "content"
    //   }]
    //formData.append("data", new Blob([JSON.stringify(variables)], {type: "application/json"}))
    // formData.append("title", formArticleTitle);
    formData.append("title", "Post Test Title !");
    formData.append("content", "test post_content");
    formData.append("writer", "12");

    axios
      .post("/articles/list/", formData)
      .then((res) => {
        console.log("response :", JSON.stringify(res, null, 2));
      })
      .catch((err) => {
        console.log(formData);
        console.log("failed", err);
      });
  };
  return (
    <>
      <div
        style={{ textAlign: "center", maxWidth: "500px", margin: "4rem auto" }}
      >
        <div className="mb-4">
          <h4>Article Create</h4>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formArticleTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" />
            <Form.Text className="text-muted">제목을 입력하세요.</Form.Text>
          </Form.Group>
          {/* accept 를 통해 image 만 가능하도록 메소드 */}
          Image
          <br />
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <br />
          <br />
          <Form.Select className="mb-3" aria-label="Project Select">
            <option>----------------</option>
            <option value="1">Test1</option>
            <option value="2">Test2</option>
            <option value="3">Test3</option>
          </Form.Select>
          <br />
          <Form.Group className="mb-3" controlId="formArticleContent">
            <Form.Label>Content</Form.Label>
            <Form.Control type="text" placeholder="Type your Text." />
          </Form.Group>
          <Button
            variant="primary"
            className="btn btn-dark rounded-pill col-6 mt-3 "
            onClick={handleFileUpload}
          >
            제출
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ArticleCreate;
