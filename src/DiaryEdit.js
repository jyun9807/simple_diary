import React,{ useEffect,useRef, useState } from "react";

const DiaryEdit = ({onCreate}) =>{
  useEffect(()=>{
    console.log('diaryEditor 랜더')
});

  const authorInput = useRef()
  const contentInput = useRef()

  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: 1,
  })

  const handleChange = (e) =>{
    setState({
      ...state,
      [e.target.name]:e.target.value,
    })
  }

  const handleSubmit = ()=>{
    if(state.author.length <1){
      authorInput.current.focus();
      alert("작성자는 최소 1글자 이상 입력해주세요!")
      return;
    }
    if(state.content.length <5){
      contentInput.current.focus();
      alert("일기 본문은 최소 5글자 이상 입력해주세요!")
      return;
    }
    onCreate(state.author, state.content, state.emotion)
    alert("저장 성공")
    setState({
      author:'',
      content:'',
      emotion:1,
    })
  }

  return (
  <div className="DiaryEditor">
    <h2>오늘의 일기</h2>
    <div>
      <input ref={authorInput} name="author" value={state.author} onChange= {handleChange}/>
    </div>
    <div>
      <textarea ref={contentInput} name= "content" value={state.content} onChange={handleChange} />
    <div>
      <select name="emotion" value={state.emotion} onChange={handleChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option> 
      </select>
    </div>
    <div>
      <button onClick={handleSubmit}>저장</button>
    </div>
    </div>
    
  </div>
  )
}

export default React.memo(DiaryEdit);