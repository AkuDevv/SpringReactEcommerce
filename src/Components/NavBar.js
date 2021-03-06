import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { MDBIcon } from 'mdbreact';


class NavBar extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <a href="#" className="navbar-brand" style={{color:"red", fontSize:30}}>Saif Shop</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav" >
                            <li className="nav-item ">
                                <Link to="/" className="nav-link App"><div style={{color:"red"}}>Commandes</div></Link>
                            </li>                            
                            <li className="nav-item">
                                <Link to="/articles" className="nav-link App"><div style={{color:"red"}}>Articles</div></Link>
                            </li>
                        </ul>
                    </div>
                        <span className="navbar-text">
                        <Link to="#" className="nav-link App"><div style={{color:"red"}}><MDBIcon far size="2x"/>{this.props.user.name}</div></Link>
                        </span>
                        <span className="navbar-text">
                        <Link to="/editClient" className="nav-link App"><div style={{color:"red"}}><MDBIcon far size="2x" icon="user-circle" /></div></Link>
                        </span>
                        <span className="navbar-text">
                        <div style={{color:"purple"}}><MDBIcon onClick={this.props.logout} size="2x" icon="sign-out-alt" /></div>
                        </span>
                </nav>
            </div>
        )
    }
}


export default NavBar;