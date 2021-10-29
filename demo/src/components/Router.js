import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from '../components/MainLayout';
import Header from '../components/Header2';
import Footer from '../components/Footer';
import Login from '../accountapp/Login';
import Sign from '../accountapp/Sign';
import ArticleList from '../articleapp/List';
import ArticleCreate from '../articleapp/Create';
import 'bootstrap/dist/css/bootstrap.css';

export default () => (
    <Router>
    <Header/>{/* 라우터 관리 */}
    <Route exact path='/' component={Layout}/>
    <Route exact path='/Sign' component={Sign}/>
    <Route exact path='/Login' component={Login}/>
    <Route exact path='/ArticlesList' component={ArticleList} />
    <Route exact path='/ArticleCreate' component={ArticleCreate} />
    <Footer/>
    </Router>
    )