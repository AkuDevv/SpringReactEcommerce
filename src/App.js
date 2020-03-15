import React , {Component} from 'react';
import './App.css';
import LoginPage from './Components/loginpage';
import CreateAccount from'./Components/CreateAccount';
import Home from './Components/home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      connected: false,
      user: null
    };
  }

  testlogin() {
    if (this.state.connected)
      return (
        <Home
          user={this.state.user}
          logout={() => {
            this.setState({ connected: false });
          }}
        />
      );
    else
      return (
        <div>
        <div className="App">
        <LoginPage
          login={user => {
            this.setState({ connected: true, user: user });
          }}
        />
        </div>
        <hr style={{width:600}}/>
        <div className="App">
        <CreateAccount/>
        </div>
        </div>
      );
  }

  render() {
    return <div>{this.testlogin()}</div>;
  }
}

export default App;
