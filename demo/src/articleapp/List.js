// components/Layout/Layout.tsx
import React from 'react';
import axios from 'axios';
import List from '../Lists';
import Card from '../Lists';
import '../components/styled-components.css';

const ArticleList = () => {
  return (
   <>
    
    <div className = "Wrap">
  
      <List name ="Article"/>
    </div>
  
  
    {/* <div className = "text-center">
        <h1> No Articles YET !</h1>
    </div> */}
   

 

    <div style={{textAlign: "center"}}>
        <a href="/ArticleCreate" className="btn btn-dark rounded-pill mt-3 mb-3 px-3">
            Create Article
        </a>
        
    </div>
    </>
  );
};

export default ArticleList