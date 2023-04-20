import React, { useState , Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from './components/Users/UsersList';
import UserList from "./components/Users/UsersList";


function App() {
  const [isLoggedIn, setISLoggedIn ]= useState(false);

  const LoginHandler = (email, password ) => {
    setIsLoggedIn{true};
  };

  const logoutHandler =() => {
    setIsLoggedIn (false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated= {isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler}/>}
      </main>  
    </React.Fragment>
    );
  }
export default App;
