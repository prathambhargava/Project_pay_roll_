import React from 'react';
import './App.css';
import Home from "./Home";
import Companies from './Companies';
import About from './About';
import Dashboard from './Dashboard';
import { Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Popup from './Popup';


function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [user , setUser] = useState({name:"",password:""});
   let name,value;
  const handleInputs= (e) =>{
      name=e.target.name;
      value=e.target.value;

      setUser({...user,[name]:value})
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
     <div id="navbar">
     <ul>
     <li>
     <Link to="/" >Home</Link>
     </li>
     <li>
       <Link to="/about" >About</Link>
     </li>
    <li>
    <Link to="/companies" >Companies</Link>
    </li>
</ul>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/companies" component={Companies} />
    <Route exact path="/dashboard" component={Dashboard} />
    </div>
    <div>
    <input
      type="button"
      value="Sign up"
      style={{
        backgroundColor: "darkgoldenrod",
        color: 'white',
        borderRadius:5,
        border: "none",
        cursor: "pointer",
       
        padding: 10,
        fontsize: 16,
        position:'fixed',top:6,right:150,
     
      }}
      onClick={togglePopup}
    />
   
    {isOpen && <Popup
      content={<>
          <p style={{position:'fixed',top:100,right:55,font: "cursive",fontSize:30,}}>WELCOME TO PAY-ROLL</p>
       <p style={{position:'fixed',top:140,right:99,font: "cursive",fontSize:23,}}>COME HERE OFTEN!</p>
       <label for="uname"><p style={{position:'fixed',top:200,right:305,}}>Username:</p></label>
       <input type="text" placeholder="Enter Username" style={{position:'fixed',top:240,right:50, padding: 12,width: 300}} name="uname" value={user.name} onChange={handleInputs} required ></input>
       <br></br>
       <label for="psw"><p style={{position:'fixed',top:290,right:310,}}>Password:</p></label>
       <input type="password" style={{position:'fixed',top:330,right:50,padding: 12,width: 300}} placeholder="Enter Password" name="psw" value={user.password} onChange={handleInputs} value="hey2" required></input>
       <br></br>

       
        <button  style={{position:'fixed',top:440,right:160,backgroundColor: "orange",
        color: 'white',
        borderRadius:5,
        border: "none",
        cursor: "pointer",
       
        padding: 13,
        fontsize: 16, }}  >  <Link to="/Dashboard" >Enter Profile</Link></button>
        <input type="checkbox" id="rememberme" name="rem1" value="rem2" style={{position:'fixed',top:410,right:350,}}></input>
  <label for="rem1" style={{position:'fixed',top:407,right:248,}}>Remember Me</label><br></br>
      </>}
      handleClose={togglePopup}
    />}
    </div>
    
    </div>
   

  );
}

export default App; 
