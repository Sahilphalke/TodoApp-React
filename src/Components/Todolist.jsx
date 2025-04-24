import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css/Todolist.css";

function Todolist({ list, setlist, setedit }) {
  const sortedtodo = list.slice().sort((a, b) => a.done - b.done);

  function handleDelete(item) {
    setlist(list.filter((listItem) => listItem.name !== item.name));
    console.log("The item is deleted successfully", item);
  }

  function handleCheck(item) {
    setlist(
      sortedtodo.map((listItem) =>
        listItem.name === item.name
          ? { ...listItem, done: !listItem.done }
          : listItem
      )
    );
    console.log("The item is checked successfully", item);
  }

  function handleUpdate(item) {
    setedit(item);
    console.log("The item is set for editing", item);
  }

  const done = list.filter((item) => item.done).length;
  const totaltodo = list.length;

  return (
    <>
      <div
        className="container mt-5 w-25 d-flex justify-content-center overflow-scroll p-2 pb-2"
        style={{
          height: "130px",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          borderRadius: "10px",
          backgroundColor: "#AB4459",
        }}
      >
        <ul className="list-group w-75">
          {list.map((item) => (
            <li
              key={item.name}
              className="list-group-item rounded-3 border border-dark d-flex justify-content-between align-items-center p-0 m-2 w-100"
              style={
                item.done
                  ? {
                      backgroundColor: "#09122C",
                      textTransform: "uppercase",
                      fontStyle: "italic",
                      color: "white",
                      objectFit: "cover",
                    }
                  : null
              }
            >
              <h6 className="ps-2 pt-1 ">{item.name}</h6>
              <span>
                <button
                  className="btn btn-danger rounded-0 p-2"
                  onClick={() => handleDelete(item)}
                >
                  <i className="fa-solid fa-trash text-dark"></i>
                </button>
                <button
                  className="btn btn-success rounded-0 p-2"
                  onClick={() => handleCheck(item)}
                >
                  <i className="fa-solid fa-check"></i>
                </button>
                <button
                  className="btn btn-warning rounded-0 p-2"
                  onClick={() => handleUpdate(item)}
                >
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center mt-3">
        <h6>
          Total Items Check : <span className="text-success">{done}</span>
        </h6>
      </div>
    </>
  );
}

export default Todolist;
