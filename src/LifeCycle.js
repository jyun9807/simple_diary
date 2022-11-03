import React, {useEffect, useState} from 'react'

const UnmountTest = () =>{
  useEffect(()=>{
    console.log('Mount!')
    return()=>{
      //unmount 시점 실행
      console.log('unmount!')
    }
  },[])
  return <div>Unmount Testing Component</div>
}



const LifeCycle = () =>{
  const [isVisible, setIsvisible] = useState(false)
  const toggle = () =>{
    setIsvisible(!isVisible)
  }
  

  return <div style={{padding:20}}>
    <div>
      <button onClick={toggle}>on/off</button>
      {isVisible && <UnmountTest/>}
    </div>
  </div>
}

export default LifeCycle;