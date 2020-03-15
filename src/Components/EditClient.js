import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

class EditClient extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeTel = this.onChangeTel.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeVille = this.onChangeVille.bind(this);
    this.onChangeCodepostale = this.onChangeCodepostale.bind(this);
    this.onChangeAdresse = this.onChangeAdresse.bind(this);
    this.onChangePassword_=this.onChangePassword_.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      tel: 0,
      password : "",
      ville : "",
      codepostal : 0,
      adresse: "",
      password_: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:9192/client/"+this.props.user.clientId
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          name : res.data.name,
          email : res.data.email,
          tel : res.data.tel,
          ville : res.data.ville,
          codepostal : res.data.codepostal,
          adresse : res.data.adresse,
          password : res.data.password
        });
      })
      .catch(err => {
        console.log(err);
      });
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

  onChangePassword_(e) {
    this.setState({
      password_: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const client = {
      clientId :this.props.user.clientId,
      name : this.state.name,
      email : this.state.email,
      tel : this.state.tel,
      ville : this.state.ville,
      codepostal : this.state.codepostal,
      adresse : this.state.adresse,
      password : this.state.password
    };

    if (this.state.password === this.state.password_) {
      axios
        .put(
          "http://localhost:9192/updateClient/",client)
        .then(res => {
          alert(res.data);
        })
        .catch(() => alert("Erreur de modification !"));

      this.setState({
        name: "",
        email: "",
        tel: 0,
        password : "",
        ville : "",
        codepostal : 0,
        adresse: "",
        password_: ""
      });
    } else {
      alert("Veuillez confirmer votre mot de passe");
    }

    //window.location = '/';
  }

  render() {
    return (
      <div className="container">
      <MDBContainer>
        <MDBRow center={true}>
          <MDBCol md="8">
            <p className="h4 text-center py-4 red-text App">
              <br />
                  EDITER VOTRE COMPTE
              </p>
            <br />
            <form onSubmit={this.onSubmit}>
              <div className="grey-text">
                <div className="form-group">
                  <label>Nom : </label>
                  <input
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onChangeName}
                  />
                </div>
                <div className="form-group">
                  <label>Email : </label>
                  <input
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                  />
                </div>
                <div className="form-group">
                  <label>Telephone : </label>
                  <input
                    className="form-control"
                    onChange={this.onChangeTel}
                    value={this.state.tel}
                  />
                </div>
                <div className="form-group">
                  <label>Ville : </label>
                  <input
                      className="form-control"
                      onChange={this.onChangeVille}
                      value={this.state.ville}
                  />
                </div>
                <div className="form-group">
                  <label>Code Postale : </label>
                  <input
                      className="form-control"
                      onChange={this.onChangeCodepostale}
                      value={this.state.codepostal}
                  />
                </div>
                <div className="form-group">
                  <label>Adresse : </label>
                  <input
                      className="form-control"
                      onChange={this.onChangeAdresse}
                      value={this.state.adresse}
                  />
                </div>
                <div className="form-group">
                  <label>Mot de passe : </label>
                  <input
                      className="form-control"
                      onChange={this.onChangePassword}
                      value={this.state.password}
                  />
                </div>
                <div className="form-group">
                  <label>Confirmer le mot de passe : </label>
                  <input
                      className="form-control"
                      onChange={this.onChangePassword_}
                      value={this.state.password_}
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="red" type="submit">
                    Effectuer les modifications
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

export default EditClient;
