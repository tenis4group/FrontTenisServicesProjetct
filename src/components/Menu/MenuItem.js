import React from "react";
import { NavLink } from "react-router-dom";

const list = [
  { name: "Aktualności", path: "./news" },
  { name: "O Nas", path: "./aboutus" },
  { name: "Galeria", path: "./gallery" },
  { name: "Zajęcia", path: "./activities" },
  { name: "Opinie", path: "./opinions" },
  { name: "Kontakt", path: "./contact" },
  { name: "Zaloguj się", path: "./login" },
  { name: "Załóż konto", path: "./singup" },
];

const MenuItem = () => {
  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path}>{item.name}</NavLink>
    </li>
  ));

  return <ul>{menu}</ul>;
};

export default MenuItem;
