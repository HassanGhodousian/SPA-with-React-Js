import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import UserRoutes from "./pages/users/Routs";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/users/*" element={<UserRoutes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
