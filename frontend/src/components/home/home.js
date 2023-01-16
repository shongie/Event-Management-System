import React from "react";
import './home.css';

function home() {
  return (
    <container className="flex min-h-screen justify-center color" >
      <div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 gap-3">

          <div className="card w-96 bg-primary text-primary-content mt-16">
            <div className="card-body text-center">

              <h2 className="card-title flex justify-center">Event Packages</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className="card-actions justify-end">

              </div>
            </div>
          </div>

          <div className="card w-96 bg-primary text-primary-content mt-16">
            <div className="card-body ">
              <h2 className="card-title flex justify-center ">Review & Ratings</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className="card-actions justify-end">

              </div>
            </div>
          </div>

          <div className="card w-96 bg-primary text-primary-content mt-16">
            <div className="card-body">

              <h2 className="card-title flex justify-center ">Reports</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              
              <div className="card-actions justify-end">

              </div>
            </div>
          </div>

          <div className="card w-96 bg-primary text-primary-content mt-16">
            <div className="card-body">
              <h2 className="card-title flex justify-center ">Event Venue </h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className="card-actions justify-end">

              </div>
            </div>
          </div>

        </div>


      </div>
    </container>


  );
}

export default home;
