import React, { useState } from 'react';
//import {  useHistory } from 'react-router-dom';
import image from '../../assets/image.png';
import '../../App.css';
import '../Booking/Booking.css';


const BookingForm = React.memo(props => {

 // const history = useHistory();

  const [enteredBookingName, setEnteredBookingName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enterendNumber, setEnterendNumber] = useState('');
  const [enteredSeats, setEnteredSeats] = useState('');
  const [enteredAttendee, setEnteredAttendee] = useState('');
  const [message, setMessage] = useState('');
  const [booked, setBooked] = useState(false);
  
  
  const submitHandler = event => {
    event.preventDefault();
    const finalSeats = props.seatCount - enteredSeats;
    
    props.onAddBooking({ bookingName: enteredBookingName, email: enteredEmail, number: enterendNumber, seats:  finalSeats, attendee: enteredAttendee});
    setMessage(`Tickets booked`);
    setBooked(true);
   // let path = `/`; 
    //history.push(path);
  }; 
 
  return (

    <div>
         <div className="row">
                <div  className="column column-3">
                 </div> 
                 <div  className="column column-6 BackgroundMaroon">
                             <div className='content'>
                             <h3> {props.eventTitle}</h3>
                             <h4> Number of available seats: { props.seatCount} </h4>
                              <div className='Image'>
                                  <img src={image} alt="event"/>
                              </div>
                              <div className='BookingInfo'>
                              
                                    <form onSubmit={submitHandler}>
                                    <div className="form-control">
                                        <label htmlFor="name">Name:</label>
                                        <input 
                                        type="text"
                                        id="bookingName"
                                        value={enteredBookingName}
                                        onChange={event => {
                                          setEnteredBookingName(event.target.value);
                                        }}
                                        required
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                        type="email"
                                        id="email"
                                        value={enteredEmail}
                                        onChange={event => {
                                            setEnteredEmail(event.target.value);
                                        }}
                                        required
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label htmlFor="number">Phone No:</label>
                                        <input
                                        type="number"
                                        id="number"
                                        value={enterendNumber}
                                        onChange={event => {
                                            setEnterendNumber(event.target.value);
                                        }}
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label htmlFor="seats">Number of seats</label>
                                        <select name="seatsNeeded" className="select-field" id="seats" value={enteredSeats}
                                        onChange={event => {
                                            setEnteredSeats(event.target.value);
                                        }} >
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                                    <div className="form-control">
                                        <label htmlFor="attendee">Number of Attendee</label>
                                        <input
                                        type="text"
                                        id="attendee"
                                        value={enteredAttendee}
                                        onChange={event => {
                                            setEnteredAttendee(event.target.value);
                                        }}
                                        />
                                    </div>
                                    <p className="ThankYou">{message}  </p>
                                    <div className="Submit">
                                        <button type="submit" className={`Submit Green ${booked ? "Disabled" : ""}`}  > Submit</button>
                                        <button type="cancel" className={`Cancel Red ${booked ? "Disabled" : ""}`}  onClick = {props.click}>Cancel</button>
                                       
                                    </div>
                                  
                                    </form>
                                  
                                   </div> 
                               </div>    
                    </div>           
             <div  className="column column-3">
             </div>  
         </div>
       </div>  
  );
});

export default BookingForm;
