import React from 'react';

const Resident = ({name}) => {
    
    // console.log(resident);
    
        return (
            <div>
                <p>{name}</p>
                {/* <p>{resident.birth_year}</p> */}
                {/* <p>{resident.gender}</p> */}
                {/* <p>{resident.homeworld}</p> */}
            </div>
        )
};

export default Resident;