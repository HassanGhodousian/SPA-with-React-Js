import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditForm from "../../components/posts/EditPost";
function EditPost() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [postId]);
  return (
    <>
      {error && <h2 className="">{error}</h2>}
      {loading && <div className="spinner-border" role="status"></div>}
      {post && <EditForm post={post} />}
    </>
  );
}

export default EditPost;
