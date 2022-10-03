import stylesCards from '../styles/Cards.module.css';
import Card from './Card.jsx';

import React from 'react';


export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return <div className={ `${stylesCards.container}` }>
    
    {cities.map(e => {
      return (
        <Card
          max={e.main.temp_max}
          min={e.main.temp_min}
          name={e.name}
          img={e.weather[0].icon}
          onClose={() => alert(e.name)}
          key={e.weather[0].id}
        />        
      )
    })}
  </div>
};