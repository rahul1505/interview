import React, { Component } from 'react';
import axios from 'axios';
import Search from "./Search";

class listing extends Component {

  constructor(props) {
    super(props);
    this.state = {
       data: []
    }
}

componentDidMount() {
  axios.get('https://interfinal-e73c3.firebaseio.com/posts.json').then((response) => {
        this.setState({
            data: response.data
        })
    });
  
}

render() {
       return <Search newData={this.state.data} />
}

}

export default listing;