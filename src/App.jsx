import Signup from "../pages/Signup";
import { Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
