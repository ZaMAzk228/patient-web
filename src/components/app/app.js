import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './app.css';

import { FirstPages, Login, PatientPage, DoctorPage } from '../pages';
import RegisterNavigatorPage from '../RegisterNavigation';

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={FirstPages}/>
            <Route path="/register" component={RegisterNavigatorPage}/>
            <Route path="/login" component={Login}/>
            <Route path="/timetable" component={PatientPage} />
            <Route path="/doctorsTimetable" component={DoctorPage} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App;