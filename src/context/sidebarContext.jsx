import { createContext, useReducer } from "react";
import reducer from "../reducer/sidebarReducer";
import propTypes from "prop-types";

const initialState = { isSidebarOpen: false };
export const Sidebarcontext = createContext({});

export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  return (
    <Sidebarcontext.Provider value={{ ...state, toggleSidebar }}>
      {children}
    </Sidebarcontext.Provider>
  );
};

SidebarProvider.propTypes = {
  children: propTypes.node,
};
