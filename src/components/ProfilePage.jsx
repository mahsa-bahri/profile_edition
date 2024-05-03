import React from "react";
import './ProfilePage.css';
import { Link } from 'react-router-dom';

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="personal-data">
      <nav>
          <ul>
            <li>
              <Link to="/profile">profile</Link>
            </li>        
          </ul>
        </nav>

      </div>
    </div>
  );
}
