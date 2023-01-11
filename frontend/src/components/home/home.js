import React from "react";
import './home.css';

function home() {
  return (
    <container className="flex  justify-center">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 gap-3">

        <div className="card w-96 bg-primary text-primary-content mt-16">
          <div className="card-body text-center">
            <h2 className="card-title flex justify-center">Upcoming Events</h2>
            <p>Upcoming events will happen in the near future.</p>
            <div className="card-actions justify-end">
              
            </div>
          </div>
        </div>

        <div className="card w-96 bg-primary text-primary-content mt-16">
          <div className="card-body ">
            <h2 className="card-title flex justify-center ">Past Events</h2>
            <p>Past events and things happened or existed before the present time. </p>
            <div className="card-actions justify-end">
            
            </div>
          </div>
        </div>

        <div className="card w-96 bg-primary text-primary-content mt-16">
          <div className="card-body">
            <h2 className="card-title flex justify-center ">Inprocess Events</h2>
            <p>Events that are in progress.</p>
            <div className="card-actions justify-end">
            
            </div>
          </div>
        </div>

        <div className="card w-96 bg-primary text-primary-content mt-16">
          <div className="card-body">
            <h2 className="card-title flex justify-center ">Venue Events</h2>
            <p>Venues of where the events are taking place.</p>
            <div className="card-actions justify-end">
             
            </div>
          </div>
        </div>

      </div>



    </container>


  );
}

export default home;
