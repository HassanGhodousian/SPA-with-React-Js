import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function EditForm({ post }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  var [errorTitle, setErrorTitle] = useState(null);
  const [errorBody, setErrorBody] = useState(null);

  const handelEvent = (e) => {
    e.preventDefault();

    let setAccess = true;
    if (title == null || title.length < 8) {
      setErrorTitle("عنوان باید بیشتر از ۸ کاراکتر داشته باشد");
      setAccess = false;
    } else {
      setErrorTitle(null);
    }
    if (body == null || body.length < 8) {
      setErrorBody("محتوا باید بیشتر از ۸ کاراکتر داشته باشد");
      setAccess = false;
    } else {
      setErrorBody(null);
    }

    if (setAccess) {
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: "PUT",
        body: JSON.stringify({
          title,
          body,
          userId: 1,
          id: post.id,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
          setError(null);

          Swal.fire("Updated!", "You clicked the button!", "success");
        })
        .catch((err) => {
          setLoading(false);

          setError(err.message);
        });
    }
  };
  useEffect(() => {
    setTitle(post.title);
    setBody(post.body);
  }, [post]);
  return (
    <>
      <div className="col-md-6">
        <form onSubmit={(e) => handelEvent(e)}>
          <div className="mb-3 mt-3">
            <label className="form-label">Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              value={title}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div className="text-danger form-text">{errorTitle}</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Body</label>
            <textarea
              onChange={(e) => setBody(e.target.value)}
              value={body}
              type="text"
              rows="6"
              className="form-control"
              id="exampleInputPassword1"
            />
            <div className="text-danger form-text">{errorBody}</div>
          </div>

          <div className="mb-3 form-check"></div>
          <button
            type="submit"
            className="btn btn-dark"
            // disabled={title && body ? "" : "true"}
          >
            {loading && (
              <div
                className="spinner-border spinner-border-sm me-2"
                role="status"
              ></div>
            )}
            Submit
          </button>
          {error && <h2 className="mt-2 fw-bold text-danger">{error}</h2>}
        </form>
      </div>
    </>
  );
}

export default EditForm;
