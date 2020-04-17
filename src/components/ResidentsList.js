import React from 'react';
import Resident from './Resident';

const ResidentsList = ({residents}) => {
    return (
        <div id="resident-list">
           {
              residents.map((resident, i) => {
                const residentData = async function() {
                    let response = await fetch(`${resident}`);
                    let data = await response.json();
                    return data
                }
                 return (
                    <Resident 
                        key={i}
                        name={residentData.name}/>
                 );
              })
           }
        </div>
     );

}

export default ResidentsList;