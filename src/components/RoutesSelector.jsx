import { Link } from "react-router-dom";

function RoutesSelector() {
  return (
    <div className="links">

      <div className="logo-icon">logo</div>

      <Link to="/" className="link">
        <div>الرئيسية</div>
        <div className="icon">.</div>
      </Link>

      <Link to="/account" className="link">
        <div>الدروس</div>
        <div className="icon">.</div>
      </Link>

      <Link to="/leaderboard" className="link">
        <div>الحساب</div>
        <div className="icon">.</div>
      </Link>
    </div>
  );
}

export default RoutesSelector;
