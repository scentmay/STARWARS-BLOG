import React from "react";

export function CharInfo ({details}) {
    return(
        <>
            <ul>
				<li>Altura: {details.height} cm</li>
				<li>Peso: {details.mass} kg</li>
				<li>Color de pelo:  {details.hair_color}</li>
				<li>Color de ojos:  {details.eye_color}</li>
			</ul>
			<ul className="ms-5">
				<li>Año de nacimiento: {details.birth_year}</li>
				<li>Género: {details.gender}</li>
				<li>Planeta natal: {details.homeworld}</li>
				<li>Url: {details.url}</li>
			</ul>
        </>
    );
}