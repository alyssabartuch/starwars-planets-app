import React from 'react';
import Card from './Card';

const CardList = ({ planets }) => {
   return (
      <div id="card-list">
         {
            planets.map((planet, i) => {
               return (
                  <Card 
                     key={i} 
                     id={planet.id} 
                     planet={planet}
                  />
               );
            })
         }
      </div>
   );
}

export default CardList;