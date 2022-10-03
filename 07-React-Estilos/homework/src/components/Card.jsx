import React from 'react';
import styles from '../styles/Card.module.css';

export default function Card(props) {
  // acá va tu código
  return <div className={styles.card}>
    <button onClick={props.onClose} className={`${styles.btnCard} ${styles.btnColor}`}>X</button>
    <h4>{props.name}</h4>
    <div className={styles.contenido}>
      <div className={styles.temMin}>
        <p>Min</p>
        <p>{props.min} °</p>
      </div>
      <div className={styles.temMax}>
        <p>Max</p>
        <p>{props.max} °</p>
      </div>
      <div className={styles.img}>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={"img"} className={styles.img} />
      </div>
    </div>

  </div>
};