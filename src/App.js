import './App.css';

import Header from './MyComponents/Partials/Header';
import Footer from './MyComponents/Partials/Footer';
import Home from './MyComponents/Main/Home';
import SignUp from './MyComponents/User/SignUp';
import Contact from './MyComponents/Main/Contact';
import LogIn from './MyComponents/User/LogIn';
import About from './MyComponents/Main/About';
import Jobs from './MyComponents/Main/Jobs';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/jobs" exact component={Jobs}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/login" component={LogIn}/>
          <Route path="/signup" component={SignUp}/>
        </switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
