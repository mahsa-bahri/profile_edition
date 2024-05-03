import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import EditProfile from './components/EditProfile';

function App() {
  return (
    <Router>
      <div className='app'>
        
        <Routes>
          <Route path="/edit-profile" Component={EditProfile}>
          </Route>
          <Route path="/contact" Component={Contact}>
          </Route>
          <Route path="/profile" Component={ProfilePage}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function Contact() {
  return <h2>Contact</h2>;
}
export default App;
