import React from "react";

export default function ShopDetails({ shopName, shopDes, shopAdd }) {
  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "2px",
    marginBottom: "5px",
    color: "#0d1117",
  };

  const headingStyle = {
    textTransform: "uppercase",
    color: "#3a97ff",
    fontSize: "3.5rem", // You can adjust the font size as needed
    marginBottom: "0.1rem",
    fontWeight: "bold", // Add this line to make the shop name bold
  };

  const descriptionStyle = {    
    fontSize: "1.2rem", // You can adjust the font size as needed
  };

  const addressStyle = {
    marginBottom: "0.8rem",
    fontSize: "1.2rem", // You can adjust the font size as needed
  };

  return (
    <>
      <section style={sectionStyle}>
        <h2 style={headingStyle}>{shopName}</h2>
        <h3 style={descriptionStyle}>{shopDes}</h3>
        <p style={addressStyle}>{shopAdd}</p>
      </section>
    </>
  );
}
