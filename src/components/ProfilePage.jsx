import React, { useState, useEffect, useRef } from "react";
import "./ProfilePage.css";
import { Link } from "react-router-dom";
import pic from "../assets/profile.jpg";
import { CgProfile } from "react-icons/cg";
import { MdPayment } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";
import Logout from "./Logout";

export default function ProfilePage() {
  const [logoutPressed, setLogoutPressed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log("toggled");
  };
  return (
    <div className={isOpen ?"profile-page unblur":"profile-page "} ref={dropdownRef}>
      <p className="profile-title">Profile</p>
      <div className="personal-data">
        <img src={pic} className="profile-pic " />
        <p className="profile-name">Mahsa Bahri</p>
        <p className="text-sm text-3xl font-bold mb-4">
          mahsabahri79@gmail.com
        </p>
      </div>

      <nav className="navigation">
        <ul>
          <li className="navigation">
            <Link to="/edit-profile" className="no-underline ...">
              <div className="profile-item">
                <CgProfile color="white" /> <span>edit profile</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/payment">
              <div className="profile-item">
                <MdPayment color="white" />
                <span> payment </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/security">
              <div className="profile-item">
                <GoShieldCheck color="white" />
                <span> security</span>
              </div>
            </Link>
          </li>
          <li>
            <div className="profile-item" onClick={toggleDropdown}>
              <IoLogOutOutline color="red" />
              <span style={{ color: "red" }}> log out</span>
            </div>
          </li>
        </ul>
      </nav>
      
      {isOpen && <Logout />}
    </div>
  );
}
