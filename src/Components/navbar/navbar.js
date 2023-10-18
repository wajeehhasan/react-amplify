import { Routes, Route, NavLink } from "react-router-dom";
import Loginpage from "../loginpage/loginpage";
import Listpage from "../listpage/listpage";
import Notfound from "../notfound/notfound";
import React from "react";
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/notfound">About</NavLink>
            </li>
            <li>
              <NavLink to="/listall">Products</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
