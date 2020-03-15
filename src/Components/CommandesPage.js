import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const Commande = props => (
  <tr>
    <td>{props.commande.article.designation}</td>
    <td>{props.commande.dateCommande.substring(0, 10)}</td>
    <td>{props.commande.quantity}</td>
    <td>
      {" "}
      <a
        href="#"
        onClick={() => {
          props.deleteCommande(props.commande.id);
        }}
      >
        <i className="far fa-trash-alt"></i>
      </a>
    </td>
  </tr>
);

class CommandesPage extends Component {
  constructor(props) {
    super(props);

    this.deleteCommande = this.deleteCommande.bind(this);
    this.onChangeRech = this.onChangeRech.bind(this);

    this.state = {
      commandes: [],
      search: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9192/commandesByClient/"+this.props.user.clientId)
      .then(res => {
        console.log(res.data);
        this.setState({
          commandes: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChangeRech(e) {
    this.setState({
      search: e.target.value
    });
  }

  deleteCommande(id) {
    axios
      .delete("http://localhost:9192/deleteCommande/" + id)
      .then(res => console.log(res.data));

    this.setState({
      commandes: this.state.commandes.filter(i => i.id !== id)
    });
  }

  commandesList() {
    return this.state.commandes
      /* .filter(
        commande =>
          commande.name
            .toLowerCase()
            .includes(this.state.search.toLowerCase()) ||
          this.state.filieres
            .filter(fil => fil._id === student.filiere)
            .map(fil => fil.nom)[0]
            .toLowerCase()
            .includes(this.state.search.toLowerCase()) ||
          this.state.search.length === 0
      ) */
      .map(currentCommande => {
        return (
          <Commande
            commande={currentCommande}
            deleteCommande={this.deleteCommande}
            key={currentCommande.id}
          />
        );
      });
  }

  render() {
    return (
      <div className="container">
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th>Article</th>
              <th>Date de commande</th>
              <th>Quantite</th>
            </tr>
          </thead>
          <tbody>{this.commandesList()}</tbody>
        </table>
      </div>
      //</Router>
    );
  }
}

export default CommandesPage;
