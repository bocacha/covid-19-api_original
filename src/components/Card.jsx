import React from 'react';
import style from './Card.module.css';


export default function Card({name,cont,pop,cases,time,deaths,onClose}) {
  
  return (
    <div className={style.Container}>
      
      <button className={style.btn} onClick={onClose}>X</button>
      
      <div className={style.head}>
        <h3 className="card-title">{name}</h3>      
        <p className="card-title">{cont}</p>
      </div>
     
      <div className={style.lblInfo}>
        <div> 
          <p>Population</p>
          <p>{pop}</p>
        </div>
     
        <div>
          <p>Cases</p>
          <p>{cases}</p>
        </div>
        <div>
          <p>Deaths</p>
          <p>{deaths}</p>
        </div>

      </div>
      
      <div className={style.footer}>
          <h6>Updated at:</h6>
          <h6>{time}</h6>
      </div>
    
    </div>
  )
};