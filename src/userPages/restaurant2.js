import React from 'react';
import Table1 from '../img/Table1.jpg';
import Table2 from '../img/Table2.jpg';
import Table3 from '../img/Table3.jpg';
import Table4 from '../img/Table4.jpg';
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import { app } from '../firebase';
import { useState } from 'react';


const firestore = getFirestore(app);
var confirmation = false;

function Restaurant2() {

  // const update1 = async() => {
  //   const docRef = doc(firestore, 'restaurant', 'JAVA+');
  //   await updateDoc(docRef, {
  //       Table1: true
  //   });
  // };
  // const update2 = async() => {
  //   const docRef = doc(firestore, 'restaurant', 'JAVA+');
  //   await updateDoc(docRef, {
  //       Table2: true
  //   });
  // };
  // const update3 = async() => {
  //   const docRef = doc(firestore, 'restaurant', 'JAVA+');
  //   await updateDoc(docRef, {
  //       Table3: true
  //   });
  // };
  // const update4 = async() => {
  //   const docRef = doc(firestore, 'restaurant', 'JAVA+');
  //   await updateDoc(docRef, {
  //       Table4: true
  //   });
  // };

  const [date, setDate] = useState();

  const [colorState1, changeState1] = useState("");
  const [colorState2, changeState2] = useState("");
  const [colorState3, changeState3] = useState("");
  const [colorState4, changeState4] = useState("");

  const toggleActive1 = (color) => {
    if(confirmation == false){
      changeState1("gray")
      setTimeout(() => {
        changeState1("")
      } ,9000)
    }
    else {
      changeState1("green")
    }
  }; 

  const toggleActive2 = (color) => {
    if(confirmation == false){
      changeState2("gray")
      setTimeout(() => {
        changeState2("")
      } ,9000)
    }
    else {
      changeState2("green")
    }
  }; 

  const toggleActive3 = (color) => {
    if(confirmation == false){
      changeState3("gray")
      setTimeout(() => {
        changeState3("")
      } ,9000)
    }
    else {
      changeState3("green")
    }
  }; 

  const toggleActive4 = (color) => {
    if(confirmation == false){
      changeState4("gray")
      setTimeout(() => {
        changeState4("")
      } ,9000)
    }
    else {
      changeState4("green")
    }
  }; 


  const confirm = () => {
    if(colorState1 == 'gray'){
      changeState1("green")
      setInterval(() => {
        changeState1("green")
      }, 100);
    }
    else if ( colorState2 == 'gray'){
      changeState2("green")
      setInterval(() => {
        changeState2("green")
      }, 100);
    }
    else if( colorState3 == 'gray') {
      changeState3("green")
      setInterval(() => {
        changeState3("green")
      }, 100);
    }
    else if( colorState4 == 'gray') {
      changeState4("green")
      setInterval(() => {
        changeState4("green")
      }, 100);
    }
  };

  console.log("Date:", date);

  return (
    <div>
     <h1>JAVA+</h1>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut!</p>
     {/* <div className='container'>
      <div className='img1'>
        <h3>Table 1</h3>
        <img src={Table1}></img><br />
        <button className='bookbtn' onClick={update1}>Book</button>
      </div>
      <div className='img2'>
        <h3>Table 2</h3>
        <img src={Table2}></img><br />
        <button className='bookbtn' onClick={update2}>Book</button>
      </div>
      <div className='img3'>
        <h3>Table 3</h3>
        <img src={Table3}></img><br />
        <button className='bookbtn' onClick={update3}>Book</button>
      </div>
      <div className='img4'>
        <h3>Table 1</h3>
        <img src={Table4}></img><br />
        <button className='bookbtn' onClick={update4}>Book</button>
      </div>
      <div>
      <a href="/">
            <button>Back</button>
            </a>
      </div>
      </div> */}

<div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, auto)',
          }}>
            <label>Person: </label>
            <select name='person' id='person'>
              <option value='1' selected>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
            </select>

            <label>Date:</label>
            <input type="date" onChange={e=>setDate(e.target.value)} />          

            <label>Time:</label>
            <select name='time' id='time'>
              <option value='11AM'>11AM</option>
              <option value='12PM'>12PM</option>
              <option value='1PM'>1PM</option>
              <option value='2PM'>2PM</option>
              <option value='3PM'>3PM</option>
              <option value='4PM'>4PM</option>
              <option value='5PM'>5PM</option>
              <option value='6PM'>6PM</option>
              <option value='7PM'>7PM</option>
            </select>
          </div>
      </div>

          <React.Fragment >
          <div className='grid'>
            <div
              style={{
                // width: '100px',
                height: '100px',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, auto)',
                backgroundColor: colorState1,
                cursor: 'pointer',
              }}
              onClick={() => toggleActive1()}
            >
             <div className='abc'></div>
             <div className='abc'></div>
            </div>

            <div
              style={{
                // width: '100px',
                height: '100px',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, auto)',
                backgroundColor: colorState2,
                cursor: 'pointer',
              }}
              onClick={() => toggleActive2()}
            >
             <div className='abc2'></div>
             <div className='abc2'></div>
             <div className='abc2'></div>
             <div className='abc2'></div>
            </div>

            <div
              style={{
                // width: '100px',
                height: '100px',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, auto)',
                backgroundColor: colorState3,
                cursor: 'pointer',
              }}
              onClick={() => toggleActive3()}
            >
             <div className='abc3'></div>
             <div className='abc3'></div>
             <div className='abc3'></div>
             <div className='abc3'></div>
             <div className='abc3'></div>
             <div className='abc3'></div>
            </div>

            <div
              style={{
                // width: '100px',
                height: '100px',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, auto)',
                backgroundColor: colorState4,
                cursor: 'pointer',
              }}
              onClick={() => toggleActive4()}
            >
             <div className='abc4'></div>
             <div className='abc4'></div>
             <div className='abc4'></div>
             <div className='abc4'></div>
             <div className='abc4'></div>
             <div className='abc4'></div>
             <div className='abc4'></div>
             <div className='abc4'></div>
            </div>


          </div>
          <br></br>
          <br></br>
          <br></br>
          <button onClick={confirm}>Confirm</button>
          <br></br>
          <br></br>
          <div>
            <a href="/">
              <button>Back</button>
            </a>
          </div>
          </React.Fragment>



    </div>
  )
}

export default Restaurant2
