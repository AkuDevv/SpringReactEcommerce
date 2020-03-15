import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
} from "mdbreact";

const Article = props => (
  <div style={{ float: "left", margin: "20px" }} className="App">
    <MDBCard style={{ width: "300px", height: "500px" }}>
      <MDBCardImage
        top
        src={props.article.photo}
        waves
      /> 
      <MDBCardBody>
        <MDBCardTitle className="card-title">{props.article.designation}</MDBCardTitle>
        <div style={{ color: "teal" }}>Stock : {props.article.stock}</div>
        <div style={{ color: "teal" }}>Prix : {props.article.prix} DH</div>
        <div style={{ color: "teal" }}>Categorie : {props.article.categorie.categ_name}</div>

      </MDBCardBody>
        {
        <Link to={"/addCommande/"+props.article.article_id+"/"+props.user.clientId}>
        <button
          type="button"
          style={{
            marginRight: "30px",
            marginBottom: "20px",
            width: "80px",
            borderRadius: "40px"
          }}
          className="btn btn-primary btn-sm float-right btn-mr-4 btn-mb-4"
        >
          +
        </button>
        </Link>
        }
    </MDBCard>
  </div>
);

export class ArticlesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9192/articles/")
      .then(res => {
        console.log(res.data);
        this.setState({
          articles: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  articleList() {
    return this.state.articles.map(currentArticle => {
      return (
        <Article
          article={currentArticle}
          key={currentArticle.article_id}
          user={this.props.user}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <br></br>
        {this.articleList()}
      </div>
    );
  }
}

export default ArticlesPage;
