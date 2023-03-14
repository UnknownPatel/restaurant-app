import React from 'react'
// import './components/NavbarRes.css';
import './addNav.css';
import {Link} from 'react-router-dom';
import { BsFillBagFill } from "react-icons/bs";


const AddNav = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='nav__container'>
          <div className='nav__left'>
            
          </div>
          <div className='nav__right'>
            <Link to="/cart">
                <div className='basket'>
                    <BsFillBagFill className='cart_icon'/>
                    <span>4</span>
                </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNav
