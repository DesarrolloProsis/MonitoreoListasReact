import React from "react";
import "./Table.css";
import DataTable from "./Datatable.jsx";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

class Table extends React.Component {
  state = {
    carga: false
  };

  render() {
    return (

      <div>
        <div className="header-table text-centrado bg-dark color-blanco">
          PROSIS S.A. DE C.V. - MONITOREO DE LISTAS
          </div>
        <Nav variant="tabs" className="Links">
          <NavLink
            exact
            to="/"
            className="tabs"
            activeClassName="activeLinks"
          >
            Irapuato
            </NavLink>
          <NavLink
              to="/acapulco"
              className="tabs"
              activeClassName="activeLinks"
            >
              Acapulco
            </NavLink>
        </Nav>
        <div className="table-responsive">
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col" className="text-centrado fondo">
                  Caseta
                  </th>
                <th scope="col" className="text-centrado fondo ">
                  ListaSQL
                  </th>
                <th scope="col" className="text-centrado fondo">
                  Extensión
                  </th>
                <th scope="col" className="text-centrado fondo">
                  Archivos Servidor
                  </th>
                <th scope="col" className="text-centrado fondo">
                  MB
                  </th>
                <th scope="col" className="text-centrado fondo">
                  Web Services
                  </th>
              </tr>
            </thead>
            <DataTable />
          </table>
        </div>
      </div>

    );
  }
}
export default Table;
