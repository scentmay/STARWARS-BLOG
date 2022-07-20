import React from "react";
//import { Link } from "react-router-dom";

export function Personaje () {

  return(
      <div className="card m-2" style={{minWidth: '18rem'}}>
      <img src="https://picsum.photos/100/100" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{}</h5>
          <p className="card-text"></p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
   );
}


