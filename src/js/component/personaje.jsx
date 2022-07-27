import React from "react";
//import { Link } from "react-router-dom";

export function Personaje () {

  return(
      <div className="card m-2" style={{minWidth: '18rem'}}>
      <img src="https://starwars-visualguide.com/assets/img/characters/4.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{}</h5>
          <p className="card-text"></p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
   );
}


