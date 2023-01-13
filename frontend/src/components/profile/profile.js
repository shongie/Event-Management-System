import React from "react";
import { useState, useEffect } from 'react';
import Home from '../home/home';
// import './dashboard.css';
import './profile.css'

function Profile() {

    //     const [First_name, setTodos] = useState([]);
    const [firstName, setFirstName] = useState([]);
    const [lastName, setLastName] = useState([]);
    const [email, setEmail] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState([]);
    const [gender, setGender] = useState([]);

    //   const [newTodo, setNewTodo] = useState("");
    const [newFirstName, setNewFirstName] = useState("");
    const [newlastName, setNewLastName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPhoneNumber, setNewPhoneNumber] = useState("");
    const [newGender, setNewGender] = useState("");



    useEffect(() => {
        // update update the list of todos
        // when the component is rendered for the first time
        update();
    }, []);

    // This function updates the component with the
    // current todo data stored in the server
    function update() {
        fetch(`${process.env.REACT_APP_BACKEND}api/todos`)
            .then(res => res.json())
            .then(firstName => {
                setFirstName(firstName.data);
                setLastName(lastName.data);
                setEmail(email.data);
                setPhoneNumber(phoneNumber.data);
                setGender(gender.data);
            })
    }


    // function changeTodo(e) {
    //     e.preventDefault();
    //     let item = newTodo;
    //     let pos = todo.id;
    //     let body = {
    //       data: {
    //         item
    //       }
    //     };
    
    //     fetch(`${process.env.REACT_APP_BACKEND}api/todos/${pos}`, {
    //       method: "PUT",
    //       headers: {
    //         'Content-type': 'application/json'
    //       },
    //       body: JSON.stringify(body)
    //     })
    //       .then(() => {
    //         setEdit(false);
    //         update();
    //       })
    //   }



    // This function sends a new todo to the server
    // and then call the update method to update the
    // component
    function addFirstName(e) {
        e.preventDefault();
        // let item = newFirstName;
        let body = {
            data: {
                firstName: newFirstName,
                lastName: newlastName,
                newEmail: newEmail,
                PhoneNumber: newPhoneNumber,
                gender: newGender,


            }
        };

        fetch(`http://localhost:1337/api/todos`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(() => {
                setNewFirstName("");
                setNewLastName("");
                setNewEmail("");
                setNewPhoneNumber("");
                setNewGender("");
                update();
            })
    }


    return (
        <>
            <div className="profilebody flex justify-center">



                <div class="card card-compact h-3/4 w-3/4 bg-base-200  shadow-xl">

                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" className="profilepic r" /></figure>
                    <div class="card-body">

                        <p>First name: </p>
                        <p>Last name </p>
                        <p>Email: </p>
                        <p>Phone number: </p>
                        <p>Gender: </p>

                        <div class="card-actions justify-end">
                            <label htmlFor="my-modal-4" className="btn btn-primary">open modal</label>
                        </div>
                    </div>
                </div>

                {/* The button to open modal */}
                {/* <label htmlFor="my-modal-4" className="btn">open modal</label> */}

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <div class="card card-compact h-3/4 w-1/2 bg-base-200 shadow-xl flex justify-center">

                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div class="card-body">
                            <form className="form" >
                                <p>Name: </p>
                                <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs" value={newFirstName} onChange={e => setNewFirstName(e.currentTarget.value)} />
                                

                                <p>Email: </p>
                                <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs" value={newlastName} onChange={e => setNewLastName(e.currentTarget.value)} />
                                <p>Phone number: </p>
                                <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs" value={newEmail} onChange={e => setNewEmail(e.currentTarget.value)} />

                                <p>Phone numbers: </p>
                                <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs" value={newPhoneNumber} onChange={e => setNewPhoneNumber(e.currentTarget.value)} />

                                <p>Gender: </p>
                                <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs" value={newGender} onChange={e => setNewGender(e.currentTarget.value)} />

                                <br/><br/>
                                <button class="btn btn-active btn-primary">Button</button> 
                                <button className="todo_button" type="submit">Change todo</button>     


                            </form>

                            {/* This is a list view of all the data in the "todo" state variable */}
                            <div>
                                {
                                    firstName.map((firstName, i) => {
                                        return <addFirstName firstName={firstName} key={i} update={update} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </label>


            </div>

        </>


    );
}

export default Profile;
