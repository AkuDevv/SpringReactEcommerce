import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddCommande from "./AddCommande";
import CommandesPage from "./CommandesPage";
import NavBar from "./NavBar"
import { ArticlesPage } from "./ArticlesPage";
import EditClient from "./EditClient";


class Home extends Component {
  state = {};
  render() {
    return (
      

       <Router>
        
       <NavBar logout={this.props.logout} user={this.props.user}></NavBar>
        <br></br>

        <Route path="/" exact component={()=><CommandesPage user={this.props.user} />}/> 
        <Route path="/addCommande/:articleId/:clientId" component={AddCommande}></Route>
        <Route path="/articles" component={()=><ArticlesPage user={this.props.user} />}/>
        <Route path="/editClient/" component={()=><EditClient user={this.props.user}/>}></Route>
      </Router>
    );
  }
}

export default Home;
