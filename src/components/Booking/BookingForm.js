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
  const [error,setError]  = useState('');
  const [Seatserror,setSeatsError]  = useState('');
  const [attandeeFrom, setAttandeeForm] = useState([]);
  
  
  
  const submitHandler = event => {
    event.preventDefault();
    const finalSeats = props.seatCount - enteredSeats;
    
    props.onAddBooking({ bookingName: enteredBookingName, email: enteredEmail, number: enterendNumber, seats:  finalSeats, attendee: enteredAttendee});
    setMessage(`Tickets booked`);
    setBooked(true);
   // let path = `/`; 
    //history.push(path);
  }; 
 
  const onChangeName = (e) => {
    const getUserGivenName = e.target.value;
    const regex = /^[A-Za-z ]+$/;
    const isValid = regex.test(getUserGivenName);
    if (isValid) {
       setEnteredBookingName(getUserGivenName);
      setError('');
    } else {
        setError(`Only letters and spaces are allowed`);
    }
  };

  const onChangeSelect = (e) => {
    const getUserSelectValue = e.target.value;
    if (getUserSelectValue > props.seatCount) {
      setSeatsError(`Number of seats selected greater than available seats`);
    } else {
      setEnteredSeats(getUserSelectValue);
      setSeatsError("");
      createAttandeeForm(getUserSelectValue);
    }
  };

  const onChangeAtandeeName = (index, e) => {
    let getenteredAttendee = Object.assign([], enteredAttendee);

    if (getenteredAttendee[index]) {
      getenteredAttendee[index] = e.target.value;
    } 

    setEnteredAttendee(getenteredAttendee);
  };

  const createAttandeeForm = (value) => {
    let htmlValue = [];

    for (let i = 0; i < value; i++) {
      htmlValue.push(
        <div className="form-control">
          <label htmlFor="attendee">Name of Attendee #{i+1}</label>
          <input
            type="text"
            id="attendee"
            value={enteredAttendee[i]}
            onChange={(e) => onChangeAtandeeName(i, e)}
            required={enteredSeats === 1 ? false : true}
          />
        </div>
      );
    }

    setAttandeeForm(htmlValue);
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
                                       onChange={(e) => onChangeName(e)}
                                        required
                                        />
                                      </div>

                                      <p className='errorMessage'> {error} </p>
                                    <div className="form-control">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                        type="email"
                                        id="email"
                                        value={enteredEmail}
                                        onChange={event => {
                                            setEnteredEmail(event.target.value);
                                        }}
                                        
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
                                       onChange={(e) => onChangeSelect(e)}
                                        required>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                                    <p className='errorMessage'> {Seatserror} </p>
                                   
                                       
                                    {attandeeFrom}
                                        
                                   
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
