import React from 'react';
import './cc-card.scss';

//change this to a functional component that gets props from ancestor component


const Card = (props)=>{
  return(
    <div className='card'>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    </div>
  )
}

export default Card;