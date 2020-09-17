import React, { Component } from 'react';
import Listing from './components/Listing/Listing.js';
import { Route, Switch  } from 'react-router-dom';
import Booking from './components/Booking/Booking';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
           <h1 className="App-title">Events</h1>
        </header>
        
             <Switch>
                <Route path="/booking/:Id" 
                render={({match}) => <Booking eventId={match.params.Id}  />}
                 />
                <Route path="/" component={Listing} />
             </Switch>
               
      </div>
    );
  }
}

export default App;
