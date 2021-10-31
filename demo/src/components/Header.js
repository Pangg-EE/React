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
        <Link to="/ArticlesList"  className="pragmatic_header_nav">
            <span>
                Articles
            </span>
        </Link>

        <a className="pragmatic_header_nav">
            <span>
                Projects
            </span>
        </a>

        <a  className="pragmatic_header_nav">
            <span>
                Subscription
            </span>
        </a>

        <Link to="/Login"  className="pragmatic_header_nav">
            <span>
                login
            </span>
        </Link>

        <Link to ="/Sign" className="pragmatic_header_nav">
            <span>
                SignUp
            </span>
        </Link>
            
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

