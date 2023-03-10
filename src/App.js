import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      name: {
        firstName: 'John',
        lastName: 'David'
      },
      company: 'DC Studios'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome, {this.state.name.firstName} {this.state.name.lastName} from {this.state.company}
          </p>
          <button onClick={() => {
            this.setState({name: { firstName: 'Bruce', lastName: 'Wayne' }});
          }}>Change</button>
        </header>
      </div>
    );
  }
}

export default App;
