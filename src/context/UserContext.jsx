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
    return localStorage.getItem("token") != undefined
      ? JSON.parse(localStorage.getItem("token"))
      : "";
    // if(localStorage.getItem("token")){
    //   console.log(localStorage.getItem("token"))
    // }else{
    //   console.log('not found')
    // }
    //   return ""
  }

  React.useEffect(()=>{
    const token = getUserFromLocalStorage()
    // setUser({...user,token})
  },[])

  const authHeader = {
      Authorization:`Bearer ` + getUserFromLocalStorage()
  }

  return (
    <userContext.Provider value={{ getUserFromLocalStorage, setUser, user ,authHeader}}>
      {props.children}
    </userContext.Provider>
  );
}
const UserState = () => useContext(userContext);
export { UserContext, UserState };
