/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import Layout from "../components/MainLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../accountapp/Login";
import Sign from "../accountapp/Sign";
import ArticleList from "../articleapp/List";
import ArticleCreate from "../articleapp/Create";
import ArticleDetail from "../articleapp/Detail";
import "bootstrap/dist/css/bootstrap.css";

// 리액트 라우터.
// 1. npm install react-router-dom

export default () => (
  // 리액트 라우팅.
  //가장 부모에 BrowserRouter로 감싸 라우터 적용
  <BrowserRouter>
    <Header />
    {/* 라우터 관리, 설정한 경로입력 시에 해당 컴포넌트 호출. */}

    <Switch>
      <Route exact path="/" component={Layout} />
      <Route exact path="/Sign" component={Sign} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/ArticlesList" component={ArticleList} />
      <Route exact path="/ArticleCreate" component={ArticleCreate} />
      <Route exact path="/ArticleDetail" component={ArticleDetail} />
    </Switch>

    <Footer />
  </BrowserRouter>
);
