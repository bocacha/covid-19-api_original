import {  useState} from 'react';
import axios from 'axios';



// import style from './App.module.css';

//eslint-disable-next-line



export default function App() {

 const[countries,setCountries]=useState([]);
  
 const country={
    continent:'',
    name:'',
    population:'',
    cases:'',
    deaths:'',
    test:'',
    day:'',
    time:''
 }
  
//Function to hit the API
function handleDispatch(e){
    // e.preventDefault();
    var options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/statistics',
        headers: {
              'x-rapidapi-host': 'covid-193.p.rapidapi.com',
              'x-rapidapi-key': 'ce82a5b3d1msh7b183d31d72b664p1767e0jsn221840a2d9ae'
        }
    };
      
    axios.request(options).then(function (response) {
    // const myList={
       console.log("cantidad de datos" + response.data.response.length);
       for(var i=0;i<response.data.response.length;i++){
           if(response.data.response[i].continent){
               if(response.data.response[i].continent !== response.data.response[i].country){
                // console.log(response.data.response[i].continent, response.data.response[i].country);
                const country={
                    continent:response.data.response[i].continent,
                    name:response.data.response[i].country,
                    population:(response.data.response[0].population).toLocaleString(),
                    cases:(response.data.response[0].cases.total).toLocaleString(),
                    deaths:(response.data.response[0].deaths.total).toLocaleString(),
                    // test:(response.data.response[0].test.total).toLocaleString(),
                    day:response.data.response[0].day,
                    time:(response.data.response[0].time).slice(11,19),
                 }
                setCountries(oldCountries => [...oldCountries, country]);                
               }                
           }        
       }
        
    }).catch(function (error) {
        console.log(error);
    });   
    }
    handleDispatch();

  return (
     <>
    <h1>Hola</h1>
    <div>{countries?.map(country => (
        <div key={country.name}>
            <h3>{country.name}</h3>
            <h4>{country.continent}</h4>
            <p>Population:{country.population}</p>
            <p>Cases:{country.cases}</p>
            <p>Deaths:{country.deaths}</p>
            <p>Test:{country.test}</p>
            <p>{country.day}</p>
            <p>{country.time}</p>
        </div>
        
    ))}</div>
    </>
  );
  
}