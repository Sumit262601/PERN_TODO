import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
    const [ description, setDescription] = useState(todo.description);

    const updateDescription = async e => {
        e.preventDefault();

        try {
            const body = { description };
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,
                {
                    method: "PUT",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            );

            window.location ="/";
            console.log(response);

        } catch (error) {
            console.error(error.message);
        }
    }

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

        {/* { id = id10; } */}
      <div
        className="modal fade"
        id={`id${todo.todo_id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Todo
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setDescription(todo.description)}
              ></button>
            </div>
            <div className="modal-body">
                <input type="text" className="form-control" value={description} 
                    onChange={e => setDescription(e.target.value)}
                />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success"
                onClick={e => updateDescription(e)}
              >
                Update
              </button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
