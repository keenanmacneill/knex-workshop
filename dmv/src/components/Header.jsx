import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function handleLinkClick(link) {
    navigate(link);
  }
  return (
    <div className="header-container">
      <div className="header-link" onClick={() => handleLinkClick("/")}>
        Home
      </div>
      <div className="header-link" onClick={() => handleLinkClick("/search")}>
        Search Page
      </div>
      <div className="header-link" onClick={() => handleLinkClick("/vehicles")}>
        Vehicles
      </div>
      <div className="header-link" onClick={() => handleLinkClick("/people")}>
        People
      </div>
      <div
        className="header-link"
        onClick={() => handleLinkClick("/locations")}
      >
        Locations
      </div>
    </div>
  );
}
