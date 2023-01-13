/* eslint-disable no-unused-vars */
import React from "react";
import useFetch from "../../hooks/usefetch";
import { Link } from "react-router-dom";

export default function Homepage() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/profiles');

    if (loading) return <p> loading ...</p>;
    if (error) return <p> Error 😦 </p>;
    console.log(data.data[0].attributes)
    console.log(data)
    return (
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
                                <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs" value={profile.attributes.first_name} onChange={e => setNewFirstName(e.currentTarget.value)} />
                                

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
    );
}

