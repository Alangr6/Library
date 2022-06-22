import React from "react";
import { NavLink } from "react-router-dom";

export const Book = ({item}) => {
  return (
    <div>
      <NavLink to={`/view/${item.id}`}>
      <h1>{item.title}</h1>
      </NavLink>
      
    </div>
  );
};
