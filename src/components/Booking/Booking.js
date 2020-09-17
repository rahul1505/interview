import React, { useCallback } from 'react';
import {  useLocation, useHistory  } from 'react-router-dom';
import BookingForm from './BookingForm';
import useHttp from '../../hooks/http';


const Booking = (props) => {
 // console.log ('match',match);
 const location = useLocation();
 const eId = props.eventId - 1;
const {
    sendRequest
  } = useHttp();

   
  const bookingHandler = useCallback(book => {
    
    sendRequest(
      `https://interview-1d834.firebaseio.com/posts/${eId}.json`,
      'PATCH',
      JSON.stringify(book),
      book
    );
  }, [sendRequest]);

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/`; 
    history.push(path);
  }

  return (
    <div className="App">
     
      <BookingForm eventTitle = {location.state.fromDashboard['title']} 
        seatCount = {location.state.count['seats']}
        onAddBooking={bookingHandler}
        click= {routeChange}
        
      />
  
    </div>
  );
};

export default Booking;
