import React, { useState } from "react";

function QualitySection() {
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

  const [shine1, setShine1] = useState(false);
  const [shine2, setShine2] = useState(false);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.1fr 1fr",
        gap: "50px",
        padding: "60px 8%",
        alignItems: "center",
      }}
    >

      {/* LEFT SIDE IMAGES */}
      <div style={{ display: "grid", gap: "25px" }}>
        
        {/* BIG IMAGE WITH SHINE */}
        <div
          style={{
            ...shineEffect(shine1),
          }}
          onMouseEnter={() => setShine1(true)}
          onMouseLeave={() => setShine1(false)}
        >
          <div style={shineBefore(shine1)}></div>
          <img
            src="https://www.techstern.com/assets/images/powerBI.webp"
            style={{
              width: "100%",
              height: "330px",
              borderRadius: "25px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* SMALL IMAGES */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 0.8fr",
            gap: "25px",
          }}
        >

          {/* SMALL IMAGE WITH SHINE */}
          <div
            style={{ ...shineEffect(shine2) }}
            onMouseEnter={() => setShine2(true)}
            onMouseLeave={() => setShine2(false)}
          >
            <div style={shineBefore(shine2)}></div>
            <img
              src="https://www.techstern.com/assets/images/ui-ux.webp"
              style={{
                width: "100%",
                height: "230px",
                borderRadius: "25px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* 10+ BOX */}
          <div
            style={{
              border: "1px solid #e5e5e5",
              borderRadius: "25px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "42px", fontWeight: "800", margin: "0" }}>10+</p>
            <p style={{ fontSize: "17px", opacity: "0.7", margin: "0" }}>
              Years of experience
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE TEXT + ICONS */}
      <div>
        <p
          style={{
            color: "#d62828",
            letterSpacing: "3px",
            fontWeight: "800",
            marginBottom: "10px",
          }}
        >
          OUR FEATURE
        </p>

        <h1
          style={{
            fontSize: "36px",
            fontWeight: "800",
            marginBottom: "25px",
            lineHeight: "1.3",
          }}
        >
          Globally recognized quality <br /> standards
        </h1>

        {/* FEATURES LIST */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {[
            { icon: "fa fa-bookmark-o", text: "Microsoft Partner with Cloud & PowerBI expertise." },
            { icon: "fa fa-send-o", text: "ISO & CMMI Level 3 Certified – assurance of best practices and process maturity." },
            { icon: "fa fa-calendar", text: "Trusted by international clients, enterprises, governments, and public companies." },
            { icon: "fa fa-lightbulb-o", text: "Experience across industries: Healthcare, Logistics, Education, Media, Governance." },
            { icon: "fa fa-calendar-check-o", text: "Focused on Cloud, AI, Automation and Enterprise IT Solutions." },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "18px" }}>
              
              {/* ICON WITH RED GLOW ON HOVER */}
              <div
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  background: "#d62828",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "0.3s ease",
                  boxShadow: "0 0 0 rgba(214,40,40,0)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 18px rgba(214,40,40,0.8)";
                  e.currentTarget.style.transform = "scale(1.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 0 rgba(214,40,40,0)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <i className={item.icon} style={{ color: "#fff", fontSize: "20px" }}></i>
              </div>

              <p style={{ fontSize: "17px", lineHeight: "1.5", opacity: "0.9" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default QualitySection;
