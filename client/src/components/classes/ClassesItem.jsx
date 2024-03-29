import React from 'react'
import { useNavigate } from 'react-router-dom'

function ClassesItem({ image, name, id}) {
  const navigate = useNavigate();
  return (
    <div className='classesItem' 
      onClick={() => {
        navigate("/classes/" + id)
    }}>
        <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
        <h1>{name}</h1>
    </div>
  )
}

export default ClassesItem