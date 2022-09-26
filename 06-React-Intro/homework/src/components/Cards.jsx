import React from 'react';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  let {cities} = props
  return <div className='cards'>
    
    {cities.map((e, i) => {
      return (
        <div className='card' key={i}>
          <button onClick={() => alert(e.name)} className='btnCards'>X</button>
          <h4>{e.name}</h4>   
          <div className='contenido'>
            <div>Min</div>
            <div>{e.main.temp_min}</div>
            <div>Max</div>
            <div>{e.main.temp_max}</div>
            <img src={`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`} alt="img clima"/>
          </div>
          
        </div>
      )
    })}
  </div>
};