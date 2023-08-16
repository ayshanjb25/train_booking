import React, { createContext, useContext, useEffect, useReducer } from "react";

const INITIAL_STATE ={
    user : JSON.parse(localStorage.getItem("user")) || null,
    loading:false,
    error : null,
};

export const RegisterContext = createContext(INITIAL_STATE);

const RegisterReducer = (state, action) =>{
    switch (action.type) {
        case 'REGISTER_SUCCESS':
          return { ...state, user: action.payload, error: null };
        case 'REGISTER_FAILURE':
          return { ...state, user: null, error: action.payload };
        default:
          return state;
      }
}



export const RegisterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(RegisterReducer, { user: null, error: null });

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(state.user))
    },[state.user])
  
    return (
      <RegisterContext.Provider value={{ state, dispatch }}>
        {children}
      </RegisterContext.Provider>
    );
  };


  export const useRegister = () => {
    return useContext(RegisterContext);
  };