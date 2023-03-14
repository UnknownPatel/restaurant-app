import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import '../Menu1.css'

function ItemCard1({ name, price, itemId }) {

    const [isFavourite, setFavourite] = useState(false);


  return (
    <div className='itemCard' id={itemId}>
        <div className={`isfavourite ${isFavourite ? "active" : ""}`}
            onClick = {() => setFavourite(!isFavourite)}
        >
            <FavoriteIcon />
        </div>
      <div className="imgBox"></div>
      <div className="itemContent">
        <h3 className='itemName'>{name}</h3>
        <div className="bottom">
            <div className='ratings'>
                <h3 className="price"><span>$ </span>{price}</h3>
            </div>
            <i className="addtoCart">
                <AddIcon /> 
            </i>
        </div>
      </div>
    </div>
  )
}

export default ItemCard1
