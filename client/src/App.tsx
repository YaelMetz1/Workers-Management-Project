

//////עמוד שכרגע לא מגיעים אליו!!!!!!!

import React, {useState} from "react"
import {UserContext} from "./context/UserContext"
import LoginPage from "./pages/loginPage/LoginPage"
import User from "./types/User";
import useCustomNavigate  from './hooks/UseNavigate';


export default function App() {
  const us:User={
    id: 2,
    name: "ARIs",
    email: "ari",
    password: "ari",
    phoneNumber: "ari",
    jobTitle : "ari",
    salary: 500000,
    isAdmin: false
}
const navigate = useCustomNavigate ();
//navigate("/Login");
    return (
      // <UserContext.Provider value={us}>
        <h1>hello {us.name}</h1>
      // </UserContext.Provider>
    );
  }


