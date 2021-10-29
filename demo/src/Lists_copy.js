import React, { useState, useEffect } from 'react';
import axios from 'axios';

function List(props) {
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchList = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 list 를 초기화하고
        setError(null);
        setList(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
            // 'https://jsonplaceholder.typicode.com/users'
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
      <ul>
        
        {list.map(list => (
          <dl key={list.id}>
            <img style = {{width:"200px", height:"200px"}}src={list.image} alt=""></img>
            <h3>Title:{list.title}</h3> 
          
          </dl>
        ))}
      </ul>
    </>
  );

}

export default List;