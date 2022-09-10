import React, { useContext, useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const favoritos = store.favoritos;

  return (
    <nav className="navbar navbar-light mb-3 d-flex justify-content-around">
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDaDk24Ka24hxySM4TM3yTkt3vYLbOKIonAQ&usqp=CAU"
          width={250}
          height={150}
        ></img>
      </Link>

      <div className="dropdown me-3 ">
        <button
          className="d-flex btn btn-warning link-dark dropdown-toggle nav-favs"
          type="button"
          id="dropdownMenu"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favoritos
          {/* indicador del nº de favoritos guardado */}
          <div className="mx-2 px-2 bg-warning rounded">{}</div>
        </button>
        <ul className="dropdown-menu">
          {favoritos.map((fav) => {
            return (
              <div className="d-flex align-items-center justify-content-around">
                <Link to={`/${fav.clase}/${fav.id}`}>
                  {fav.name}
                </Link>
                  <button
                    onClick={() => {
                      console.log(fav.name);
                      actions.delFav(fav.name);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
              </div>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
