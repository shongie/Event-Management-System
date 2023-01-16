import React from "react";
import { useState, useEffect } from 'react';
// import Home from '../home/home';
// import './dashboard.css';
import './profile.css'

function Profile() {


    //     const [First_name, setTodos] = useState([]);
    const [profile, setProfile] = useState([]);
    // const [lastName, setLastName] = useState([]);
    // const [email, setEmail] = useState([]);
    // const [phoneNumber, setPhoneNumber] = useState([]);
    // const [gender, setGender] = useState([]);

    //   const [newTodo, setNewTodo] = useState("");
    const [newProfile, setNewProfile] = useState("");
    // const [newlastName, setNewLastName] = useState("");
    // const [newEmail, setNewEmail] = useState("");
    // const [newPhoneNumber, setNewPhoneNumber] = useState("");
    // const [newGender, setNewGender] = useState("");



    useEffect(() => {
        // update update the list of todos
        // when the component is rendered for the first time
        update();
    }, []);

    // This function updates the component with the
    // current todo data stored in the server
    function update() {
        fetch(`${process.env.REACT_APP_BACKEND}/api/profiles/:id`)
            .then(res => res.json())
            .then(profile => {
                setProfile(Profile.data);
                // setLastName(lastName.data);
                // setEmail(email.data);
                // setPhoneNumber(phoneNumber.data);
                // setGender(gender.data);
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
                profile: newProfile,
                // lastName: newlastName,
                // newEmail: newEmail,
                // PhoneNumber: newPhoneNumber,
                // gender: newGender,


            }
        };

        fetch(`http://localhost:1337/api/profiles`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(() => {
                setNewProfile("");
                // setNewLastName("");
                // setNewEmail("");
                // setNewPhoneNumber("");
                // setNewGender("");
                // update();
            })
    }

    console.log(profile.map);
    return (
        <>
            <div className="profilebody flex justify-center">
                <div class="card card-compact h-3/4 w-2/3 bg-base-200  shadow-xl">

                    <h1 className="card-title profileH1" >Admin Profile </h1>
                    <div class="card-body">
                        <div>
                            {
                                data.data.map(profile => (

                                    <div key={profile.attributes.ID} className="review-card">
                                        <p> First name: {profile.attributes.first_name}</p>
                                        <p> Last_name: {profile.attributes.last_name}</p>
                                        <p> Email: {profile.attributes.email}</p>
                                        <p>Phone_number: {profile.attributes.phone_number}</p>
                                        <p> Gender: {profile.attributes.gender}</p>


                                        {/* <p>{profile.attributes.body.substring(0, 200)}</p> */}
                                        {/* <Link to={'/details/${review.id}'} >Read more...</Link> */}
                                    </div>
                                ))
                            }
                        </div>
                        <div class="card-actions justify-end">
                            <label htmlFor="my-modal-4" className="btn btn-primary">Edit Profile</label>
                        </div>
                    </div>
                </div>

                {/* The button to open modal */}
                {/* <label htmlFor="my-modal-4" className="btn">open modal</label> */}
                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <div class="card card-compact  w-96 bg-base-200 shadow-xl flex justify-center">
                        <h1 className="card-title profileH1">Edit Profile</h1>

                        <div class="card-body">
                            <form className="form" >  {/* onSubmit={changeTodo} */}
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
                                <button class="btn btn-active btn-primary">Save</button>     


                            </form>

                            {/* This is a list view of all the data in the "todo" state variable */}
                            <div>
                                {
                                    profile.map((profile, i) => {
                                        return <addFirstName profile={profile} key={i} update={update} />
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
