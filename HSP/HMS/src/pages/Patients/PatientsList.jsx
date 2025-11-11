import { useEffect, useState } from "react";
import PatientsService from "../../services/patientsService";
import "./PatientsList.css";



function PatientsList() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    PatientsService.getAll()
      .then((res) => {
        setPatients(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching patients:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading patients...</p>;

  // return (
  //   <div className="patients-list">
  //     <h2>Patients</h2>
  //     <ul>
  //       {patients.map((p) => (
  //         <li key={p.id}>
  //           {p.name} – {p.age} yrs – {p.gender}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );



  return (
  <div className="patients-list">
    <div className="patients-logo">
      <img src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png" alt="Patients Logo" />
    </div>
    <h2>Patients</h2>
    <ul>
      {patients.map((p) => (
        <li key={p.id}>
          {p.name} – {p.age} yrs – <span>{p.gender}</span>
        </li>
      ))}
    </ul>
  </div>
);



}

export default PatientsList;
