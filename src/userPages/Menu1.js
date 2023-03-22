import React, { useEffect, useState } from 'react';

import './Menu1.css';

import NavbarRes from './components/NavbarRes';
import MenuCard1 from './components/MenuCard1';
import {MenuItems, Items} from './components/data1'
import ItemCard1 from './components/ItemCard1';
import CartItem1 from './components/CartItem1';
import SubMenuContainer1 from './components/SubMenuContainer1';
import { useStateValue } from './components/StateProvider';


var total ;

function Menu1() {

  const [isMainData, setMainData] = useState(
    Items.filter(element => element.itemId === 'soup01')
  );

  const [{cart, total}, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    
    const menuCard = document.querySelector('.rowContainer').querySelectorAll('.rowMenuCard');

    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach(n => n.addEventListener('click', setMenuCardActive));
    
    
    // let sum = cart.reduce(function(accumulator, item) {
    //   console.log(item.price+"PRICE")
    //   return accumulator + item.qty * item.price;
    // },0);
    // setTotalPrice(sum);

    let price = 0;
    for (let index = 0;index < cart.length;index++){
      price += cart[index].price
    }
    console.log(price);
    setTotalPrice(price);
   
    // setTotalPrice((cart.reduce((a,v) => a = a + v.price, 0));
    //data.reduce((total, currentValue) => total = total + currentValue.prix,0);

    //
    // let totalPrice = cart.reduce(function (accumulator, item) {
    //   return accumulator + item.qty * item.price;
    // }, 0);
    // setTot(totalPrice);
    // console.log(tot);
  }, [isMainData, cart, total, totalPrice]);

  const setData = (itemId) => {
    setMainData(Items.filter(element => element.itemId === itemId))
  }

  return (
    <>
    <p id="head">Gordhan Thal <br />Lorem ipsum dolor sit,
    <br /> amet consectetur adipisicing elit. Eaque ipsa debitis voluptate,<br /> labore sint tenetur tempora officiis! Tempore, odio exercitationem?</p>
    < NavbarRes />
    {/* < AddNav /> */}
    <div className='dishContainer'>
      <div className="menuCard"></div>
      <div className="rowContainer">
        {
          MenuItems && MenuItems.map(data => (
            <div key={data.id} onClick = {() => setData(data.itemId)}>
              <MenuCard1 name={data.name}
              isActive = {data.id === 1 ? true : false }/>
            </div>
          ) )
        }
        
      </div>
      <div className='dishitemContainer'>
        {
          isMainData && isMainData.map(data => (
            <ItemCard1 key={data.id} itemId={data.id} name={data.name} price={data.price}/>
          ))
        }
        
      </div>
    </div>
    <div className='rightMenu'>
    {!cart ? (
            <div className="addSomeItem">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                alt=""
                className="emptyCart"
              />
            </div>
          ) : (
            <div className="cartCheckOutContianer">
              <div className="cartContainer">
                <SubMenuContainer1 />

                <div className="cartItems">
                  {cart &&
                    cart.map((data) => (
                      <CartItem1
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        qty={"4"}
                        price={data.price}
                      />
                    ))}
            </div>
          </div>
          <div className="totalSection">
            <h3>Total</h3>
            <p><span>$ </span> {totalPrice}
            </p>
          </div>
          <button className="checkOut">Check Out</button>
        </div>
     ) }
    </div>
    </>
  );
}

export default Menu1;
