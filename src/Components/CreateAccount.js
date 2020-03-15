import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

class CreateAccount extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeTel = this.onChangeTel.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeVille = this.onChangeVille.bind(this);
    this.onChangeCodepostale = this.onChangeCodepostale.bind(this);
    this.onChangeAdresse = this.onChangeAdresse.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      tel: 0,
      password : "",
      ville : "",
      codepostal : 0,
      adresse: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
      this.setState({
          password: e.target.value
      });
  }

  onChangeTel(e) {
    this.setState({
      tel: e.target.value
    });
  }

  onChangeVille(e) {
      this.setState({
          ville: e.target.value
      });
  }

  onChangeAdresse(e) {
      this.setState({
          adresse: e.target.value
      });
  }

  onChangeCodepostale(e) {
      this.setState({
          codepostal: e.target.value
      });
  }

  onSubmit(e) {
    e.preventDefault();

    const client = {
      name: this.state.name,
      email: this.state.email,
      tel: this.state.tel,
      password: this.state.password,
      ville: this.state.ville,
      codepostal: this.state.codepostal ,
      adresse: this.state.adresse,
    };

    console.log(client);

    axios
      .post("http://localhost:9192/addClient", client)
      .then(res => alert(res.data))
      .catch(() => alert("Erreur de creation du compte !"));

    this.setState({
      name: "",
      email: "",
      tel: "",
      codepostal : 0,
      adresse : "",
      password : "",
      ville: "",
    });
    //window.location = '/';
  }

  render() {
    return (
      <div className="container">
        <MDBContainer className="mt5">
          <MDBRow center={true}>
            <MDBCol md="8">
            <p className="h4 text-center py-4 red-text App">
                <MDBIcon
                  icon="plus-circle"
                  size="2x"
                  className="red-text mb-2"
                />
                <br/>
                    CREER UN COMPTE
              </p>
              <br />
              <form onSubmit={this.onSubmit}>
                <div className="red-text App">
                  <div className="form-group">
                    <MDBInput
                      background
                      label="Nom"
                      /* icon="user" */
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.name}
                      onChange={this.onChangeName}
                    />
                  </div>
                  <div className="form-group">
                  <MDBInput
                      background
                      label="Email"
                      /* icon="user" */
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                    />
                  </div>
                  <div className="form-group">
                  <MDBInput
                      background
                      label="Telephone"
                      /* icon="user" */
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.tel}
                      onChange={this.onChangeTel}
                    />
                  </div>
                  <div className="form-group">
                  <MDBInput
                      background
                      label="Ville"
                      /* icon="user" */
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.ville}
                      onChange={this.onChangeVille}
                    />
                  </div>
                  <div className="form-group">
                  <MDBInput
                      background
                      label="Code Postale"
                      /* icon="user" */
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.codepostal}
                      onChange={this.onChangeCodepostale}
                    />
                  </div>
                  <div className="form-group">
                  <MDBInput
                      background
                      label="Adresse"
                      /* icon="user" */
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.adresse}
                      onChange={this.onChangeAdresse}
                    />
                  </div>
                  <div className="form-group">
                  <MDBInput
                      background
                      label="Mot de passe"
                      /* icon="user" */
                      group
                      type="password"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="red" type="submit">
                      CREER LE COMPTE
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

export default CreateAccount;
