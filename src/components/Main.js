import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Book } from "./Book";
import { useAppContext } from "./Store";

export const Main = () => {
  const store = useAppContext();

  return (
    
      <div>
        {store.items.map((item) => {
         return <Book key={item.id} item={item} />
        })}
      </div>
    
  );
};
