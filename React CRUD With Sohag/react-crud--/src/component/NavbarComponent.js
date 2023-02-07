import * as React from "react";
import { Link } from "react-router-dom";

// import your route components too

export default function NavbarComponent() {
  return (
      <nav>
        <ul>
            <li>
            <Link  to="/save" >Add Users</Link>
            </li>
            <li>
            <Link  to="/list" >Users List</Link>
            </li>
        </ul>
    </nav>
  )
}
