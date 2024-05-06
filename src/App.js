import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import EditProfile from './components/EditProfile';
import Logout from './components/Logout';


function App() {
  return (
    <Router>
      <div className='app'>
        
        <Routes>
          <Route path="/edit-profile" Component={EditProfile} props={{FormData}}>
          </Route>
          <Route path="/payment" Component={Payment}>
          </Route>
          <Route path="/security" Component={Security}>
          </Route>
          <Route path="/" Component={ProfilePage}>
          </Route>
          
        </Routes>
      </div>
    </Router>
  );
}

function Payment() {
  return <h2>payment</h2>;
}
function Security() {
  return <h2>security</h2>;
}
export default App;
