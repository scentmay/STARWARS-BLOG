import React from "react";

export function VehicleInfo ({details}) {
    return(
        <>
            <ul>
				<li>model: {details.model}</li>
				<li>vehicle_class: {details.vehicle_class}</li>
				<li>manufacturer:  {details.manufacturer}</li>
				<li>cost_in_credits:  {details.cost_in_credits}</li>
			</ul>
			<ul className="ms-5">
				<li>crew: {details.crew}</li>
				<li>passengers: {details.passengers}</li>
				<li>length: {details.length}</li>
				<li>url: {details.url}</li>
			</ul>
        </>
    );
}