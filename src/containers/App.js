import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Country from '../components/Country.jsx';
import axios from 'axios';

// const apiKey = 'ce82a5b3d1msh7b183d31d72b664p1767e0jsn221840a2d9ae'; 

function App() {
  const [countries, setCountries] = useState([]); //declaracion del estado local del componente
  
  function onClose(id) {// Funcion para el boton cerrar del card
    setCountries(oldCountries => oldCountries.filter(c => c.id !== id));
  }

  var options = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/countries',
    params: {search: 'argentina'},
    headers: {
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
      'x-rapidapi-key': 'ce82a5b3d1msh7b183d31d72b664p1767e0jsn221840a2d9ae'
    }
  };

  function onSearch(country) { // funcion que consume la API en la busqueda
    //Llamado a la API COVID-19
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric`)
    //   .then(r => r.json())
    //   .then((recurso) => {
      axios.request(options).then(function (response) {
        console.log(response.data);
        if(response.data !== null){
          const country={
            continent:response.data[0].continent,
            country:response.data[0].country,
            population:response.data[0].population,
            cases:response.data[0].cases.total,
            time:response.data[0].time,
          };
          setCountries(oldCountries => [...oldCountries, country]); // actualiza el estado
        }else{
          alert('Country not found!!');
        }
      }).catch(function (error) {
        console.error(error);
      });


      //   if(recurso.main !== undefined){ // si existen datos:
      //     const country = {
      //       min: Math.round(recurso.main.temp_min),
      //       max: Math.round(recurso.main.temp_max),
      //       img: recurso.weather[0].icon,
      //       id: recurso.id,
      //       wind: recurso.wind.speed,
      //       temp: recurso.main.temp,
      //       name: recurso.name,
      //       weather: recurso.weather[0].main,
      //       clouds: recurso.clouds.all,
      //       latitud: recurso.coord.lat,
      //       longitud: recurso.coord.lon
      //     };
      //     setCountries(oldCountries => [...oldCountries, country]); // actualiza el estado
      //   } else {
      //     alert("Country not found!!");
      //   }
      // });
  }
  function onFilter(countryId) {
    let country = countries.filter(c => c.id === parseInt(countryId));
    if(country.length > 0) {
        return country[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
      <Route
        path='/' render={() => <Nav onSearch={onSearch} />}
      />
       <Route
        exact path='/'
        render={() => <Cards countries={countries} onClose={onClose} />}
      />
      <Route
        path='/about'component={About}
      />
      <Route
        path='/country/:countryId' // no funciona con exact path!!
        render={({match}) => <Country myCountry={ onFilter(match.params.countryId)}/>}
      />
      
    </div>
    
  );
}

export default App;