import React from 'react';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return <div className={ `${styles.searchBar}` }>
    <input type="text" className={ `${styles.text}` } placeholder='Ciudad...' />
    <button onClick={()=>props.onSearch('Buscando Ciudad')} className={ `${styles.boton}` }>Agregar</button>
  </div>
};