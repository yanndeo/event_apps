//import React from 'react';
import React, { Component } from "react";
import AddEvent from './AddEvent';

import ListEvents from "./ListEvents";


// Create a new React Component `EventApp`
class App extends Component {
  render() {
    return (
      <div className="col-md-12">
        <AddEvent />
        <ListEvents />
      </div>
    );
  }
}


export default App;
