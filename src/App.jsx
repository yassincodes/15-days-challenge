import Home from "./Home"
import Winners from "./Folders/Winners";
import Challenges from "./Folders/Challenges";
import Account from "./Folders/Account";
import RoutesSelector from "./Components/RoutesSelector";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="twitter_header_container">
        <div className="website_header">the 15 days challenge</div>
      </div>
      <div className="routes-section">
        <Routes>
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/winners" element={<Winners />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
      <div className="routes-selector-section">
        <RoutesSelector />
      </div>
    </div>
  );
}

export default App;

