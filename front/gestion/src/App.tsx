import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import Profil from "./pages/Profil";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing></Landing>}></Route>
      <Route path="/signUp" element={<CreateAccount></CreateAccount>}></Route>
      <Route path="/Home" element={<Home></Home>}></Route>
      <Route path="/Profil" element={<Profil></Profil>}></Route>
    </Routes>
  );
}
