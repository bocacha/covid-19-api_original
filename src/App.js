import { Fragment, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Card from './components/Card'; 
// import Footer from './components/Footer';
import style from './App.module.css';
//eslint-disable-next-line
import Data,{Africa,America,Asia,Europa,Oceania} from './data';


export default function App() {
  //eslint-disable-next-line
 

  const[country,setCountry]=useState([]);
  var pais="";
  
  //Procedure for Card closing
  function onClose(name) {
    setCountry(oldCountry => oldCountry.filter(c => c.country !== name));
  }
  //Function to hit the API
  function handleDispatch(e){
    e.preventDefault(); 
    pais=document.getElementById("paises").value;
    if(pais){
      const options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/statistics',
        params:{country: pais},
        headers: {
          'x-rapidapi-host': 'covid-193.p.rapidapi.com',
          'x-rapidapi-key': 'ce82a5b3d1msh7b183d31d72b664p1767e0jsn221840a2d9ae'
        }
      };
      
      axios.request(options).then(function (response) {
        const myCountry={
          continent:response.data.response[0].continent,
          country:response.data.response[0].country,
          population:(response.data.response[0].population).toLocaleString(),
          cases:(response.data.response[0].cases.total).toLocaleString(),
          day:response.data.response[0].day,
          time:(response.data.response[0].time).slice(11,19),
          deaths:(response.data.response[0].deaths.total).toLocaleString(),
        }
        setCountry(oldCountry => [...oldCountry, myCountry]); // actualiza el estado
      }).catch(function (error) {
        alert("No Country found!")
      });
    }else{
      alert("Country name is mandatory!");        
    }
  }
  
  //Continents load:
  function handleSelect(e){
    e.preventDefault();
    var continent=e.target.value;
    if(continent==="Africa"){
      document.getElementById("paises").innerHTML="";
      for(let i=0;i<Africa.length;i++){
        document.getElementById('paises').innerHTML+=`<option value="${Africa[i]}">${Africa[i]}</option>`;
      }
    }else if(continent==="Americas"){ 
      document.getElementById("paises").innerHTML="";
      for(let i=0;i<America.length;i++){
        document.getElementById('paises').innerHTML+=`<option value="${America[i]}">${America[i]}</option>`;
      }
    }else if(continent==="Asia"){
      document.getElementById("paises").innerHTML="";
      for(let i=0;i<Asia.length;i++){
        document.getElementById('paises').innerHTML+=`<option value="${Asia[i]}">${Asia[i]}</option>`;
      }
    }else if(continent==="Europe"){
      document.getElementById("paises").innerHTML="";
      for(let i=0;i<Europa.length;i++){
        document.getElementById('paises').innerHTML+=`<option value="${Europa[i]}">${Europa[i]}</option>`;
      }
    }else if(continent==="Oceania"){
      document.getElementById("paises").innerHTML="";
      for(let i=0;i<Oceania.length;i++){
        document.getElementById('paises').innerHTML+=`<option value="${Oceania[i]}">${Oceania[i]}</option>`;
      }
    }
  } 
  
  return (
    <>
    {/* <hr/> */}
    <div className={style.form}>
      
      <div>
        <select id="continents"name="continents" onClick={handleSelect}>
          <option value="">Continent:</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    
      <div>
        <select id="paises">
          <option value="">Country:</option>
        </select>
      </div>

      <button onClick={handleDispatch}>Show Me</button>
      
    </div>
    <div className={style.header}>
        <p>Instructions:</p>
        <p>1) Pick a Continent</p>
        <p>2) Pick a Country</p>
        <p>3) Hit Show me!</p>
        <Link to="/">
        <div>HOME</div>
        </Link>
      </div>
    <>
    <hr/>
    </>
    <div className={style.container}>
      <div className={style.App}>
        {country.map(c => (
          <Fragment key={c.country} >
          <Card 
          name={c.country}
          cont={c.continent} 
          pop={c.population}
          cases={c.cases}
          time={c.time}
          day={c.day}
          deaths={c.deaths}
          // onClose={onClose} 
          onClose={() => onClose(c.country)}
          />
          </Fragment>
        ))}
      </div>   
    </div>  
    {/* <Footer/>   */}
    </>
  );
  
}
