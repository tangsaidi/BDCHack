import React, { Component } from 'react';
import './App.css';
import NavigationBar from "./components/navigationbar";
import "bootstrap/dist/css/bootstrap.css";
import Browse from "./components/browse";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dealership: {
        name: "Client",
        img: "http://img0.sm360.ca/images/web/centre-ville-vw/1814/vw-centreville-logo1515013234970.png"
      },
      route: "browse"
    };
  }

  render() {
    let page;
    switch (this.state.route) {
      case "browse":
        page = <Browse/>;
        break;
      default:
        page = <h1>no route</h1>;
        break;
    }

    return (
      <div className="App">
        <NavigationBar dealership={this.state.dealership}/>
        {page}
      </div>
    );
  }
}

export default App;
