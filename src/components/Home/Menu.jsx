import React from "react";
import { menuItem } from "../../components/data.js";
import "./Menu.css";

function Menu({ handleMenuItemClicked }) {
  return (
    <nav>
      <ul>
        {menuItem.map(({ label, id }) => (
          <li
            className="images"
            key={id}
            id={label}
            onClick={handleMenuItemClicked}
          >
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
