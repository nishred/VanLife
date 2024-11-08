import React from "react";

const USER = {

email : "dummy@gmail.com",
password : "dummy"

}

const initialState = {


   user : null,
   isAuthenticated : false


}


function reducer(state,action)
{

    switch(action.type)
    {

      case "login" :

      return {...state,user : action.payload,isAuthenticated : USER}

      case "logout" :

      return {...state,user : null,isAuthenticated :false}


      default :

      throw new Error("Invalid action")


    }



}


const AuthContext = React.createContext()


const AuthProvider = ({children}) => {


  const [{user,isAuthenticated},dispatch] = React.useReducer(reducer,initialState)


   function login(email,password)
   {

      if(email === USER.email && password === USER.password)
        dispatch({type : "login"})

   }


   function logout()
   {
      dispatch({type : "logout"})

   }



   return (

     <AuthContext.Provider value={{user,isAuthenticated,login,logout}}>
     {children}
     </AuthContext.Provider>


   )

}


function useAuth()
{

  const authContext = React.useContext(AuthContext)

  return authContext

}


export {

   AuthProvider,useAuth 

}