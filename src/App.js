/* eslint-disable */ // Lint 끄는 기능임

import { useState } from 'react';
import './App.css';

function App() {
  
  let post = '강남 우동 맛집1';
  let [title, titleChange] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'white', fontSize : '16px' } }>블로그임</h4>
      </div>
      <div className = "list">
        <button onClick={ ()=>{
          let copy = [...title];
          copy[0] = '여자코트 추천';
          titleChange(copy);
        } }>제목 바꾸기 버튼</button>
        <button onClick={ ()=>{
          let sortCopy = [...title];
          sortCopy.sort();
          titleChange(sortCopy);
        }}>가나다순 정렬</button>
        <h4>{ title[0] } <span onClick={ ()=>{ 따봉변경( 따봉+1 ) } }>👍</span> { 따봉 } </h4>
        <p>1월 7일 발행</p>
      </div>
      <div className = "list">
        <h4>{ title[1] }</h4>
        <p>1월 7일 발행</p>
      </div>
      <div className = "list">
        <h4>{ title[2] }</h4>
        <p>1월 7일 발행</p>
      </div>
    </div>
  );
}

export default App;
