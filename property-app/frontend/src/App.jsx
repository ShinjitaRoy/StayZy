import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import Home from './pages/Home';
import ListingPage from './pages/ListingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/');
  };

  return (
    <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 16, background: '#fff'}}>
      <Link to="/"><img src="/logo.png" alt="StayZy" style={{height: 40}} /></Link>
      <div>
        {token ? (
          <>
            <Link to="/dashboard"><button>Dashboard</button></Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/register"><button>Register</button></Link>
          </>
        )}
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/listing/:id" component={ListingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;