import React from 'react';
import "./user.css";
import Table1 from '../img/Table1.jpg';
import Table2 from '../img/Table2.jpg';
import Table3 from '../img/Table3.jpg';
import Table4 from '../img/Table4.jpg';
import NavBar from './navbar';

// import { useState } from 'react';
// import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';


function User() {

  // const [bookTable, setBookTable] = useState("");

  return (
    <div>
       <NavBar/>
      {/* <h1>Book Your Table</h1> */}
      <div className="container">
          <div className=''>
            <h3>Gordhan Thal</h3>
            <a href="/restaurant1">  
            <img src={Table1}></img>
            </a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rerum fuga aut.</p>
            {/* <a href="/restaurant1">
            <button>Book Table</button>
            </a> */}
          </div>
          <div>
            <h3>JAVA+</h3>
            <a href="/restaurant2">
            <img src={Table2}></img>
            </a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rerum fuga aut.</p> 
            {/* <a href="/restaurant2">
            <button>Book Table</button>
            </a> */}
          </div>
          <div>
            <h3>Royal</h3>
            <a href="/restaurant3">
            <img src={Table3}></img>
            </a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rerum fuga aut.</p>
            {/* <a href="/restaurant3">
            <button>Book Table</button>
            </a> */}
          </div>
          <div>
            <h3>Swati Snacks</h3>
            <a href="/restaurant4">
            <img src={Table4}></img>
            </a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rerum fuga aut.</p>
            {/* <a href="/restaurant4">
            <button>Book Table</button>
            </a> */}
          </div>
      </div>
    </div>
  )
}

export default User;
