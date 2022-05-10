import { Route, Routes } from "react-router-dom";
import ShowUser from "./ShowUser";
import UserIndex from "./Users";

function RouteUser() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserIndex />} />
        <Route path="/:userId" element={<ShowUser />} />
      </Routes>
    </>
  );
}

export default RouteUser;
