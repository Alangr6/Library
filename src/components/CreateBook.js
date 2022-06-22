import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "./Store";

export const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  //const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const store = useAppContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newBook = {
      id: Date.now(),
      title,
      author,
      //cover,
      intro,
      completed,
      review,
    };

    store.createItem(newBook);
    navigate("/");
  }

  /*  function handleOnChangeFile(e) {
    const element = e.target;
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      console.log("RESULT", reader.result);
      setCover(reader.result.toString());
    };
    reader.readAsDataURL(file);

  } */

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
      case "author":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(value);
        break;

      default:
        break;
    }
  }
  return (
    <div className="register-book">
      <form onSubmit={handleSubmit}>
        <label className="form-label mt-3">Title</label>

        <div className="mb-3 ">
          <input
            className="form-control"
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
          />
        </div>
        <label className="form-label">author</label>
        <div className="mb-3 ">
          <input
            type="text"
            name="author"
            className="form-control"
            onChange={handleChange}
            value={author}
          />
        </div>

        {/*   <label>cover</label>
        <input type="file" name="cover" onChange={handleOnChangeFile} value={cover} />
        <label>{!! cover ? <img src={cover} width='200' alt="200"></img>: ''}</label>
        */}

        <label className="form-label">intro</label>

        <div className="mb-3 ">
          <input
            className="form-control"
            type="text"
            name="intro"
            onChange={handleChange}
            value={intro}
          />
        </div>

        <label className="form-label">review</label>

        <div className="mb-3 ">
          <input
            className="form-control"
            type="text"
            name="review"
            onChange={handleChange}
            value={review}
          />
        </div>

        <div>
          <label className="form-label">completed</label>

          <input
            className="mb-3"
            type="checkbox"
            name="completed"
            onChange={handleChange}
            value={completed}
          />
        </div>

        <input
          className="btn btn-primary"
          type="submit"
          value={"register book"}
        />
      </form>
    </div>
  );
};
