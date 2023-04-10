
import { useState } from 'react';
import './App.css';
import Addusers from './Components/Addusers';
import Usercomponents from './Components/Usercomponents';
import {  Route, Switch } from 'react-router-dom';
import { data } from './Components/Data/data';
import Nopage from './Components/Nopage';
import StudentDetails from './Components/StudentDetails';
import Editusers from './Components/Editusers';

function App() {
  const [user,setuser]=useState(data)  
  return (
    <div className="App"> 

    <Switch>

      <Route exact path="/">
      <Usercomponents
      user={user} setuser={setuser}/> 
      </Route>

      <Route path="/add/user">
      <Addusers
      user={user} setuser={setuser}/>  
      </Route>

      <Route path="/edit/:id">
      <Editusers
      user={user} setuser={setuser}/>  
      </Route>

      <Route path = "/user/:id">      
      <StudentDetails user={user}/>
      </Route>

      {/* <Route path = "/studentsrecords">      
      <Redirect path = "/"/>
      </Route> */}

      <Route path="**">
      <Nopage/>     
      </Route>

      
      
      
      
      
      </Switch>     
      
    </div>
  );
}

export default App;
