import React from 'react';
import ResidentsList from './ResidentsList';

const Card = ({ id, planet}) => {
    return (
        <div className='tc bg-lightest-blue dib br3 pd3 ma2 grow bw2 shadow-5'>
            <div>
                <h2>Name: {planet.name}</h2>
                <h3>Rotation Period: {planet.rotation_period}</h3>
                <h3>Orbital Period: {planet.orbital_period}</h3>
                <h3>Diameter: {planet.diameter}</h3>
                <h3>climate: {planet.climate}</h3>
                <h3>gravity: {planet.gravity}</h3>
                <h3>terrain: {planet.terrain}</h3>
                <h3>surface_water: {planet.surface_water}</h3>
                <h3>population: {planet.population}</h3>

                <ResidentsList residents={planet.residents}></ResidentsList>
                
            </div>
        </div>
    );
}

export default Card;