import { Route, Routes } from "react-router-dom";
import ShowUser from "./ShowUser";
import UserIndex from "./Users";

function RouteUser() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <Routes>
            <Route path="/" element={<UserIndex />} />
            <Route path="/:userId" element={<ShowUser />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default RouteUser;
