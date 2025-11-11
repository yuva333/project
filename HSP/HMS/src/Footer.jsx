function Footer() {
  const footerStyle = {
    background: "#0d6efd",
    color: "white",
    textAlign: "center",
    padding: "15px",
    marginTop: "40px",
  };

  const textStyle = {
    margin: "5px 0",
  };

  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© {new Date().getFullYear()} Hospital Management System</p>
      <p style={textStyle}>Contact: info@hospital.com | +91 98765 43210</p>
    </footer>
  );
}

export default Footer;
