// // import { Routes, Route } from "react-router-dom";

// // import PatientsList from "./pages/Patients/PatientsList";
// // import DoctorsList from "./pages/Doctors/DoctorsList";
// // import Appointments from "./pages/Appointments/Appointments";
// // import Bills from "./pages/Bills/Bills";
// // import Dashboard from "./pages/Dashboard";


// // function App() {
// //   return (
// //     <div>
// //       <Routes>
// //         <Route path="/" element={<Dashboard />} />
// //         <Route path="/patients" element={<PatientsList />} />
// //         <Route path="/doctors" element={<DoctorsList />} />
// //         <Route path="/appointments" element={<Appointments />} />
// //         <Route path="/bills" element={<Bills />} />
// //       </Routes>

// //     </div>
// //   );
// // }

// // export default App;



// import { Routes, Route } from "react-router-dom";

// import PatientsList from "./pages/Patients/PatientsList";
// import DoctorsList from "./pages/Doctors/DoctorsList";
// import Appointments from "./pages/Appointments/Appointments";
// import Bills from "./pages/Bills/Bills";
// import Dashboard from "./pages/Dashboard";

// function App() {
//   // ✅ Internal CSS styles
//   const headerStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "15px 40px",
//     background: "linear-gradient(90deg, #0d6efd, #0a58ca)",
//     color: "white",
//     boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//   };

//   const logoStyle = { fontSize: "1.5rem", fontWeight: "bold" };
//   const navLinkStyle = {
//     color: "white",
//     fontWeight: "500",
//     margin: "0 10px",
//     textDecoration: "none",
//   };

//   const heroStyle = {
//     background:
//       "url('https://images.unsplash.com/photo-1584438784894-089d6a62b8d7') center/cover no-repeat",
//     height: "280px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     color: "white",
//     textAlign: "center",
//   };

//   const titleStyle = { fontSize: "2.5rem", textShadow: "2px 2px 8px rgba(0,0,0,0.6)" };
//   const textStyle = { marginTop: "10px", fontSize: "1.2rem" };

//   const mainStyle = {
//     padding: "2rem",
//     fontFamily: "Arial, sans-serif",
//     background: "#f8fafc",
//     minHeight: "60vh",
//   };

//   const footerStyle = {
//     background: "#0d6efd",
//     color: "white",
//     textAlign: "center",
//     padding: "15px",
//     marginTop: "40px",
//   };

//   return (
//     <div>
//       {/* ✅ Header */}
//       <header style={headerStyle}>
//         <div style={logoStyle}>🏥 HMS</div>
//         <nav>
//           <a style={navLinkStyle} href="/">Dashboard</a>
//           <a style={navLinkStyle} href="/patients">Patients</a>
//           <a style={navLinkStyle} href="/doctors">Doctors</a>
//           <a style={navLinkStyle} href="/appointments">Appointments</a>
//           <a style={navLinkStyle} href="/bills">Bills</a>
//         </nav>
//       </header>

//       {/* ✅ Hero Section */}
//       <section style={heroStyle}>
//         <div>
//           <h1 style={titleStyle}>Hospital Management System</h1>
//           <p style={textStyle}>Manage Doctors, Patients, Appointments, and Bills seamlessly.</p>
//         </div>
//       </section>

//       {/* ✅ Main Content (Routes) */}
//       <main style={mainStyle}>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/patients" element={<PatientsList />} />
//           <Route path="/doctors" element={<DoctorsList />} />
//           <Route path="/appointments" element={<Appointments />} />
//           <Route path="/bills" element={<Bills />} />
//         </Routes>
//       </main>

//       {/* ✅ Footer */}
//       <footer style={footerStyle}>
//         <p>© {new Date().getFullYear()} Hospital Management System</p>
//         <p>Contact: info@hospital.com | +91 98765 43210</p>
//       </footer>
//     </div>
//   );
// }

// export default App;

