import React from "react";

function About() {
  // SHINE STYLE
  const shineLayer = {
    content: "''",
    position: "absolute",
    top: "-160%",
    left: "-160%",
    width: "300%",
    height: "300%",
    background:
      "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0) 100%)",
    transform: "rotate(25deg)",
    transition: "0.7s ease",
    pointerEvents: "none",
  };

  const shineContainer = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "30px",
  };

  function handleMouseEnter(e) {
    const shine = e.currentTarget.querySelector(".shine-layer");
    shine.style.top = "-30%";
    shine.style.left = "-30%";
  }

  function handleMouseLeave(e) {
    const shine = e.currentTarget.querySelector(".shine-layer");
    shine.style.top = "-160%";
    shine.style.left = "-160%";
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        gap: "60px",
        padding: "60px 8%",
      }}
    >
      {/* LEFT SECTION */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 0.9fr",
          gap: "20px",
        }}
      >
        {/* BIG IMAGE */}
        <div
          style={{ ...shineContainer, height: "520px" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="shine-layer" style={shineLayer}></div>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztkojafCFmBAyw27aYgHXc7cjOvSOD2TS-UxYysALyc3l3WqzEEBl5CQSsk20JwuIA1A&usqp=CAU"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "30px",
            }}
          />
        </div>

        {/* TWO SMALL IMAGES */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* IMG 1 */}
          <div
            style={{ ...shineContainer, height: "250px" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="shine-layer" style={shineLayer}></div>

            <img
              src="https://www.techstern.com/assets/images/Aiauto.webp"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "30px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* IMG 2 */}
          <div
            style={{ ...shineContainer, height: "250px" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="shine-layer" style={shineLayer}></div>

            <img
              src="https://www.techstern.com/assets/images/Ai-2.webp"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "30px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <p
          style={{
            color: "#d62828",
            letterSpacing: "3px",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          ABOUT US
        </p>

        <h1
          style={{
            fontSize: "42px",
            fontWeight: "800",
            marginBottom: "20px",
          }}
        >
          Welcome to Techstern – Driving Innovation Through Technology
        </h1>

        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.6",
            color: "#333",
          }}
        >
          Techstern Solutions is a <b>Microsoft Partner, ISO-certified, and CMMI Level 3</b>{" "}
          company. With more than a decade of experience, we help organizations harness
          Cloud, AI, Automation, and IT Infrastructure.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
            marginTop: "30px",
            marginBottom: "35px",
          }}
        >
          <img
            src="https://www.techstern.com/assets/images/icon-img.webp"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              clipPath:
                "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
            }}
          />

          <div
            style={{
              background: "#c41616",
              color: "#fff",
              padding: "28px 40px",
              fontSize: "20px",
              borderRadius: "80px",
              fontWeight: "700",
              lineHeight: "1.3",
              width: "100%",
              maxWidth: "520px",
            }}
          >
            Trusted ISO-Certified Partner <br />
            Delivering globally recognized quality and value for money.
          </div>
        </div>

        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.6",
            color: "#333",
          }}
        >
          We are not just service providers — we are transformation partners. Our
          solutions empower organizations to modernize operations, accelerate growth,
          and achieve measurable impact.
        </p>
      </div>
    </div>
  );
}

export default About;
