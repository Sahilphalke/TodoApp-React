import React, { useState } from "react";
import Form from "./Form";
import Todolist from "./Todolist";
import Navbar from "./Navbar";

function Todo() {
  const [list, setlist] = useState([]);
  const [submit, setsubmit] = useState(true);
  const [edit, setedit] = useState("");
  return (
    <div>
      <Navbar />
      <Form
        list={list}
        setlist={setlist}
        submit={submit}
        edit={edit}
        setedit={setedit}
        setsubmit={setsubmit}
      />
      <Todolist list={list} setlist={setlist} edit={edit} setedit={setedit} />
    </div>
  );
}

export default Todo;

<Form />;
