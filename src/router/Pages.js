import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "../components/Main";
import { CreateBook } from "../components/CreateBook";

import { Navbar } from "./Navbar";
import { Store } from "../components/Store";
import { BookView } from "../components/BookView";

export const Pages = () => {
  return (
    <Store>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/create" element={<CreateBook />}></Route>
          <Route path="/view/:bookId" element={<BookView/>} ></Route>
        </Routes>
      </BrowserRouter>
    </Store>
  );
};
