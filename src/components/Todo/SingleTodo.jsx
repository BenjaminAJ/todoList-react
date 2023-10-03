import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleTodo = () => {
  const { id } = useParams();

  const { todos } = useSelector((state) => state.todo);
  const singleTodo = todos.filter((todo, i) => {
    return i == id;
  });
  if (singleTodo.length === 0) {
    // Todo not found
    return <div>Todo not found</div>;
  }

  const { title, checked } = singleTodo[0];

  return (
    <>
      <div className="container mt-5">
        <h2>{title}</h2>
        <p className="mb-3">
          <strong>Status:</strong>{" "}
          <span
            className={`badge ${
              checked ? "bg-success" : "bg-danger"
            } text-light`}
          >
            {checked ? "Completed" : "Incomplete"}
          </span>
        </p>
        <div className="mb-3">
          <button className="btn btn-primary me-2">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </>
  );
};

export default SingleTodo;
