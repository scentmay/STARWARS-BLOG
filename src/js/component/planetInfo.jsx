import React from "react";

export function PlanetInfo ({details}) {
    return(
        <>
            <ul>
				<li>diameter: {details.diameter}</li>
				<li>rotation_period: {details.rotation_period}</li>
				<li>orbital_period:  {details.orbital_period}</li>
				<li>gravity:  {details.gravity}</li>
			</ul>
			<ul className="ms-5">
				<li>population: {details.population}</li>
				<li>climate: {details.climate}</li>
				<li>terrain: {details.terrain}</li>
				<li>url: {details.url}</li>
			</ul>
        </>
    );
}