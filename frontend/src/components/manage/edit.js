import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import { Events } from '../events';

function Edit() {

    const [Venue, setVenue] = useState('');
    const [EventName, setEventName] = useState('');
    const [DateOfEvent, setDateOfEvent] = useState('');
    const [LocationOfEvent, setLocationOfEvent] = useState('');
    const [TotalNumberOfGuests, setTotalNumberOfGuests] = useState('');
    const [StatusOfEvent, setStatusOfEvent] = useState('');
    // const [id, setId] = useState('');

    let history = useNavigate();

    var index = Events.map(function (e) {
        return e.id
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Events[index];
        a.Venue = Venue;
        a.EventName = EventName;
        a.DateOfEvent = DateOfEvent;
        a.LocationOfEvent = LocationOfEvent;
        a.TotalNumberOfGuests = TotalNumberOfGuests;
        a.StatusOfEvent = StatusOfEvent;


        history("/");
    }
    useEffect(() =>{
        setVenue(localStorage.getItem('Venue'));
        setEventName(localStorage.getItem('EventName'));
        setDateOfEvent(localStorage.getItem('DateOfEvent'));
        setLocationOfEvent(localStorage.getItem('LocationOfEvent'));
        setTotalNumberOfGuests(localStorage.getItem('TotalNumberOfGuests'));
        setStatusOfEvent(localStorage.getItem('StatusOfEvent'));
        // setId(localStorage.getItem('Id'));
    },[])

    return (
        <Form className="d-grid gap-2 " style={{ margin: "15rem" }}  onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId ="Venue">
            <Form.Control type="text" placeholder="Enter Venue" value={Venue} required onChange={(e) => setVenue(e.target.value)}>
            </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId ="EventName">
            <Form.Control type="text" placeholder="Enter EventName" value={EventName} required onChange={(e) => setEventName(e.target.value)}>
            </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId ="DateOfEvent">
            <Form.Control type="date" placeholder="Enter Date of Event" value={DateOfEvent}  required onChange={(e) => setDateOfEvent(e.target.value)}>
            </Form.Control>
            </Form.Group>


            <Form.Group className="mb-3" controlId ="LocationOfEvent">
            <Form.Control type="text" placeholder="Enter Location" value={LocationOfEvent}  required onChange={(e) => setLocationOfEvent(e.target.value)}>
            </Form.Control>
            </Form.Group>


            <Form.Group className="mb-3" controlId ="TotalNumberOfGuests">
            <Form.Control type="number" placeholder="Enter Total Number Of Guests" value={TotalNumberOfGuests} required onChange={(e) => setTotalNumberOfGuests(e.target.value)}>
            </Form.Control>
            </Form.Group>


            <Form.Group className="mb-3" controlId ="StatusOfEvent">
            <Form.Control type="text" placeholder="Enter the Status Of Event" value={StatusOfEvent} required onChange={(e) => setStatusOfEvent(e.target.value)}>
            </Form.Control>
            </Form.Group>


            <Button  type ="Submit">Update</Button>
        </Form>
    )


}
export default Edit;