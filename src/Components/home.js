import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddCommande from "./AddCommande";
import CommandesPage from "./CommandesPage";
import NavBar from "./NavBar"
import { ArticlesPage } from "./ArticlesPage";


class Home extends Component {
  state = {};
  render() {
    return (
      

       <Router>
        
       <NavBar logout={this.props.logout}></NavBar>
        <br></br>

        <Route path="/" exact component={()=><CommandesPage user={this.props.user} />}/> 
        <Route path="/addCommande/:articleId/:clientId" component={AddCommande}></Route>
        <Route path="/articles" component={()=><ArticlesPage user={this.props.user} />}/>
        {/* <Route path="/update/:id" component={EditStudent}></Route>

        <Route path="/prof" component={ProfPage}></Route>
        <Route path="/createprofessor" component={CreateProf}></Route>
        <Route path="/updateprof/:id" component={EditProf}></Route>

        <Route path="/filliere" component={FillierePage}></Route>
        <Route path="/updatefiliere/:id" component={EditFil}></Route>

        <Route path="/note" component={NotesPage}></Route>
        <Route path="/updatenote/:stid/:subid" component={UpdateNote}></Route> */}

      </Router> 
    );
  }
}

export default Home;
