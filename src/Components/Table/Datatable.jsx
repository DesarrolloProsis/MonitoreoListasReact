import React from "react";
import axios from "axios";
import Loader from "./Loader.jsx";
import "./DataTable.css"

class DataTable extends React.Component {
  state = {
    listas: [],
    carga: true,
    error: false,
    color: ""
  };

  load() {
    if (this.state.carga === true) {
      return (
        <tr>
          <td colSpan="6">
            <Loader />
          </td>
        </tr>
      );
    }
  }

  error() {
    if (this.state.error === true) {
      return (
        <tr>
          <td colSpan="6">
            <p className="text-center">
              Algo fallo con la api
            </p>
          </td>
        </tr>
      );
    }
  }

  componentDidMount() {
    axios
      .get(`http://pc004.sytes.net:185/api/values`)
      .then(res => {
        const listas = res.data;
        this.setState({
          listas,
          carga: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ carga: false, error: true });
      });
    this.timerID = setInterval(() => this.tick(), 90000);
  }
  tick() {
    axios
      .get(`http://pc004.sytes.net:185/api/values`)
      .then(res => {
        const listas = res.data;
        this.setState({
          listas,
          carga: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ carga: false });
      });
    console.log("Realizando consulta...");
  }

  setColor(estado) {
    switch (estado) {
      case true:
        return "text-centrado amarillo texto-medio"
      case false:
        return "text-centrado texto-medio"
      default:
        return "text-centrado texto-medio"
    }
  }



  render() {
    return (
      <tbody>
        {this.load()}
        {this.error()}
        {this.state.listas.map((lista, id) => {
          if (lista.Argumentos !== "Sin Conexión" && lista.Argumentos !== "Sin Conexion Sql") {
            return (
              <tr key={id} className="select">
                <th scope="row" className="text-centrado bg-defaults texto-medio">
                  {lista.Name_caseta}
                </th>
                <th scope="row" className={this.setColor(lista.Argumentos.ListaSQL[3])}>
                  <p>{lista.Argumentos.ListaSQL[0]}</p>
                  <p>{lista.Argumentos.ListaSQL[1]}</p>
                </th>
                <th scope="row" className="text-centrado texto-medio">
                  <p>{lista.Argumentos.ListaSQL[2]}</p>
                </th>
                <th scope="row" className={this.setColor(lista.Argumentos.ArchivosServidor[3])}>
                  <p>{lista.Argumentos.ArchivosServidor[0]}</p>
                  <p>{lista.Argumentos.ArchivosServidor[1]}</p>
                </th>
                <th scope="row" className="text-centrado texto-medio">
                  <p>{lista.Argumentos.ArchivosServidor[2] + "MB"}</p>
                </th>
                <th scope="row" className={this.setColor(lista.Argumentos.WebService[1])}>
                  <p>{lista.Argumentos.WebService[0]}</p>
                </th>

              </tr>
            );
          } else if (lista.Argumentos === "Sin Conexión") {
            return (
              <tr key={id}>
                <th scope="row" className="text-centrado bg-defaults texto-medio">
                  {lista.Name_caseta}
                </th>
                <th scope="row" className="text-centrado bg-blue texto-medio">
                  <p>{lista.Argumentos}</p>
                </th>
                <th scope="row" className="text-centrado bg-blue texto-medio">
                  <p>{lista.Argumentos}</p>
                </th>
                <th scope="row" className="text-centrado bg-blue texto-medio">
                  <p>{lista.Argumentos}</p>
                </th>
                <th scope="row" className="text-centrado bg-blue texto-medio">
                  <p>{lista.Argumentos}</p>
                </th>
                <th scope="row" className="text-centrado bg-blue texto-medio">
                  <p>{lista.Argumentos}</p>
                </th>
              </tr>
            );
          }else if(lista.Argumentos === "Sin Conexion Sql"){
            return (
              <tr key={id}>
                <th scope="row" className="text-centrado bg-defaults texto-medio">
                  {lista.Name_caseta}
                </th>
                <th scope="row" className="text-centrado bg-red texto-medio">
                  <p>{lista.Argumentos}</p>
                </th>
                <th scope="row" className="text-centrado bg-red texto-medio">
                  <p>{lista.Argumentos}</p>
                </th>
                <th scope="row" className="text-centrado bg-red texto-medio">
                  <p>{lista.Argumentos}</p>
                </th>
                <th scope="row" className="text-centrado bg-red texto-medio">
                  <p>{lista.Argumentos}</p>
                </th>
                <th scope="row" className="text-centrado bg-red texto-medio">
                  <p>{lista.Argumentos}</p>
                </th>
              </tr>
            );
          }
          return null;
        })}
      </tbody>
    );
  }
}
export default DataTable;
