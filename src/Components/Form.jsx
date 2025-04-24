import { useState, useEffect } from "react";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Form({ list, setlist, submit, setsubmit, setedit, edit }) {
  const [name, setName] = useState(edit ? edit.name : "");
  const [done, setDone] = useState(edit ? edit.done : false);

  useEffect(() => {
    if (edit) {
      setName(edit.name);
      setDone(edit.done);
      setsubmit(false);
    } else {
      setsubmit(true);
    }
  }, [edit]);

  function handleEvent(e) {
    e.preventDefault();
    if (!name) {
      return;
    }
    const todo = { name, done };
    if (edit) {
      setlist(
        list.map((item) =>
          item.name === edit.name
            ? { ...item, name: todo.name, done: todo.done }
            : item
        )
      );
      setedit(null);
    } else {
      setlist([...list, todo]);
    }
    setName("");
    setDone(false);
    setsubmit(true);
  }

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center mt-5 p-0"
        style={{ width: "30%" }}
      >
        <form action="" className="w-100" onSubmit={handleEvent}>
          <div className="input-group">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="form-control"
              placeholder="Enter Name"
            />
            <button className="btn w-25 btn-info">
              {submit ? (
                <>
                  <div className="d-flex justify-content-evenly align-items-center ">
                    ADD
                    <i className="fa-solid fa-user-plus"></i>
                  </div>
                </>
              ) : (
                <>
                  <div className="d-flex justify-content-around align-items-center ">
                    UPDATE <i className="fa-solid fa-pen-to-square"></i>
                  </div>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
