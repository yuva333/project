function Hero() {
  const heroStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1584438784894-089d6a62b8d7')",
    backgroundSize: "cover",      // ✅ makes image fill container
    backgroundPosition: "center", // ✅ keeps image centered (no top/bottom cut)
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",            // ✅ fills most of the screen
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
  };

  const textStyle = {
    marginTop: "10px",
    fontSize: "1.2rem",
  };

  return (
    <section style={heroStyle}>
      <div>
        <h1 style={titleStyle}>Hospital Management System</h1>
        <p style={textStyle}>
          Manage Doctors, Patients, Appointments, and Bills seamlessly.
        </p>
      </div>
    </section>
  );
}

export default Hero;
