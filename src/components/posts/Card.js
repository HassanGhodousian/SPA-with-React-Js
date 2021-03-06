import { Link } from "react-router-dom";

function CardPost({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <div className="col-md-4 " key={post.id}>
          <div className="card">
            <div className="card-header fw-bold">
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> {post.body}</li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardPost;
