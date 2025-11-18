import React from "react";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        padding: "8px 120px",
        background: "black",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "14px",
        fontFamily: "sans-serif",
      }}
    >
      {/* LEFT SIDE */}
      <div>
        Partnership that powers possibilities
        <span style={{ color: "#ff0055", fontWeight: "bold", marginLeft: 4,textDecoration: "underline",
            textUnderlineOffset: "3px",  }}>
          Let's Build Together
        </span>
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",      // <-- spacing yaha kam kiya hai
        }}
      >
        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Contact
        </a>

        {/* | SEPARATOR — yaha add kiya hai */}
        <span style={{ color: "white" }}>|</span>

        {/* LinkedIn Icon */}
        <a href="#" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            style={{ width: "18px", height: "18px",backgroundColor:"white" }}
          />
        </a>
      </div>
    </header>
  );
}
