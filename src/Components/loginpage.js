import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon
} from "mdbreact";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    this.setState({
      username: "safisaif755@gmail.com",
      password: "saif"
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const admin = {
      username: this.state.username,
      password: this.state.password
    };

    console.log(admin);

    axios.get(
        "http://localhost:9192/clientByEmail/" +
          this.state.username, )
      .then(res => {
        if (res.data.email !== this.state.username) alert("Wrong Email !!");
        else {
          if(res.data.password !== this.state.password) alert("Wrong password !!");
          else{         
            this.props.login(res.data);
            alert("Welcome back");
          }
        }
      })
      .catch(e=>console.log(e))
      
  }

  render() { 
    return (
      <MDBContainer className="mt-5">
        <MDBRow center={true}>
          <MDBCol md="6">
                <form onSubmit={this.onSubmit}>
                  <p className="h4 text-center py-4 cyan-text App">
                    <MDBIcon
                      icon="user-circle"
                      size="2x"
                      className="cyan-text mb-2"
                    />
                    <br />
                    SE CONNECTER
                  </p>
                  <div className="cyan-text App">
                    <MDBInput
                      background
                      label="Username"
                      /* icon="user" */
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.username}
                      onChange={this.onChangeUsername}
                    />
                    <MDBInput
                      background
                      label="Mot de passe"
                      /* icon="lock" */
                      group
                      type="password"
                      validate
                      value={this.state.password}
                      onChange={this.onChangePassword}
                    />
                  </div>
                  <div className="text-center py-4 mt-3 App">
                    <MDBBtn color="cyan" type="submit">
                      Login
                    </MDBBtn>
                  </div>
                </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
