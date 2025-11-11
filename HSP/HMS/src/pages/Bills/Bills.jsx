// import React, { useEffect, useState } from "react";
// import { getBills, createBill, deleteBill } from "../../services/billsService";
// // import '../styles.css';
// import "../../styles.css";




// const Bills = () => {
//   const [bills, setBills] = useState([]);
//   const [form, setForm] = useState({ patientId: "", amount: "" });

//   useEffect(() => {
//     fetchBills();
//   }, []);

//   const fetchBills = async () => {
//     const response = await getBills();
//     setBills(response.data);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await createBill(form);
//     setForm({ patientId: "", amount: "" });
//     fetchBills();
//   };

//   const handleDelete = async (id) => {
//     await deleteBill(id);
//     fetchBills();
//   };

//   return (
//     <div className="bills">
//       <h2>Bills</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Patient ID"
//           value={form.patientId}
//           onChange={(e) => setForm({ ...form, patientId: e.target.value })}
//         />
//         <input
//           type="number"
//           placeholder="Amount"
//           value={form.amount}
//           onChange={(e) => setForm({ ...form, amount: e.target.value })}
//         />
//         <button type="submit">Add Bill</button>
//       </form>

//       <ul>
//         {bills.map((b) => (
//           <li key={b.id}>
//             Patient {b.patientId} → ₹{b.amount}
//             <button onClick={() => handleDelete(b.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Bills;


// src/pages/Bills/Bills.jsx
import React, { useEffect, useState } from "react";
import { getBills, createBill, deleteBill } from "../../services/billsService";
// import "../../styles.css";
import "./Bills.css";


const Bills = () => {
  const [bills, setBills] = useState([]);
  const [form, setForm] = useState({ patientId: "", amount: "" });

  useEffect(() => {
    fetchBills();
  }, []);

  const fetchBills = async () => {
    const response = await getBills();
    setBills(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBill(form);
    setForm({ patientId: "", amount: "" });
    fetchBills();
  };

  const handleDelete = async (id) => {
    await deleteBill(id);
    fetchBills();
  };

  return (
    <div className="bills">
      <h2>Bills</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Patient ID"
          value={form.patientId}
          onChange={(e) => setForm({ ...form, patientId: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />
        <button type="submit">Add Bill</button>
      </form>

      <ul>
        {bills.map((b) => (
          <li key={b.id}>
            Patient {b.patientId} → ₹{b.amount}
            <button onClick={() => handleDelete(b.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bills;
