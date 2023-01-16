/* eslint-disable no-unused-vars */
import React from "react";
import axios from 'axios';
import useFetch from "../../hooks/usefetch";
import { Link } from "react-router-dom";
import './profile.css'

export default function Homepage() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/profiles');

    if (loading) return <p> loading ...</p>;
    if (error) return <p> Error 😦 </p>;
    console.log(data.data[0].attributes)
    console.log(data)


    

axios
  .put('http://localhost:1337/api/restaurants/2', {
    categories: [2],
  })
  .then(response => {
    console.log(response);
  });



    return (
        <div class="card card-compact h-3/4 w-2/3 bg-base-200  shadow-xl">

            <h1 className="card-title profileH1" >Admin Profile </h1>
            <div class="card-body">
                <div>
                    {
                        data.data.map(profile => (

                            <div key={profile.attributes.ID} className="review-card">
                                <p> First name: <span className="spacetext"></span> {profile.attributes.first_name}</p>
                                <p> Last name: <span className="spacetext"></span>{profile.attributes.last_name}</p>
                                <p> Email: <span className="spacetext"></span> {profile.attributes.email}</p>
                                <p>Phone number: <span className="spacetext"></span> {profile.attributes.phone_number}</p>
                                <p> Gender: <span className="spacetext"></span> {profile.attributes.gender}</p>


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

            {/* The button to open modal */}
            {/* <label htmlFor="my-modal-4" className="btn">open modal</label> */}
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            {/* <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <div class="card card-compact  w-96 bg-base-200 shadow-xl flex justify-center">
                    <h1 className="card-title profileH1">Edit Profile</h1>

                    <div class="card-body">
                         <form className="form" >  {/* onSubmit={changeTodo} */}
                           {/* <p>Name: </p>
                            <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs" onChange={e => setNewFirstName(e.currentTarget.value)} />


                            <p>Email: </p>
                            <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs" onChange={e => setNewLastName(e.currentTarget.value)} />   
                            <p>Phone number: </p>
                            <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs" onChange={e => setNewEmail(e.currentTarget.value)} />

                            <p>Phone numbers: </p>
                            <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs" onChange={e => setNewPhoneNumber(e.currentTarget.value)} />

                            <p>Gender: </p>
                            <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs" onChange={e => setNewGender(e.currentTarget.value)} />

                            <br /><br />
                            <button class="btn btn-active btn-primary">Save</button>


                        </form> 

                         This is a list view of all the data in the "todo" state variable 
                        <div>
                            {
                                profile.map((profile, i) => {
                                    return <addFirstName profile={profile} key={i} update={update} />
                                })
                            }
                        </div>
                    </div>
                </div> 
            </label> */}



        </div>
    );
}

