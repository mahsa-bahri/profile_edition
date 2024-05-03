import React from "react";
import './ProfilePage.css';
import { Link } from 'react-router-dom';
import pic from'../assets/profile.jpg' ;
export default function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="personal-data">
        <img src={pic} className="profile-pic"/>
      </div>

      <nav>
          <ul>
            <li>
              <Link to="/edit-profile">edit profile</Link>
            </li>        
          </ul>
        </nav>

    </div>
  );
}
