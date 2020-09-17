import React, { Component } from 'react';
import axios from 'axios';
import {  Link } from 'react-router-dom';
import image from '../../assets/image.png';
import '../../App.css';



class listing extends Component {
  state = {
    posts: [],
    isLoading: true,
    errors: null
  };

   //request to data with axios
  getPosts() {
    axios
      .get("https://interview-1d834.firebaseio.com/posts.json")
      .then(response => {
        this.setState({
          posts: response.data,
          isLoading: false
        });
        
       // console.log(response);
      })
      // Catching errors
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getPosts();
  }

  
  render() {
    const { isLoading, posts } = this.state;
    return (
      <div>
       
       <div className="row">
          {!isLoading ? (
            posts.map(post => {
              const { id, title, date, seats } = post;
              return (
                <div  className="column column-3 BackgroundYellow" key={id}>
                   <div className='content'>
                   <h3> {title}</h3>
                              <div className='Image'>
                                  <img src={image} alt="event"/>
                              </div>

                              <div className='Info'>
                              
                                <p >{date}  </p>
                                <p>Seats <br />
                                Avaialble : {seats} </p>
                                {(() => {
                                      if (seats===0) {
                                        return <button type="button" disabled className="Gray"> Sold Out </button>;
                                      } else {
                                        return <Link 
                                        to={{
                                          pathname: `/booking/${id}`,
                                          state: { fromDashboard: {title}, count: {seats} }
                                        }}
                                         >
                                         <button  type="button" className="button Green"> Book Now </button>
                                          </Link>;
                                      }
                                  })()}
                                                             
                     </div>
                          <div className='clear'></div>

                     </div>
                 
                  
                </div>
                
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
  }

}

export default listing;