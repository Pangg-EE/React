import React, { useState, useEffect } from "react";
import "../components/styled-components.css";

import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import "../components/styled-components.css";

const Wrap = styled.div`
  padding-bottom: 6%;
  column-count: 4;
  column-gap: 1em;
  width: 1200px;
  display: inline-block;
`;
const Item = styled.div`
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
// const gotoDetail =(list)=>{
//   console.log(list.content);
// history.push('/ArticleDetail');
// <Link to="/ArticleDetail" />
// console.log(this.props.history);
// <Route exact path='/Detail' component={ArticleDetail} />
// }


// 화살표 함수(arrow function)의 등장.
// () 안에 기존 함수에서 사용하던 파라미터를 넣고, => {}안에 retrun 하고 싶은 내용을 바로 적는다.
// 객체를리턴할 때는 {} 안에서 소괄호로 감싸서 객체리턴 가능하다. ({ a:'객체요소'});
const ArticleList = () => {
  // useState 선언 및 초기화.
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // useEffect.
  // 
  useEffect(() => {
    //컴포넌트가 처음 나타날때 : 렌더링이 일어나는 시점 ?
    console.log(">>> mount");
    return () => {
      //컴포넌트가 사라질 때 : 렌더링이 끝나는 시점 ?
      console.log(">>> unmount");
    };
  }, []);
  useEffect(() => {
    // async/await 통한 비동기 코딩.
    // async 키워드가 붙어있는 함수.
    const fetchList = async () => {
      // 예외처리 try/catch .
      try {
        // 요청이 시작 할 때에는 error 와 list 를 초기화한다.
        setError(null);
        setList(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        // promise 를 반환하는 api , Axios(API 호출 함수).
        // 프로미스는 자바스크립트 비동기 처리를 위한  객체.
        const response = await axios.get("/articles/list");
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
      <div className="Wrap">
        <h1>Article List</h1>
        <br />
        <Wrap>
          {list.map((item) => {
            return (
              // 유일한 key 값을 넣어주며 가상돔에게 이전과 어떤 차이가 있는지 설명해준다 >> 엘리먼트 혹은 키값이 변하면 재구성되기 때문에 효율을 높이기 위해서다.
              <Item key={item.id}>
                <Figure>
                  {/* 처음에 onClick에 gotoDetail 이란 함수를 넣고 매개변수를 gotoDetail(list) 이런 형태로 전달하려 했을 때 클릭하지않아도 계속해서 실행하는 문제가 있었다. */}
                  {/* <Image src={list.image} onClick={() => gotoDetail(list)}/> */}
                  <Link
                    to={{
                      pathname: `/ArticleDetail`,
                      state: {
                        title: item.title,
                        writer: item.writer,
                        content: item.content,
                        image: item.image,
                      },
                    }}
                  >
                    <Image src={item.image} />
                  </Link>
                </Figure>
              </Item>
            );
          })}
        </Wrap>
      </div>
      <div style={{ textAlign: "center" }}>
        <a
          href="/ArticleCreate"
          className="btn btn-dark rounded-pill mt-3 mb-3 px-3"
        >
          Create Article
        </a>
      </div>
    </>
  );
};

export default ArticleList;
