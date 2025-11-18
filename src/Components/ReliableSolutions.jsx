import React, { useState } from "react";

function ReliableSolutions() {
  const shineEffect = (active) => ({
    position: "relative",
    overflow: "hidden",
    borderRadius: "25px",
  });

  const shineBefore = (active) => ({
    content: "''",
    position: "absolute",
    top: active ? "-20%" : "-160%",
    left: active ? "-20%" : "-160%",
    width: "300%",
    height: "300%",
    background:
      "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0) 100%)",
    transform: "rotate(25deg)",
    opacity: active ? 1 : 0,
    transition: "0.7s ease",
    pointerEvents: "none",
  });

  const [shine, setShine] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        padding: "90px 8%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        overflow: "hidden",
        color: "#fff",
      }}
    >
      {/* BACKGROUND IMAGE */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url('https://www.techstern.com/assets/images/benefit-image-1.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -2,
        }}
      ></div>

      {/* BLACK OVERLAY */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.65)",
          zIndex: -1,
        }}
      ></div>

      {/* WHITE FRAME + SHINE IMAGE */}
      <div
        style={{
          padding: "10px",
          background: "#fff",
          borderRadius: "30px",
          width: "334px",
          height: "404px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "250px",
        }}
      >
        <div
          style={{ ...shineEffect(shine), width: "100%", height: "100%" }}
          onMouseEnter={() => setShine(true)}
          onMouseLeave={() => setShine(false)}
        >
          <div style={shineBefore(shine)}></div>

          <img
            src="https://www.techstern.com/assets/images/benefit-image-2.webp"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "22px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* RIGHT TEXT */}
      <div style={{ paddingLeft: "40px" }}>
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "800",
            lineHeight: "1.3",
            marginBottom: "25px",
          }}
        >
          Reliable Solutions for <br /> Enterprise Excellence
        </h1>

        <p
          style={{
            opacity: 0.9,
            lineHeight: "1.7",
            marginBottom: "15px",
            fontSize: "17px",
          }}
        >
          Techstern empowers enterprises to thrive in the digital age through
          innovative, secure, and scalable technology solutions. As a trusted
          Microsoft Cloud Partner, we specialize in cloud infrastructure,
          AI-driven automation, and managed IT services that enhance operational
          efficiency.
        </p>

        <p
          style={{
            opacity: 0.9,
            lineHeight: "1.7",
            fontSize: "17px",
          }}
        >
          We build high-performance, future-ready IT ecosystems for global
          enterprises, governments, and public sector clients.
        </p>
      </div>
    </div>
  );
}

export default ReliableSolutions;
