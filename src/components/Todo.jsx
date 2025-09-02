import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

function Todo({ todo }) {
  return (
    <div className="todo">
      <div>
        <input type="checkbox" />
        <p>{todo}</p>
      </div>
      <div>
        <button>
          <BiEdit />
        </button>
        <button>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default Todo;
