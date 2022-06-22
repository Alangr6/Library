import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "./Store";

export const BookView = () => {
  const params = useParams();
  const [item, setItem] = useState({});
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");

  const store = useAppContext();

  function handleChange(e) {
    setValue(e.target.value);
  }

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  function handleUpdate() {
    store.updateItem(item.id, value);
    item.title = value;
    setEdit(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    store.updateItem(item.id, value);
    setEdit(false);
  }

  return (
    <div className="register-book">
      {edit ? (
        <form onSubmit={handleSubmit} className="todoUpdateForm">
          <input
            className="form-control"
            type="text"
            value={value}
            onChange={handleChange}
          />
          <button className="button" onClick={handleUpdate}>
            Update
          </button>
        </form>
      ) : (
        <div>
          <h1> {item.title}</h1>
          <small>{item.author}</small>
          <p>{item.intro}</p>
          <input type="checkbox" />
          {item.completed ? "sin leer" : "leido"}
          <p>{item.review}</p>

          <hr></hr>

          <button className="btn btn-primary" onClick={() => setEdit(true)}>
            Editar
          </button>
        </div>
      )}
    </div>
  );
};
