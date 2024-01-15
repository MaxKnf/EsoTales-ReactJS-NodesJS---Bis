import React from 'react'
import CLassesItem from '../components/classes/ClassesItem'
import "./Classes.css"
import { ClassesList } from "../components/classes/ClassesList";



function CLasses() {
  return (
    <div className='classes'>
      <h1>Les Classes</h1>
      <div className='classesList'>
        {ClassesList.map((classe, idx) =>{
          return <CLassesItem id={idx} name={classe.name} image={classe.image} />
        })}
      </div>
    </div>
  )
}

export default CLasses