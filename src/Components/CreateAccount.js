import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
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
      fullName: this.state.name,
      email: this.state.email,
      tel: this.state.tel,
      password: this.state.password,
      ville: this.state.ville,
      codePostal: this.state.codepostal ,
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
        <MDBContainer>
          <MDBRow center={true}>
            <MDBCol md="8">
              <h2>Creer un compte</h2>
              <br />
              <form onSubmit={this.onSubmit}>
                <div className="grey-text">
                  <div className="form-group">
                    <label>Nom : </label>
                    <input
                      className="form-control"
                      placeholder={this.state.name}
                      onChange={this.onChangeName}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email : </label>
                    <input
                      className="form-control"
                      placeholder={this.state.email}
                      onChange={this.onChangeEmail}
                    />
                  </div>
                  <div className="form-group">
                    <label>Telephone : </label>
                    <input
                      className="form-control"
                      onChange={this.onChangeTel}
                      placeholder={this.state.tel}
                    />
                  </div>
                  <div className="form-group">
                    <label>Ville : </label>
                    <input
                        className="form-control"
                        onChange={this.onChangeVille}
                        placeholder={this.state.ville}
                    />
                  </div>
                  <div className="form-group">
                    <label>Code Postale : </label>
                    <input
                        className="form-control"
                        onChange={this.onChangeCodepostale}
                        placeholder={this.state.codepostal}
                    />
                  </div>
                  <div className="form-group">
                    <label>Adresse : </label>
                    <input
                        className="form-control"
                        onChange={this.onChangeAdresse}
                        placeholder={this.state.adresse}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password : </label>
                    <input
                        className="form-control"
                        onChange={this.onChangePassword}
                        placeholder={this.state.password}
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="primary" type="submit">
                      Creer le compte
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
