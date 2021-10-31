// components/Layout/Layout.tsx
import React, { useState, useEffect } from 'react';
import '../components/styled-components.css';

import { Route, withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import '../components/styled-components.css';


const Wrap = styled.div`
  padding-bottom: 6%;
  column-count: 4;
  column-gap: 1em;
  width: 1200px;
  display: inline-block;
`;
const Items = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
  cursor: pointer;
`;
const Figure = styled.div`
  display: inline-block;
  filter: grayscale(0.8);
  &:hover {
    filter: none;
  }
`;
const Image = styled.img`
  width: 100%;
  border-radius: 1rem;
`;

//해당 방법으로는 해결하지 못해서 Link to 로 해결...
const gotoDetail =(list)=>{
  console.log(list.content);
  // history.push('/ArticleDetail');
  // <Link to="/ArticleDetail" />
  // console.log(this.props.history);
  // <Route exact path='/Detail' component={ArticleDetail} />  
}


const ArticleList = () => {
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
useEffect(() => {
  //컴포넌트가 처음 나타날때 : 렌더링이 일어나는 시점 ?
  console.log(">>> mount")
  return () => {
    //컴포넌트가 사라질 때 : 렌더링이 끝나는 시점 ?
    console.log(">>> unmount")  
  }
}, [])
  useEffect(() => {
    const fetchList = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 list 를 초기화하고
        setError(null);
        setList(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(            
            '/articles/list'
        );
        console.log(response.data);
      // 데이터는 response.data 안에 들어있습니다.
        setList(response.data); 
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchList();
  }, []);
 
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!list) return null;
  return (
   <>
    
    <div className = "Wrap">
  
       <h1>Article List</h1>
      <br />      
      <Wrap>
      {list.map((list) => {
        return (
          // 유일한 key 값을 넣어주며 가상돔에게 이전과 어떤 차이가 있는지 설명해준다 >> 엘리먼트 혹은 키값이 변하면 재구성되기 때문에 효율을 높이기 위해서.
          <Items key={list.id}>
            <Figure>

              {/* 처음에 onClick에 gotoDetail 이란 함수를 넣고 매개변수를 gotoDetail(list) 이런 형태로 전달하려 했을 때 클릭하지않아도 계속해서 실행하는 문제가 있었다. */}
              {/* <Image src={list.image} onClick={() => gotoDetail(list)}/> */}
              <Link 
                to={{pathname: `/ArticleDetail`,
                    state: {title: list.title,
                            writer:list.writer,
                            content:list.content,
                            image:list.image}}}>
                <Image src={list.image}/>
              </Link>
            </Figure>
          </Items>
        );
      })}
    </Wrap> 
    </div>
    <div style={{textAlign: "center"}}>
        <a href="/ArticleCreate" className="btn btn-dark rounded-pill mt-3 mb-3 px-3">
            Create Article
        </a>
        
    </div>
    </>
  );
};

export default ArticleList