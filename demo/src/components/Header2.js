import React from 'react'
import '../base.css';



import { Link } from 'react-router-dom';
const Header = () => {
 
return (
<div className="pragmatic_header">
<div>
    <h1 className="pragmatic_logo">
        Pragmatic
    </h1>
</div>
<div className="pragmatic_header_navbar">
<Link to="/ArticlesList"  className="pragmatic_header_nav"><span>Articles</span></Link>
    {/* <a href="ArticlesList" className="pragmatic_header_nav" onClick={gotoArticle}
    >
        <span>Articles</span>
    </a> */}
    <a href="https://www.naver.com/" className="pragmatic_header_nav">
        <span>Projects</span>
    </a>
    <a  className="pragmatic_header_nav">
        <span>Subscription</span>
    </a>
    <Link to="/Login"  className="pragmatic_header_nav"><span>login</span></Link>
    {/* <a href="/Login" className="pragmatic_header_nav">
        <span>login</span>
    </a> */}
    <a href="/Sign" className="pragmatic_header_nav">
        <span>SignUp</span>
    </a>

    <a className="pragmatic_header_nav">
        <span>MyPage</span>
    </a>
    <a  className="pragmatic_header_nav">
        <span>logout</span>
    </a>
</div>
<hr
     style={{
       borderColor: 'black',
       marginTop: '2rem',
     }}
   />
</div>
    )}

export default Header

