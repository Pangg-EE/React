import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './components/styled-components.css';

const Wrap = styled.div`
  padding-bottom: 6%;
  column-count: 4;
  column-gap: 1em;
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

const gotoDetail =()=>{
  
}

function List(props) {
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
useEffect(() => {
  
  console.log(">>> mount")
  return () => {
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
        setList(response.data); // 데이터는 response.data 안에 들어있습니다.
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
      <h1>{props.name}</h1>
      <br />      
      <Wrap>
      {list.map((list) => {
        return (
          <Items key={list.id}>
            <Figure>
              <Image src={list.image} onClick={gotoDetail}/>
            </Figure>
          </Items>
        );
      })}
    </Wrap> 
    </>
  );

}

export default List;