import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/about" Component={About}>
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

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}
export default App;
