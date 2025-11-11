import { Link } from "react-router-dom";
import "./Dashboard.css";
// import "../styles.css";





function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Hospital Management Dashboard</h1>

      <div className="cards">
        <Link to="/patients" className="card">
          <h2>Patients</h2>
          <p>Total: 0</p>
        </Link>

        <Link to="/doctors" className="card">
          <h2>Doctors</h2>
          <p>Total: 0</p>
        </Link>

        <Link to="/appointments" className="card">
          <h2>Appointments</h2>
          <p>Upcoming: 0</p>
        </Link>

        <Link to="/bills" className="card">
          <h2>Bills</h2>
          <p>Pending: 0</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
