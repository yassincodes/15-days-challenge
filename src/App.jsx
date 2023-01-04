import Home from "./Home"
import Winners from "./Folders/Winners";
import Challenges from "./Folders/Challenges";
import Account from "./Folders/Account";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/challenges" element={<Challenges />} />
      <Route path="/winners" element={<Winners />} />
      <Route path="account" element={<Account />} />
    </Routes>
  );
}

export default App;

