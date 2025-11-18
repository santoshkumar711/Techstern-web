import React, { useState, useEffect } from "react";

export default function OurServices() {
  const [index, setIndex] = useState(0);

  const boxes = [
    {
      icon: "https://www.techstern.com/assets/images/service1.webp",
      title: "AI & Automation",
      list: [
        "Intelligent Workflow Automation",
        "AI-Powered Chatbots & Virtual Assistants",
        "Document Processing Automation"
      ]
    },
    {
      icon: "https://www.techstern.com/assets/images/service2.webp",
      title: "Data & Business Intelligence",
      list: [
        "Power BI Dashboard Design & Development",
        "Data Modeling & Visualization",
        "Real-Time Reporting Solutions"
      ]
    },
    {
      icon: "https://www.techstern.com/assets/images/service3.webp",
      title: "Cloud Services & Deployment",
      list: [
        "Cloud Consulting & Strategy",
        "Cloud Deployment Services",
        "Hybrid Cloud Solutions"
      ]
    },
    {
      icon: "https://www.techstern.com/assets/images/service5.webp",
      title: "Application Development",
      list: [
        "Web App Development",
        "Mobile App Development",
        "Database & API Development"
      ]
    },
    {
      icon: "https://www.techstern.com/assets/images/service4.webp",
      title: "Migration Services",
      list: [
        "Azure AD Migration",
        "M365 Migration",
        "Exchange Cloud Migration"
      ]
    },
    {
      icon: "https://www.techstern.com/assets/images/service6.webp",
      title: "IT Infrastructure & Management",
      list: [
        "Endpoint Management",
        "System Administration & Automation",
        "Collaboration & Productivity Tools"
      ]
    }
  ];

  const total = boxes.length;

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Utility to safely get card index (looping)
  const getCard = (offset) => boxes[(index + offset + total) % total];

  return (
    <div
      style={{
        padding: "90px 0 120px",
        backgroundImage:
          "url('https://www.techstern.com/assets/images/benefit-image-1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "45px",
          fontWeight: "700",
          marginBottom: "50px"
        }}
      >
        Our Services
      </h2>

      {/* 3-CARD CAROUSEL */}
      <div
        style={{
          width: "85%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          gap: "35px"
        }}
      >
        {[getCard(0), getCard(1), getCard(2)].map((box, i) => (
          <div
            key={i}
            style={{
              width: "33.33%",
              background: "white",
              padding: "40px",
              borderRadius: "30px",
              boxShadow: "0px 10px 25px rgba(0,0,0,0.18)",
              transition: "0.35s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-12px)";
              e.currentTarget.style.boxShadow =
                "0px 20px 40px rgba(0,0,0,0.28)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow =
                "0px 10px 25px rgba(0,0,0,0.18)";
            }}
          >
            <img
              src={box.icon}
              alt="service-icon"
              style={{
                width: "75px",
                height: "75px",
                objectFit: "contain",
                marginBottom: "20px"
              }}
            />

            <h3
              style={{
                fontSize: "22px",
                fontWeight: "700",
                marginBottom: "15px"
              }}
            >
              {box.title}
            </h3>

            <ul
              style={{
                paddingLeft: "20px",
                lineHeight: "1.55",
                fontSize: "15px"
              }}
            >
              {box.list.map((item, idx) => (
                <li key={idx} style={{ marginBottom: "8px" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* DOTS BELOW */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        {boxes.map((_, dot) => (
          <span
            key={dot}
            onClick={() => setIndex(dot)}
            style={{
              height: "11px",
              width: "11px",
              display: "inline-block",
              margin: "0 6px",
              borderRadius: "50%",
              background: index === dot ? "#d8232a" : "#fff",
              opacity: index === dot ? 1 : 0.45,
              cursor: "pointer",
              transition: ".3s"
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
