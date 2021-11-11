import { Fragment, useState} from 'react';
import axios from 'axios';

import style from './App.module.css';
import Card from './components/Card';
import Data,{Africa,America,Asia,Europa,Oceania} from './data';


export default function App() {

  const [input,setInput]=useState({
    country:" ",
  });

  const[country,setCountry]=useState([]);
  var pais=input.country;
  
  function onClose(name) {
    setCountry(oldCountry => oldCountry.filter(c => c.country !== name));
  }

  function handleDispatch(e){
    e.preventDefault();
    if(input.country){
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
          time:(response.data.response[0].time).slice(11,19),
        }
        setCountry(oldCountry => [...oldCountry, myCountry]); // actualiza el estado
        setInput("");
      }).catch(function (error) {
        // console.error(error);
        alert("No Country found! Please check your spelling")
      });
    }else{
        alert("Country name is mandatory!");
        
    }
  }
  
  //Carga de inputs al estado local
  function handleSelect(e){
    e.preventDefault();
    var continent=e.target.value;
    console.log(continent);
    if(continent==="Africa"){
      document.getElementById("paises").innerHTML="";
      for(let i=0;i<Africa.length;i++){
        // document.querySelector('#paises').innerHTML+=`<option value="${Africa[i]}">${Africa[i]}</option>`;
        document.getElementById('paises').innerHTML+=`<option value="${Africa[i]}">${Africa[i]}</option>`;
      }
    }else if(continent==="Americas"){ 
      document.getElementById("paises").innerHTML="";
      for(let i=0;i<America.length;i++){
        // document.querySelector('#paises').innerHTML+=`<option value="${Americas[i]}">${Americas[i]}</option>`;
        document.getElementById('paises').innerHTML+=`<option value="${America[i]}">${America[i]}</option>`;
      }
    }else if(continent==="Asia"){
      document.getElementById("paises").innerHTML="";
      for(let i=0;i<Asia.length;i++){
        // document.querySelector('#paises').innerHTML+=`<option value="${Asia[i]}">${Asia[i]}</option>`;
        document.getElementById('paises').innerHTML+=`<option value="${Asia[i]}">${Asia[i]}</option>`;
      }
    }else if(continent==="Europe"){
      document.getElementById("paises").innerHTML="";
      for(let i=0;i<Europa.length;i++){
        // document.querySelector('#paises').innerHTML+=`<option value="${Europe[i]}">${Europe[i]}</option>`;
        document.getElementById('paises').innerHTML+=`<option value="${Europa[i]}">${Europa[i]}</option>`;
      }
    }else if(continent==="Oceania"){
      document.getElementById("paises").innerHTML="";
      for(let i=0;i<Oceania.length;i++){
        // document.querySelector('#paises').innerHTML+=`<option value="${Oceania[i]}">${Oceania[i]}</option>`;
        document.getElementById('paises').innerHTML+=`<option value="${Oceania[i]}">${Oceania[i]}</option>`;
      }
    }
  }
  function handleInput(e){
    setInput({
        ...input,
        [e.target.name]: e.target.value           
    })
  }    
  return (
    <>
    <div className={style.form}>
      <form id="form" onSubmit={handleDispatch}>
        <input className={style.order} type="text" autoComplete="off" name="country"  value={input.raza} placeholder="Type a Country name..." onChange={handleInput}/>
        <button type="submit" className={style.order} >Search</button>
      </form>
    </div>
    <div>
      <select name="continents" onClick={handleSelect}>
        <option value="">Select a Continent</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
    <div>
      {/* <details id="paises">
        <summary Country></summary>
      </details> */}
      <select id="paises">
        <option value="">Select a Country</option>
      </select>
    </div>

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
          onClose={onClose} 
          />
          </Fragment>
        ))}
      </div>   
    </div>
    </>
  );
  
}

// export default App;