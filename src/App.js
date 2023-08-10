import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import ForgotPassword from "./views/ForgotPassword";
import ChangePassword from "./views/ChangePassword";
import PasswordChanged from "./views/PasswordChanged";
import Profile from "./views/Profile";
import "./App.css";
import injectContext from "./store/context";
import MembersList from "./views/MembersList";
import Signup from "./views/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/change_password" element={<ChangePassword />} />
        <Route path="/password_changed" element={<PasswordChanged />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/members_list" element={<MembersList />} />
        <Route path="/newuser" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
