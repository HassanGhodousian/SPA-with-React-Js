import { Route, Routes } from "react-router-dom";
import ShowPost from "./ShowPost";
import PostIndex from "./Posts";
import CreatePost from "./Create";
import EditPost from "./Edite";

function RouteUser() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <Routes>
            <Route path="/" element={<PostIndex />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/edit/:postId" element={<EditPost />} />
            <Route path="/:postId" element={<ShowPost />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default RouteUser;
