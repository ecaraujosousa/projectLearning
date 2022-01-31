import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import ListCoursesComponent from './components/ListCoursesComponent';
import PostCourseComponent from './components/PostCourseComponent';
import PutCourseComponent from './components/PutCourseComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
       <Router>
          <HeaderComponent />
            <div className="container">
             <Switch> 
                <Route path = "/" exact component = {ListCoursesComponent}></Route>
                <Route path = "/course" component = {ListCoursesComponent}></Route>
                <Route path = "/add-course" component = {PostCourseComponent}></Route>
                <Route path = "/update-course/:courseid" component = {PutCourseComponent}></Route>
              </Switch>         
            </div>
          <FooterComponent />  
       </Router> 
    </div>
   
  );
}

export default App;
