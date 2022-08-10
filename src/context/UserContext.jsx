import React, { useContext } from "react";

const userContext = React.createContext();

function UserContext(props) {
  const [user, setUser] = React.useState({
    id: "",
    role: "",
    username: "",
    token: "",
    profile_picture: "",
  });
  function getUserFromLocalStorage() {
    return localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : "";
   
  }

  React.useEffect(()=>{
    const token = getUserFromLocalStorage()
    console.log(token)
    setUser({...user,token})
  },[])

  const authHeader = {
    headers:{
      Authorization:`Bearer ` + getUserFromLocalStorage()
    }
  }

  return (
    <userContext.Provider value={{ getUserFromLocalStorage, setUser, user ,authHeader}}>
      {props.children}
    </userContext.Provider>
  );
}
const UserState = () => useContext(userContext);
export { UserContext, UserState };
