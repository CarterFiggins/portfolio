import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="fig-sage.svg" alt="fig code"></img>
      <div className="nav-bar">
        <NavLink className="header-link" activeClassName="is-active" to="/home">
          Home
        </NavLink>
        <NavLink className="header-link" activeClassName="is-active" to="/work">
          React Work
        </NavLink>
        <NavLink className="header-link" activeClassName="is-active" to="/draw">
          Recursive Art
        </NavLink>
        <NavLink
          className="header-link"
          activeClassName="is-active"
          to="/games"
        >
          Games
        </NavLink>
        <NavLink
          className="header-link"
          activeClassName="is-active"
          to="/learn"
        >
          Code Learning
        </NavLink>
      </div>
    </div>
  );
}
