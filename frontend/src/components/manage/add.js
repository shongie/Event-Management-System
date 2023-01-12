import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {Events} from '../events';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

function Add() {
    const [Venue, setVenue] = useState('');
    const [EventName, setEventName] = useState('');
    const [DateOfEvent, setDateOfEvent] = useState('');
    const [LocationOfEvent, setLocationOfEvent] = useState('');
    const [TotalNumberOfGuests, setTotalNumberOfGuests] = useState('');
    const [StatusOfEvent, setStatusOfEvent] = useState('');

    const history = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = Venue,
         b = EventName,
         c = DateOfEvent,
         d = LocationOfEvent,
         em = TotalNumberOfGuests,
         f = StatusOfEvent;


        Events.push({id:uniqueId, Venue :a, EventName:b, DateOfEvent: c, LocationOfEvent:d, TotalNumberOfGuests:em,StatusOfEvent:f });

        history ("/");
    }

    return <div>
        <Form className="d-grid gap-2" style={{ margin: "15rem" }}  onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId ="Venue">
            <Form.Control type="text" placeholder="Enter Venue" required onChange={(e) => setVenue(e.target.value)}>
            </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId ="EventName">
            <Form.Control type="text" placeholder="Enter EventName" required onChange={(e) => setEventName(e.target.value)}>
            </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId ="DateOfEvent">
            <Form.Control type="date" placeholder="Enter Date of Event" required onChange={(e) => setDateOfEvent(e.target.value)}>
            </Form.Control>
            </Form.Group>


            <Form.Group className="mb-3" controlId ="LocationOfEvent">
            <Form.Control type="text" placeholder="Enter Location" required onChange={(e) => setLocationOfEvent(e.target.value)}>
            </Form.Control>
            </Form.Group>


            <Form.Group className="mb-3" controlId ="TotalNumberOfGuests">
            <Form.Control type="number" placeholder="Enter Total Number Of Guests" required onChange={(e) => setTotalNumberOfGuests(e.target.value)}>
            </Form.Control>
            </Form.Group>


            <Form.Group className="mb-3" controlId ="StatusOfEvent">
            <Form.Control type="text" placeholder="Enter the Status Of Event" required onChange={(e) => setStatusOfEvent(e.target.value)}>
            </Form.Control>
            </Form.Group>




            <Button  type ="Submit">Submit</Button>
        </Form>
    </div>

}
export default Add;