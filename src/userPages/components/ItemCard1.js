import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState } from 'react'
import '../Menu1.css'
import { Items } from './data1';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';
let cartData = [];

function ItemCard1({ name, price, itemId }) {

    const [isFavourite, setFavourite] = useState(false);

    const [isCart, setCart] = useState(null);
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
      if(isCart){
        cartData.push(isCart)
        dispatch({
          type: actionType.SET_CART,
          cart: cartData,
        })
      }
    }, [isCart]);


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
            <i className="addtoCart" onClick={() => setCart(Items.find(n => n.id === itemId))}>
                <AddIcon /> 
            </i>
        </div>
      </div>
    </div>
  )
}

export default ItemCard1
