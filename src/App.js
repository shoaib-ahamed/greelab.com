import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import './App.css';
import Admin from "./app/admin/Admin";
import Login from "./app/admin/Login";
import Form from "./app/home/Form";
import Home from "./app/home/Home";
import MainNav from "./app/static/MainNav";
import Nav from "./app/static/Nav";
import WebSolutions from "./app/web-solutions/WebSolutions";


// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyArivKAg1bGWC0LMI9pmQq92Js9CWvOj5Q",
//     authDomain: "admingreelab.firebaseapp.com",
//     projectId: "admingreelab",
//     storageBucket: "admingreelab.appspot.com",
//     messagingSenderId: "582847785541",
//     appId: "1:582847785541:web:0dee1bb3b2f8c9e582912c",
//     measurementId: "G-9YHX7TBDCV"
// };

// firebase.initializeApp(firebaseConfig);
// firebase.analytics()


function App() {
  return (
      <Router>
          <Switch>

              <Route path='/' exact={true}>
                  <MainNav/>
                  <Home/>
              </Route>

              <Route path='/form'>
                  <Nav/>
                  <Form/>
              </Route>

              <Route path='/admin'>
                  <Admin/>
              </Route>

              <Route path='/login'>
                  <Login />
              </Route>

              <Route path='/web-solutions'>
                  <MainNav/>
                  <WebSolutions/>
              </Route>

              <Route path='**'>
                  <Nav/>
                  <Error/>
              </Route>

          </Switch>
      </Router>
  );
}

export default App;


function Error() {
    return (
        <div className='App'>
           <div className='no-routes'>
               <h2>Sorry something went wrong !</h2>
               <p>Please try again or go to <Link to='/'>home page</Link></p>
           </div>
        </div>
    )
}
