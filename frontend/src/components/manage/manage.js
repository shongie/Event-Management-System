import React from "react";

function manage() {

  // function handleSubmit(event){
  //   const Venue = event.target.element.name.value;
  // }


  // function addEvent (){
  //       <form>
  //         <input type = "text" Venue = "venue" placeholder = "Enter the venue" />
  //         <input type = "text" Event Name = "event name" placeholder = "Enter the Event" />
  //         <input type = "date" Date = "date" placeholder = "Enter the Date" />
  //         <input type = "text" Location = "Location" placeholder = "Enter the Location of the Event" />
  //         <input type = "number" Total Number of Guests = "Total Number of Guests" placeholder = "Enter the Total Number of Guests" />
  //         <input type = "text" Status of Event = "Status of Event" placeholder = "Enter the Status of Event" />
  //       </form>
  // }
  return (

    <div className="min-h-screen tb">
      <div className="overflow-x-auto">
        <h2 className="heading text-center text-5xl mb-4 mt-4">Manage Events</h2>
        {/* The button to open modal */}
        <label htmlFor="my-modal-4" className="btn mb-4">Add Event</label>

        <table className="table table-compact w-full ">
          <thead>
            <tr>
              <th>Venue</th>
              <th>Event Name</th>
              <th>Date</th>
              <th>location</th>
              <th>Total Number of Guests</th>
              <th>Event Status</th>
              <th>Review</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>Botanical Gardens</th>
              <td>Music Festival</td>
              <td>16/12/2022</td>
              <td>Roodepoort</td>
              <td>250</td>
              <td>Completed</td>
              <td>
                <button className="btn btn-primary ml-8">Edit</button>
                <button className="btn btn-secondary ml-8">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Northern Academy Independent School</td>
              <td>School Choir</td>
              <td>12/01/2023</td>
              <td>Polokwane</td>
              <td>200</td>
              <td>In Progress</td>
              <td>
                <button className="btn btn-primary ml-8">Edit</button>
                <button className="btn btn-secondary ml-8">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <body>
          <div className="container">
          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative labels" htmlFor="">
              <h3 className="text-lg font-bold">Complete the following form to add an event.</h3>

              <form action="#">
                <div className="user-details mr-20">
                  <div className="input-box">
                    <span className="details">Venue</span>
                    <input type="text  mr-8" placeholder="Enter the venue" required />
                  </div>

                  <div className="input-box">
                    <span className="details">Event Name</span>
                    <input type="text mr-8" placeholder="Enter the Event" required />
                  </div>

                  <div className="input-box">
                    <span className="details">Date</span>
                    <input type="date" placeholder="Enter the Date" required />
                  </div>

                  <div className="input-box">
                    <span className="details">Location</span>
                    <input type="text" placeholder="Enter the Location of the Event" required />
                  </div>

                  <div className="input-box">
                    <span className="details">Total Number of Guests</span>
                    <input type="number" placeholder="Enter the Total Number of Guests" required />
                  </div>

                  <div className="input-box">
                    <span className="details">Status of Event</span>
                    <input type="text" placeholder="Enter the Status of Event" required />
                  </div>

                </div>
                <button className="btn btn-success ml-8 justify-center">Submit</button>

              </form>
            </label>
          </label>
          </div>
        </body>

      </div>
    </div>

  );
}

export default manage;
