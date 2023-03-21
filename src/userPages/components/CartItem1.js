import React, { useEffect, useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import '../Menu1.css';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';
let cartItems = [];

function CartItem1({name, price, itemId}) {

  const [qty, setQty] = useState(1);
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));
  const [{cart, total }, dispatch] = useStateValue();

  useEffect(() => {
    cartItems = cart;
    setItemPrice(parseInt(qty) * parseFloat(price));
  }, [qty]);

  const updateQuantity = (action, id) => {
    if(action == 'add'){
      setQty(qty + 1);
    }else{
      if(qty == 1){
        cartItems.pop(id);
        dispatch({
          type: actionType.SET_CART,
          cart: cartItems,
        });
      }else{
        setQty(qty - 1);
      }
    }
  }

  return (
    <div className='cartItem'>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {qty}</span>
          <div className="quantity">
              <RemoveIcon className='itemRemove' onClick={() => updateQuantity("remove", itemId)}/>

              <AddIcon className='itemAdd' onClick={() => updateQuantity("add", itemId)}/>
          </div>
        </div>
      </div>

      <p className="itemPrice">
        <span className="dolorSign">$</span>{" "}
        <span className="itemPriceValue">{itemPrice}</span>
      </p>
    </div>
  )
}

export default CartItem1
