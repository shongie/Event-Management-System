import React from "react";
import Home from '../home/home';
import './dashboard.css';

function dashboard() {

    function homes() {
        document
          .getElementById("home")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }

  return (
    <section>
      <div className="flex justify-end">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden nav"
        ></label>
      </div>

      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  justify-center">
           <main>
            <section id="home"><Home /></section>
           </main>
          </div>
        

        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content colg">
            <div className="down">
              <div className="avatar flex justify-center avt">
                <div className="w-24 rounded-full">
                </div>
              </div>
              <div className="flex justify-center font-bold text-5xl named">
                  Student Event Management System
            
              </div>

              <li id="scroll">
                <a href="#home" onClick={() => homes()}>
                Home
                </a>
              </li>
              <li id="scroll">
                <a href="#about" >
                Manage Events
                </a>
              </li>
              <li id="scroll">
                <a href="#resume" >
                View Events
                </a>
              </li>
              <li id="scroll">
                <a href="#portfolio" >
                 Event Histoty
                </a>
              </li>
              <li id="scroll">
                <a href="#contact" >
                Profile
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default dashboard;
