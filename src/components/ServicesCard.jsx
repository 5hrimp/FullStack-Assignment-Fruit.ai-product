import React from 'react'
import '../styles/servicescard.css'
import { useNavigate } from 'react-router-dom';


function ServicesCard(props) {
  const navigate = useNavigate();
  const clickHandler = () => {
    console.log(props.route)
    navigate(props.route)
  }
  
  return (
    <>
    <div className='card-holder' onClick={clickHandler}>
      
      <img  className='card-image' src={props.imagepath} alt={props.title+" image"}></img>
      <h1>{props.title}</h1>

    </div>
    </>
  )
}

export default ServicesCard
