import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {
  const [country, setCountry] = useState([]);
  return (
    
    <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(country);
        setCountry("");
      }}> 
      <div className={styles.gral}>
        <div className={styles.contenedor}>
          <input
            className={styles.search}
            type="text"
            placeholder={"Country to look for..."}
            value={country}
            onChange={e => setCountry(e.target.value)}
          />
          <button className={styles.boton} type="submit" value="Add">
            Search
          </button>
        </div>
      </div>
    </form>       
  );
}