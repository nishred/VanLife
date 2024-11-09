import React from "react";

const USER = {
  email: "dummy@gmail.com",
  password: "dummy",
};

const initialState = {
  user: null,
  isAuthenticated: false

}

function reducer(state, action) {
  switch (action.type) {

    case "login":
      return { ...state, user: action.payload, isAuthenticated: USER };

    case "logout":
      return { ...state, user: null, isAuthenticated: false };



    default:
      throw new Error("Invalid action");
  }
}

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [{ user, isAuthenticated}, dispatch] = React.useReducer(
    reducer,
    initialState
  );

  async function login(email, password) {

    // set loading to true

    try {
      //make a backend post req

      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 5000);
      });
    } catch (err) {
      //set the error state
    } finally {
      // is loading to false
    }

    if (email === USER.email && password === USER.password)
      dispatch({ type: "login" });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated,login,logout}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const authContext = React.useContext(AuthContext);

  return authContext;
}

export { AuthProvider, useAuth };
