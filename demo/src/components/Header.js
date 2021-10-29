import React from 'react'
import '../base.css';

function Header({ title }) {

    return (
<div className="pragmatic_header">
<div>
    <h1 className="pragmatic_logo">
        Pragmatic
        <h2>{title}</h2>
    </h1>
</div>
<div className="pragmatic_header_navbar">
    <a  className="pragmatic_header_nav">
        <span>Articles</span>
    </a>
    <a  className="pragmatic_header_nav">
        <span>Projects</span>
    </a>
    <a  className="pragmatic_header_nav">
        <span>Subscription</span>
    </a>

    <a className="pragmatic_header_nav">
        <span>login</span>
    </a>
    <a className="pragmatic_header_nav">
        <span>SignUp</span>
    </a>

    <a className="pragmatic_header_nav">
        <span>MyPage</span>
    </a>
    <a  className="pragmatic_header_nav">
        <span>logout</span>
    </a>
</div>
</div>
    )
}

export default Header
