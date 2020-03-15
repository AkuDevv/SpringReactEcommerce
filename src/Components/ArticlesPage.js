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
          className="btn btn-secondary btn-sm float-right btn-mr-1 btn-mb-1"
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

    this.onChangeSearch=this.onChangeSearch.bind(this);
    this.state = {
      articles: [],
      categories: ["Toutes les catégories"],
      search:"",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9192/categories/")
      .then(res =>{
        this.setState({
          categories : ["Toutes les catégories",...res.data.map(c=>c.categ_name)],
        });
      })
      .catch(e=>console.log(e))

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

  onChangeSearch(e){
    this.setState({
      search : e.target.value,
    });
  }

  articleList() {
    return this.state.articles
    .filter(
      article =>
        this.state.search !== "Toutes les catégories" ?
        article.categorie.categ_name.toLowerCase().includes(this.state.search.toLowerCase())||
        this.state.search.length === 0 : true
    )
    .map(currentArticle => {
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
{/*         <div className="grey-text">
          <input
            className="form-control"
            placeholder="Rechercher par Catégorie"
            onChange={this.onChangeSearch}
          />
        </div> */}
        <div className="form-group">
          <label>Categorie</label>
             <select
                   ref="userInput"
                   className="form-control"
                   onChange={this.onChangeSearch}
                   >
                   {this.state.categories.map(function(categorie) {
                    return (
                    <option key={categorie} value={categorie}>
                    {categorie}
                    </option>
                  );
                })}
             </select>
          </div>
        <br></br>
        {this.articleList()}
      </div>
    );
  }
}

export default ArticlesPage;
