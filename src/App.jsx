import Leaderboard from "./Folders/Leaderboard";
import Challenges from "./Folders/Challenges";
import Account from "./Folders/Account";
import RoutesSelector from "./Components/RoutesSelector";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="twitter_header_container">
        <div className="twitter_header">15 days challenge</div>
      </div>
      <div className="routes-section">
        <Routes>
          <Route exact path="/" element={<Challenges />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
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

