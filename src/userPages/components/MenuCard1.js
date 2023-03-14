import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from 'react'
import '../Menu1.css';


function MenuCard1({name, isActive}) {
  return (
    <div className={`rowMenuCard ${isActive ? `active` : ``}`}>
      <h3>{name}</h3>
      <i className="loadMenu">
        <ChevronRightIcon />
      </i>
    </div>
  )
}

export default MenuCard1
