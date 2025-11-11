// import React, { useEffect, useState } from "react";
// import { getAppointments, createAppointment, deleteAppointment } from "../../services/appointmentsService";

// const Appointments = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [form, setForm] = useState({ patientId: "", doctorId: "", date: "" });

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     const response = await getAppointments();
//     setAppointments(response.data);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await createAppointment(form);
//     setForm({ patientId: "", doctorId: "", date: "" });
//     fetchAppointments();
//   };

//   const handleDelete = async (id) => {
//     await deleteAppointment(id);
//     fetchAppointments();
//   };

//   return (
//     <div className="appointments">
//       <h2>Appointments</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Patient ID"
//           value={form.patientId}
//           onChange={(e) => setForm({ ...form, patientId: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Doctor ID"
//           value={form.doctorId}
//           onChange={(e) => setForm({ ...form, doctorId: e.target.value })}
//         />
//         <input
//           type="date"
//           value={form.date}
//           onChange={(e) => setForm({ ...form, date: e.target.value })}
//         />
//         <button type="submit">Add Appointment</button>
//       </form>

//       <ul>
//         {appointments.map((a) => (
//           <li key={a.id}>
//             Patient {a.patientId} with Doctor {a.doctorId} on {a.date}
//             <button onClick={() => handleDelete(a.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Appointments;



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAppointments, createAppointment, deleteAppointment } from "../../services/appointmentsService";

import "./Appointments.css";

const Appointments = () => {
  const { id } = useParams(); // ✅ doctor ID from URL (/appointment/:id)
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({ patientId: "", doctorId: id || "", date: "" });

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const response = await getAppointments();
    setAppointments(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAppointment(form);
    setForm({ patientId: "", doctorId: id || "", date: "" }); // reset but keep doctorId if from URL
    fetchAppointments();
  };

  const handleDelete = async (id) => {
    await deleteAppointment(id);
    fetchAppointments();
  };

  return (
    <div className="appointments">
      <h2>Book Appointment</h2>

      <form onSubmit={handleSubmit} className="appointment-form">
        <input
          type="text"
          placeholder="Patient ID"
          value={form.patientId}
          onChange={(e) => setForm({ ...form, patientId: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Doctor ID"
          value={form.doctorId}
          onChange={(e) => setForm({ ...form, doctorId: e.target.value })}
          required
          readOnly={!!id} // ✅ makes doctorId readonly if coming from DoctorsList
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />
        <button type="submit">Add Appointment</button>
      </form>

      <h3>All Appointments</h3>
      <ul>
        {appointments.map((a) => (
          <li key={a.id}>
            Patient {a.patientId} with Doctor {a.doctorId} on {a.date}
            <button onClick={() => handleDelete(a.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
