import { Link } from "react-router-dom";

function Header() {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "linear-gradient(90deg, #0d6efd, #0a58ca)",
    color: "white",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  };

  const logoStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  const navLinkStyle = {
    color: "white",
    fontWeight: "500",
    margin: "0 10px",
    textDecoration: "none",
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>🏥 HMS</div>
      <nav>
        <Link style={navLinkStyle} to="/">Dashboard</Link>
        <Link style={navLinkStyle} to="/patients">Patients</Link>
        <Link style={navLinkStyle} to="/doctors">Doctors</Link>
        <Link style={navLinkStyle} to="/appointments">Appointments</Link>
        <Link style={navLinkStyle} to="/bills">Bills</Link>
      </nav>
    </header>
  );
}

export default Header;
