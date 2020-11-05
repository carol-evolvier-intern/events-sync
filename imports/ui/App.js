import React, { Component } from 'react';
import AddEvent from './AddEvent';
import ListEvents from "./ListEvents";

class App extends Component {
  render() {
    return (
      <div>
        <AddEvent />
        <ListEvents/>
      </div>
    );
  }
}

// export the component `App`
export default App;