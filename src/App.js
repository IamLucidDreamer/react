import './App.css';

import Header from './MyComponents/Partials/Header.jsx';
import Header2 from './MyComponents/Partials/Header2.jsx'
import Footer from './MyComponents/Partials/Footer.jsx';
import Home from './MyComponents/Main/Home.jsx';
import SignUp from './MyComponents/User/SignUp.jsx';
import Contact from './MyComponents/Main/Contact.jsx';
import LogIn from './MyComponents/User/LogIn.jsx';
import About from './MyComponents/Main/About.jsx';
import Jobs from './MyComponents/Main/Jobs.jsx';
import Services from './MyComponents/Main/Services.jsx';
import Training from './MyComponents/Main/Training.jsx';
import Technology from './MyComponents/Main/Technology/Technology';
import IncidentReporting from './MyComponents/Main/Technology/IncidentReporting.jsx';
import ToursCheckpoints from './MyComponents/Main/Technology/ToursCheckpoints.jsx';
import DispatchTasks from './MyComponents/Main/Technology/DispatchTasks.jsx';
import ReportsData from './MyComponents/Main/Technology/ReportsData.jsx';
import Communication from './MyComponents/Main/Technology/Communication.jsx';
import MobilePatrols from './MyComponents/Main/Technology/MobilePatrols.jsx';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Header2 />
          <switch>

            <Route path="/react" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/jobs" exact component={Jobs}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/training" component={Training}/>
            <Route path="/services" component={Services}/>
            <Route path="/technology" component={Technology}/>


            <Route path="/incidentreporting" component={IncidentReporting}/>
            <Route path="/tours&checkpoints" component={ToursCheckpoints}/>
            <Route path="/dispatch&tasks" component={DispatchTasks}/>
            <Route path="/reports&data" component={ReportsData}/>
            <Route path="/communication" component={Communication}/>
            <Route path="/mobilepatrols" component={MobilePatrols}/>
        
          </switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
