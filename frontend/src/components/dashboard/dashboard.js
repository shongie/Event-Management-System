import React from "react";
import { useNavigate } from "react-router-dom";
import {IoMdNotificationsOutline} from 'react-icons/io';
import { AiOutlineHome } from 'react-icons/ai';
import { FaHistory } from 'react-icons/fa';
import { GrView, GrUserManager } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { BiLogOutCircle } from 'react-icons/bi';


import Home from '../home/home';

import './dashboard.css';

function Dashboard() {

  const navigate = useNavigate();

  function goTo() {
    navigate('manage')
  }

 

  function go() {
    navigate('history')
  }

  function not() {
    navigate('notification')
  }

  function to() {
    navigate('profile')
  }
  return (
    <section >
      <div className="color">
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
                  <a href="#home"  >
                    <AiOutlineHome style={{ fontSize: "1.5em" }} />
                    Home
                  </a>
                </li>
                <li id="scroll">
                  <a href="#manage" onClick={goTo}>
                    <GrUserManager style={{ fontSize: "1.5em" }} />
                    Book Events
                  </a>
                </li>
                
                <li id="scroll">
                  <a href="#history" onClick={go} >
                    < FaHistory style={{ fontSize: "1.5em" }} />
                    Event Histoty
                  </a>
                </li>
                <li id="scroll">
                  <a href="#history" onClick={not} >
                    < IoMdNotificationsOutline style={{ fontSize: "1.5em" }} />
                   Notification
                  </a>
                </li>
                <li id="scroll">
                  <a href="#profile" onClick={to} >
                    < CgProfile style={{ fontSize: "1.5em" }} />
                    Profile
                  </a>
                </li>
                <li id="scroll">
                  <a href="#logout" >
                    < BiLogOutCircle style={{ fontSize: "1.5em" }} />
                    Logout
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