// import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import PatientsList from "./pages/Patients/PatientsList";
import DoctorsList from "./pages/Doctors/DoctorsList";
import Appointments from "./pages/Appointments/Appointments";
import Bills from "./pages/Bills/Bills";
import Dashboard from "./pages/Dashboard";


import hospital from "./assets/hospital.jpg"

function App() {
  // ✅ Slideshow images
  const images = [
    "https://images.unsplash.com/photo-1584438784894-089d6a62b8d7",
    "https://images.unsplash.com/photo-1588776814546-56d71f65eeb1",
    "https://images.unsplash.com/photo-1584983744903-6d1e4a6f4a77",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  // ✅ Styles
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "linear-gradient(90deg, #0d6efd, #0a58ca)",
    color: "white",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const logoStyle = { fontSize: "1.5rem", fontWeight: "bold" };
  const navLinkStyle = {
    color: "white",
    fontWeight: "500",
    margin: "0 10px",
    textDecoration: "none",
  };

  const heroContainer = {
    position: "relative",
    height: "650px",
    overflow: "hidden",
  };

  const heroImage = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    transition: "opacity 1s ease-in-out",
    opacity: 0,
  };

  const activeImage = {
    ...heroImage,
    opacity: 1,
  };

  const overlay = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
    textAlign: "center",
    padding: "20px",
  };

  const titleStyle = { fontSize: "2.8rem", fontWeight: "bold", marginBottom: "10px" };
  const textStyle = { fontSize: "1.2rem", maxWidth: "700px" };

  const mainStyle = {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    background: "#f8fafc",
    minHeight: "60vh",
  };

  const footerStyle = {
    background: "#0d6efd",
    color: "white",
    textAlign: "center",
    padding: "15px",
    marginTop: "40px",
  };

  return (
    <div>
      {/* ✅ Header */}
      <header style={headerStyle}>
        <div style={logoStyle}>🏥 HMS</div>
        {/* <nav>
          <a style={navLinkStyle} href="/">Dashboard</a>
          <a style={navLinkStyle} href="/patients">Patients</a>
          <a style={navLinkStyle} href="/doctors">Doctors</a>
          <a style={navLinkStyle} href="/appointments">Appointments</a>
          <a style={navLinkStyle} href="/bills">Bills</a>
        </nav> */}

        <nav>
          <Link style={navLinkStyle} to="/">Dashboard</Link>
          <Link style={navLinkStyle} to="/patients">Patients</Link>
          <Link style={navLinkStyle} to="/doctors">Doctors</Link>
          <Link style={navLinkStyle} to="/appointments">Appointments</Link>
          <Link style={navLinkStyle} to="/bills">Bills</Link>
        </nav>

      </header>

      {/* ✅ Slideshow Hero */}
      <section style={heroContainer}>
        {images.map((img, index) => (
          <img
            key={index}
            src={hospital}
            alt="Hospital"
            style={index === currentImage ? activeImage : heroImage}
          />
        ))}
        <div style={overlay}>
          <h1 style={titleStyle}>Hospital Management System</h1>
          <p style={textStyle}>
            A complete solution to manage doctors, patients, appointments, and billing — 
            making healthcare management efficient and seamless.
          </p>
        </div>
      </section>

      {/* ✅ Main Content (Routes) */}
      {/* <main style={mainStyle}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<PatientsList />} />
          <Route path="/doctors" element={<DoctorsList />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/bills" element={<Bills />} />
        </Routes>
      </main> */}

      <main style={mainStyle}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<PatientsList />} />
          <Route path="/doctors" element={<DoctorsList />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/appointment/:id" element={<Appointments />} /> {/* ✅ doctor-specific */}
          <Route path="/bills" element={<Bills />} />

          
        </Routes>
      </main>

      {/* ✅ Footer */}
      <footer style={footerStyle}>
        <p>© {new Date().getFullYear()} Hospital Management System</p>
        <p>Contact: info@hospital.com | +91 98765 43210</p>
      </footer>
    </div>
  );
}

export default App;
