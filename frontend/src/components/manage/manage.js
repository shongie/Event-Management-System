import React from "react";


function manage() {

  return (
    <div className="tb">
      <div className="overflow-x-auto">
        <h2 className="heading text-center text-5xl mb-8 mt-4">Manage Events</h2>
      <button className="btn btn-primary mb-4">Add Event</button>
      </div>

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
    </div>
  
  );
}

export default manage;
