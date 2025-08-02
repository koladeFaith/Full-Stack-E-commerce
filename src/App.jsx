import Signup from "../pages/Signup";
import { Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Signin from "../pages/Signin";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
