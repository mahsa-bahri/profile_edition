import React from "react";
import "./ProfilePage.css";
import { Link } from "react-router-dom";
import pic from "../assets/profile.jpg";

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="personal-data">
        <img src={pic} className="profile-pic mx-auto" />
        <p class="text-xl">Mahsa Bahri</p>
        <p class="text-sm">mahsabahri79@gmail.com</p>
      </div>

      <nav className="navigation">
        <ul>
          <li className="navigation">
            <Link to="/edit-profile" className="no-underline ...">
              edit profile
            </Link>
          </li>
          <li>
            <Link to="/payment">payment</Link>
          </li>
          <li>
            <Link to="/security">security</Link>
          </li>
          <li>
            <Link to="/logout">log out</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
