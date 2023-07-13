import React from "react";

type Props = {};

function Menu({}: Props) {
  return (
    <div className="grid h-screen bg-white text-black place-items-center">
      <ul>
        <li className="menu">About</li>
        <li className="menu">Projects</li>
        <li className="menu">Gallery</li>
        <li className="menu">Contacts</li>
      </ul>
    </div>
  );
}

export default Menu;
