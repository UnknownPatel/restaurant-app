// import 
import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
// import Signin from './pages/signin';
// import SignupUser from './pages/signup';
import User from './user/user';
import Restaurant1 from './userPages/restaurant1';
import Restaurant2 from './userPages/restaurant2';
import Restaurant3 from './userPages/restaurant3';
import Restaurant4 from './userPages/restaurant4';
import UserHome from './user/userHome';
import Menu1 from './userPages/Menu1';
import Cart from './userPages/cart';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<User/>}/>
        <Route path='/restaurant1' element={<Restaurant1/>}/>
        <Route path='/restaurant2' element={<Restaurant2/>}/>
        <Route path='/restaurant3' element={<Restaurant3/>}/>
        <Route path='/restaurant4' element={<Restaurant4/>}/>
      </Routes>
      </BrowserRouter> */}
      {/* <div><SignupUser /></div><hr></hr>
      <div><Signin /></div> */}
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<UserHome />} />
        <Route path='/user' element={<User/>} />
        <Route path='/restaurant1' element={<Restaurant1/>}/>
        <Route path='/restaurant2' element={<Restaurant2/>}/>
        <Route path='/restaurant3' element={<Restaurant3/>}/>
        <Route path='/restaurant4' element={<Restaurant4/>}/>
        <Route path="/Menu1" element={<Menu1 />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./Home";
// import Login from "./login";
// import SignUp from "./SignUp";
// import { AuthProvider } from "./auth";
// // import PrivateRoute from "./privateRoute";
// import PrivateRoute from './privateRoute';


// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <div>
//           <PrivateRoute exact path="/" component={Home} />
//           <Route exact path="/login" component={Login} />
//           <Route exact path="/signup" component={SignUp} />
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;
