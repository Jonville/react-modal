import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'


function App() {
  // modal = true (창 열림) | false (창 닫힘) 
  const [modal , setModal] = useState(false);

  return (
    <>
      <h1>App</h1>
      {
        // 조건 > 처리문1(참) : 처리문2(거짓)
        modal ? <Modal setModal={setModal}/> : null
      }
      <button onClick={() => {setModal(true)} }>모달창 열기</button>
    </>
  )
}

export default App
