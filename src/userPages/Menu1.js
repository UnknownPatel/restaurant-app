// import React from 'react'
// import food1 from '../img/food1.jpg';
// import food2 from '../img/food2.jpg';
// import food3 from '../img/food3.jpg';
// import food4 from '../img/food4.jpg';
// import Frame from 'react-frame-component';
// import Logo from './Logo';
// import Main from './Main';
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import { ProSidebarProvider } from 'react-pro-sidebar';
// import { Link } from 'react-router-dom';



// function Menu1() {
//   return (
          
//             <>
              
//     {/* <Frame>
//       <Logo />
//       </Frame>
//         <Frame name = "top"  >
//           <Main/>
//           </Frame>
//         <Frame name = "main"/>
//         <Frame name = "bottom"  /> */}
//     <ProSidebarProvider>
//     <Sidebar>
//   <Menu>
//     <SubMenu label="Charts">
//       <MenuItem> Pie charts </MenuItem>
//       <MenuItem> Line charts </MenuItem>
//     </SubMenu>
//     <MenuItem> Documentation </MenuItem>
//     <MenuItem> Calendar </MenuItem>
//   </Menu>
// </Sidebar>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, labore?</p>
// </ProSidebarProvider>

//         </>
    
  
//   )
// }

// export default Menu1

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Chip from '@material-ui/core/Chip';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
//   chip: {
//     margin: theme.spacing(0.5),
//   },
//   section1: {
//     margin: theme.spacing(3, 2),
//   },
//   section2: {
//     margin: theme.spacing(2),
//   },
//   section3: {
//     margin: theme.spacing(3, 1, 1),
//   },
// }));

// export default function MiddleDividers() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <div className={classes.section1}>
//         <Grid container alignItems="center">
//           <Grid item xs>
//             <Typography gutterBottom variant="h4">
//               Toothbrush
//             </Typography>
//           </Grid>
//           <Grid item>
//             <Typography gutterBottom variant="h6">
//               $4.50
//             </Typography>
//           </Grid>
//         </Grid>
//         <Typography color="textSecondary" variant="body2">
//           Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the
//           hall.
//         </Typography>
//       </div>
//       <Divider variant="middle" />
//       <div className={classes.section2}>
//         <Typography gutterBottom variant="body1">
//           Select type
//         </Typography>
//         <div>
//           <Chip className={classes.chip} label="Extra Soft" />
//           <Chip className={classes.chip} color="primary" label="Soft" />
//           <Chip className={classes.chip} label="Medium" />
//           <Chip className={classes.chip} label="Hard" />
//         </div>
//       </div>
//       <div className={classes.section3}>
//         <Button color="primary">Add to cart</Button>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Menu1.css';
// import NavbarRes from './components/NavbarRes';
import soup1 from '../img/soup1.jpg';
import soup2 from '../img/soup2.jpg';
import soup3 from '../img/soup3.jpg';
import main1 from '../img/main1.jpg';
import main2 from '../img/main2.jpg';
import main3 from '../img/main3.jpg';
import thali1 from '../img/thali1.jpg';
import thali2 from '../img/thali2.jpg';
import thali3 from '../img/thali3.jpg';
import NavbarRes from './components/NavbarRes';
import AddNav from './components/addNav';
import MenuCard1 from './components/MenuCard1';
import {MenuItems, Items} from './components/data1'
import ItemCard1 from './components/ItemCard1';
import CartItem1 from './components/CartItem1';
import SubMenuContainer1 from './components/SubMenuContainer1';
import { useStateValue } from './components/StateProvider';







function Menu1(props) {

  const [isMainData, setMainData] = useState(
    Items.filter(element => element.itemId === 'soup01')
  );

  const [{cart, total}, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const menuCards = document.querySelector('.rowContainer').querySelectorAll('.rowMenuCard');

    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCards.forEach(n => n.addEventListener('click', setMenuCardActive))
  }, [isMainData, cart, total, totalPrice]);

  const setData = (itemId) => {
    setMainData(Items.filter(element => element.itemId === itemId))
  }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//     display: 'flex',
//     height: 224,
//   },
//   tabs: {
//     borderRight: `1px solid ${theme.palette.divider}`,
//   },
// }));

// export default function VerticalTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };


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
                        imgSrc={data.imgSrc}
                        qty={"4"}
                        price={data.price}
                      />
                    ))}
      {/* {!cart ? (<div></div>) : ( 
      
        <div className="cartCheckOutContainer">
            <SubMenuContainer1 name={"Carts Items"}/>
          <div className="cartContainer">

            <div className="cartItems">
              {
                cart && cart.map(data => {
                  <CartItem1 
                  key = {data.id}
                  itemId = {data.id}
                  name={data.name}
                  price = {data.price}
              />
                })
              } */}
              
            </div>
          </div>
          <div className="totalSection">
            <h3>Total</h3>
            <p><span>$ </span> {total}
            </p>
          </div>
          <button className="checkOut">Check Out</button>
        </div>
     ) }
    </div>
    {/* <div className='addToCart'> abc</div> */}
    {/* <div className={classes.root} id="tab">
      <Tabs
        // variant="standard"
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="soups" {...a11yProps(0)} />
        <Tab label="Main course" {...a11yProps(1)} />
        <Tab label="Festive Special" {...a11yProps(2)} />
        <Tab label="Accompaniments" {...a11yProps(3)} />
        <Tab label="Fried Rice and Noodles" {...a11yProps(4)} />
        <Tab label="Thali " {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item " {...a11yProps(7)} />

      </Tabs>
      <TabPanel value={value} index={0}>
        <div class="container1">
        <img src={soup1} alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
          <button >Add</button>
        </div>  
        <div class="container1">
          <img src={soup2} alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
          <button >Add</button>
        </div>
        <div class="container1">
          <img src={soup3} alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
          <button >Add</button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div class="container1">
          <img src={main1} alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
          <button >Add</button>
        </div>  
        <div class="container1">
          <img src={main2} alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
          <button >Add</button>
        </div>
        <div class="container1">
          <img src={main3} alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
          <button >Add</button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, dolorum?</p>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, dolorum?</p>
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, dolorum?</p>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <div class="container1">
          <img src={thali1} alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
          <button >Add</button>
        </div>
        <div class="container1">
          <img src={thali2} alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
          <button >Add</button>
        </div>
        <div class="container1">
          <img src={thali3} alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
          <button >Add</button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, dolorum?</p>
      </TabPanel>
    </div> */}
    </>
  );
}

export default Menu1;
