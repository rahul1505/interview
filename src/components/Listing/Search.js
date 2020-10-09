import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import image from '../../assets/image.png';
import '../../App.css';

class Search extends Component {

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.newData, filteredData: nextProps.newData });  
  }

  state = {
    data: [],
    filteredData: []
  };
   

  _handleSearchChange = e => {
    const { value } = e.target;
    const lowercasedValue = value.toLowerCase();

    this.setState(prevState => {
      const filteredData = prevState.data.filter(el =>
        el.title.toLowerCase().includes(lowercasedValue)
      );

      return { filteredData };
    });
  };

  render() {
    const { filteredData } = this.state;

    return (
      <div>
       
         <div className="search"><input onChange={this._handleSearchChange} placeholder="Search Events"/>
      
      
       </div> 
        {filteredData.map(el => (
          <div  className="column column-3 BackgroundYellow" key={el.id}>
            <div className='content'>
            <h3>  {el.title}</h3>
            <div className='Image'>
                     <img src={image} alt="event"/>
            </div>
            <div className='Info'>
              <p>{el.date}</p>
              <p>Seats <br />
                                Avaialble : {el.seats} </p>
                                {(() => {
                                      if (el.seats===0) {
                                        return <button type="button" disabled className="Gray"> Sold Out </button>;
                                      } else {
                                        return <Link 
                                        to={{
                                          pathname: `/booking/${el.id}`,
                                          state: { fromDashboard: `${el.title}`, count: `${el.seats}` }
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
        ))}
      </div>
    );
  }
}




export default Search;
