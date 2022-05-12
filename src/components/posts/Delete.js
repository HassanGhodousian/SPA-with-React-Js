import { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function DeletePost() {
  const { postId } = useParams();
  const [err, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handelClick = () => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "DELETE",
    })
      .then(() => {
        Swal.fire("Deleted!", "You clicked the button!", "warning");
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <>
      {
        <button onClick={handelClick} className="btn btn-danger">
          {loading && (
            <div
              className="spinner-border spinner-border-sm me-1"
              role="status"
            ></div>
          )}
          Delete
        </button>
      }
      {err && <h2 className="">{err}</h2>}
    </>
  );
}

export default DeletePost;
