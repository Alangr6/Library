import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "./Store";

export const BookView = () => {
  const params = useParams();
  
  const [item, setItem] = useState({});
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const store = useAppContext();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "author":
        setAuthor(value);
        break;

      case "intro":
        setIntro(value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(value);
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  function handleUpdate() {
    store.updateItem(item.id, title, author, review, intro);
    item.title = title;
    item.author = author;
    item.review = review;
    item.intro = intro;
    item.completed = completed;

    setEdit(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    store.updateItem(item.id, title);
    setEdit(false);
  }

  return (
    <div className="register-book">
      {edit ? (
        <form onSubmit={handleSubmit} className="todoUpdateForm">
          <label className="form-label mb-3 mt-3">title</label>
          <input
            className="form-control"
            name="title"
            type="text"
            value={title}
            onChange={handleChange}
          />
          <label className="form-label mb-3 mt-3">author</label>
          <input
            className="form-control"
            name="author"
            type="text"
            value={author}
            onChange={handleChange}
          />
          <label className="form-label mt-3 mb-3">review</label>

          <input
            className="form-control"
            name="review"
            type="text"
            value={review}
            onChange={handleChange}
          />
          <label className="form-label mt-3 mb-3">intro</label>

          <input
            className="form-control"
            name="intro"
            type="text"
            value={intro}
            onChange={handleChange}
          />
          <div>
            <label className="form-label mt-3 mb-3">Completed</label>
            <input
              name="completed"
              type="checkbox"
              value={completed}
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-primary" onClick={handleUpdate}>
            Update
          </button>
        </form>
      ) : (
        <div>
          <h1 className="form-label"> {item.title}</h1>
          <small className="form-label">{item.author}</small>
          <p className="form-label">{item.intro}</p>
          <p className="form-label">{item.review}</p>
          <p className="form-label">
            {" "}
            {item.completed == false ? "sin leer" : "leido"}
          </p>

          <hr></hr>

          <button className="btn btn-primary" onClick={() => setEdit(true)}>
            Editar
          </button>
        </div>
      )}
    </div>
  );
};
