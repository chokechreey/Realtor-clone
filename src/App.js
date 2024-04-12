import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Profile from"./pages/Profile";
import SignIn from"./pages/SignIn";
import SignUp from"./pages/SignUp";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Forgot" element={<ForgotPassword />}></Route>
          <Route path="/Offers" element={<Offers />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
