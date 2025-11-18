import React, { useState, useEffect } from "react";

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const data = [
    {
      text:
        "Great finished product with my website. It took a few rounds of feedback to get all the items incorporated but the team working on it was very diligent and patient with me as well.",
      name: "Jennifer King",
      country: "United Kingdom",
      image:
        "https://www.techstern.com/assets/images/author-1.jpg"
    },
    {
      text:
        "Amazing support and top-notch services. The team delivered exactly what we were looking for. Highly recommended for enterprise solutions.",
      name: "Michael Brown",
      country: "United States",
      image:
        "https://www.techstern.com/assets/images/author-1.jpg"
    },
    {
      text:
        "Professional, responsive and very skilled developers. They handled all our cloud migration needs perfectly. Loved working with them!",
      name: "Aarav Kumar",
      country: "India",
      image:
        "https://www.techstern.com/assets/images/author-1.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % data.length);

  return (
    <div
      style={{
        padding: "100px 0",
        background: "#f6f6f8"
      }}
    >
      {/* HEADING */}
      <div style={{ width: "85%", margin: "auto", marginBottom: "40px" }}>
        <p
          style={{
            color: "#d8232a",
            letterSpacing: "2px",
            fontWeight: "600",
            marginBottom: "5px"
          }}
        >
          TESTIMONIALS
        </p>

        <h2
          style={{
            fontSize: "45px",
            fontWeight: "800"
          }}
        >
          Our clients are saying
        </h2>
      </div>

      {/* MAIN SECTION */}
      <div
        style={{
          width: "85%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "center"
        }}
      >
        {/* LEFT IMAGE (DO NOT TOUCH — AS YOU SAID) */}
        <div
          style={{
            height: "420px",
            borderRadius: "20px",
            overflow: "hidden"
          }}
        >
          <img
            src="https://www.techstern.com/assets/images/Ai-2.webp"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.95
            }}
          />
        </div>

        {/* RIGHT WHITE CARD */}
        <div
          style={{
            background: "white",
            padding: "45px",
            borderRadius: "25px",
            boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
            position: "relative",
            minHeight: "300px"
          }}
        >
          <div style={{ fontSize: "40px", color: "#d8232a" }}>❝</div>

          <p
            style={{
              marginTop: "15px",
              lineHeight: "1.6",
              fontSize: "16px",
              opacity: 0.9
            }}
          >
            {data[index].text}
          </p>

          <div style={{ display: "flex", marginTop: "25px", alignItems: "center" }}>
            <img
              src={data[index].image}
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                marginRight: "15px",
                objectFit: "cover"
              }}
            />
            <div>
              <h4 style={{ margin: 0, fontWeight: "700", fontSize: "18px" }}>
                {data[index].name}
              </h4>
              <p
                style={{
                  margin: 0,
                  opacity: 0.7,
                  fontSize: "14px"
                }}
              >
                {data[index].country}
              </p>
            </div>
          </div>

          {/* ARROWS */}
          <div
            style={{
              position: "absolute",
              bottom: "30px",
              right: "40px",
              display: "flex",
              gap: "18px"
            }}
          >
            <span
              onClick={prevSlide}
              style={{
                cursor: "pointer",
                fontSize: "22px",
                color: "#d8232a",
                fontWeight: "bold"
              }}
            >
              ←
            </span>

            <span
              onClick={nextSlide}
              style={{
                cursor: "pointer",
                fontSize: "22px",
                color: "#d8232a",
                fontWeight: "bold"
              }}
            >
              →
            </span>
          </div>
        </div>
      </div>

      {/* ⭐⭐⭐ CONTACT US SECTION ⭐⭐⭐ */}
      <div
        style={{
          width: "85%",
          margin: "70px auto 0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >

        {/* LEFT PART — ICON + TEXT */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>

          {/* ROUND SEND ICON */}
          <div
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "50%",
              background: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 6px 20px rgba(0,0,0,0.15)",
            }}
          >
            <i
              class="fa fa-send-o"
              style={{
                fontSize: "22px",
                color: "#d8232a"
              }}
            ></i>
          </div>

          {/* TEXT */}
          <p
            style={{
              margin: 0,
              fontSize: "17px",
              lineHeight: "1.5",
              opacity: 0.8,
            }}
          >
            If you any questions or need help{" "}
            <span style={{ opacity: 1, fontWeight: "700" }}>
              contact with team. 0651 796 1217
            </span>
          </p>
        </div>

        {/* RIGHT BUTTON */}
        <button
          style={{
            background: "#d8232a",
            color: "white",
            padding: "15px 32px",
            borderRadius: "30px",
            fontSize: "16px",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "0px 8px 20px rgba(216,35,42,0.4)",
          }}
        >
          Contact Us <span style={{ fontSize: "20px" }}>➜</span>
        </button>

      </div>


    </div>
  );
}
