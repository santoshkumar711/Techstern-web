import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        background: "#0e141b",
        color: "white",
        padding: "50px 60px 20px 60px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* --- LEFT SECTION --- */}
        <div style={{ width: "280px" }}>
          {/* Logo */}
          <img
            src="https://media.licdn.com/dms/image/v2/C510BAQEj8WPvjsV4kQ/company-logo_200_200/company-logo_200_200/0/1630613567773/techstern_logo?e=2147483647&v=beta&t=Gr4q3CF070ez8p-fEdrt9b6R3VTV-Api6HCca1Ts0bs"
            alt="Techstern Logo"
            style={{ width: "150px", marginBottom: "16px" }}
          />

          {/* Paragraph */}
          <p style={{ lineHeight: "22px", color: "#c7c7c7", fontSize: "14px" }}>
            At Techstern, we have a serious passion for delivering the highest
            quality IT services with a strong commitment to value for money. As
            a trusted ISO 9001:2015 certified IT firm
          </p>

          {/* LinkedIn Round Icon */}
          <div
            style={{
              marginTop: "20px",
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              style={{ width: "18px", height: "18px" }}
            />
          </div>
        </div>

        {/* --- QUICK LINKS --- */}
        <div>
          <h3 style={{ marginBottom: "10px" }}>Quick Link</h3>
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
          <p>Contact Us</p>
        </div>

        {/* --- SERVICES --- */}
        <div>
          <h3 style={{ marginBottom: "10px" }}>Services</h3>
          <p>Cloud Platform Migration</p>
          <p>Mobile Application Development</p>
          <p>Web Application Development</p>
        </div>

        {/* --- SUPPORT --- */}
        <div>
          <h3 style={{ marginBottom: "10px" }}>Support</h3>
          <p>Help</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>

        {/* --- CONTACT DETAILS --- */}
        <div>
          <h3 style={{ marginBottom: "10px" }}>Contact</h3>
          <p>0651 796 1217</p>
          <p>info@techstern.com</p>
          <p>
            201, 2nd Floor, MR Tower, Line Tank Road,
            <br />
            Ranchi (JH) – 834001
          </p>
        </div>
      </div>

      {/* --- COPYRIGHT BAR --- */}
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          paddingTop: "15px",
          paddingBottom: "10px",
          borderTop: "1px solid #2a2f33",
          color: "#b2b2b2",
          fontSize: "13px",
        }}
      >
        Copyright © 2025 All Rights Reserved.
      </div>
    </footer>
  );
}
