import React, { useRef, useState } from 'react'

const Useref = () => {
    const [name, setName ] = useState('Abideen')
    const reference = useRef()
    const ResetName = () =>{
        setName('')
    }
    const changes = () =>{
        reference.current.style.backgroundColor = 'rgb(17, 167, 156)'
    } 

  return (
    <div>
        <input ref={reference} value={name} onChange={(e)=> setName(e.target.value)}/>
        <button onClick={ResetName}>Reset Name</button>
        <button onClick={changes}>Changes</button>
    </div>
  )
}

export default Useref