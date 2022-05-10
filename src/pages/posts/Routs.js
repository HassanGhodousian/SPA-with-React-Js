import { Route, Routes } from "react-router-dom";
import ShowPost from "./ShowPost";
import PostIndex from "./Posts";

function RouteUser() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostIndex />} />
        <Route path="/:postId" element={<ShowPost />} />
      </Routes>
    </>
  );
}

export default RouteUser;
