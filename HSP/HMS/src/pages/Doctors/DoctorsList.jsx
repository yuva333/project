
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // ✅ import navigation hook
import DoctorsService from "../../services/doctorsService";
import "./DoctorsList.css";
import doctor from "../../assets/doctors.jpg";

const doctorImages = {
  1: doctor,

};
function DoctorsList() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // ✅ initialize navigation

  useEffect(() => {
    DoctorsService.getAll()
      .then((res) => {
        setDoctors(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching doctors:", err);
        setError("Failed to load doctors.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading doctors...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="doctors-list">
      <h2>Our Doctors</h2>
      <ul>
        {doctors.map((d) => (
          <li key={d.id} className="doctor-card">
            {/* <img
              src={`https://i.pravatar.cc/150?img=${d.id}`}
              alt={d.name}
            /> */}

              <img
              src={doctorImages[d.id] || doctor} // ✅ no require(), just mapping
              alt={d.name}
              className="doctor-img"
            />
            <strong>{d.name}</strong>
            <p>{d.specialization}</p>
            <p>{d.phone}</p>

            {/* ✅ Navigate to appointment page with doctor ID */}
            <button
              className="book-btn"
              onClick={() => navigate(`/appointment/${d.id}`)}
            >
              Book Appointment
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorsList;
