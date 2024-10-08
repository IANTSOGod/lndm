import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import CreateAccount from "./pages/CreateAccount";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing></Landing>}></Route>
      <Route path="/signUp" element={<CreateAccount></CreateAccount>}></Route>
    </Routes>
  );
}
