import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

class AddCommande extends Component {
  constructor(props) {
    super(props);

    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      date: new Date(),
      quantity: 0,
    };
  }

  componentDidMount(){
    axios
    .get("http://localhost:9192/articleById/"+this.props.match.params.articleId)
    .then(res => {
      this.setState({
        productName: res.data.designation,
        article : res.data,
      });
    })
    .catch(e=>alert(e))
  }

  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value
    });
  }

  onChangeDate(birthdate) {
    this.setState({
      birthdate: birthdate
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const commande = {
      client: {clientId:this.props.match.params.clientId},
      dateCommande: Date.now(),
      quantity: this.state.quantity,
      article: {article_id:this.state.article.article_id}
    };

    console.log(commande);

    axios
      .post("http://localhost:9192/addCommande/", commande)
      .then(res => alert(res.data))
      .catch(() => alert("Erreur d'Achat du produit !"));

    const article = {
      article_id : this.state.article.article_id,
      designation : this.state.article.designation,
      stock : this.state.article.stock-this.state.quantity,
      prix : this.state.article.prix,
      photo : this.state.article.photo,
      categorie : {categ_id : this.state.article.categorie.categ_id},

    }
    axios
      .post("http://localhost:9192/updateArticle/",article)
      .then(res => console.log(res))
      .catch(e=>console.log(e))

    this.setState({
      quantity: 0,
    });
    //window.location = '/';
  }

  render() {
    return (
      <div className="container">
        <MDBContainer>
          <MDBRow center={true}>
            <MDBCol md="8">
              <h2>Effectuer un achat</h2>
              <br />
              <h3>Produit : </h3>
              <form onSubmit={this.onSubmit}>
                <div className="grey-text">
                  <div className="form-group">
                    <label>Quantité : </label>
                    <input
                      className="form-control"
                      placeholder={this.state.quantity}
                      onChange={this.onChangeQuantity}
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="primary" type="submit">
                      Acheter
                    </MDBBtn>
                  </div>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default AddCommande;
