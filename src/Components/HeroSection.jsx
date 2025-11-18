import React, { useState, useEffect } from "react";

export default function HeroSection() {
    const slides = [
        {
            id: 1,
            title: "Smarter Businesses Start with Automation",
            subtitle: "Smarter Moves. Faster Results.",
            img: "https://www.techstern.com/assets/images/hero_bg_1_3.webp",
        },
        {
            id: 2,
            title: "Smart Displays for Smarter Connections",
            subtitle: "Automation Empowers. AI Inspires.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGNg16nROu2zp2aOXZYBgV2IF8E01oilrow&s",
        },
        {
            id: 3,
            title: "Powering the Future with AI & Automation",
            subtitle: "Workflows with AI Agents & Chatbots",
            img: "https://www.techstern.com/assets/images/DigitalSignageApplications.webp",
        },
    ];

    const [current, setCurrent] = useState(0);
    const [showServices, setShowServices] = useState(false);

    // 🔥 Auto Slide Every 3 Seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                position: "relative",
                color: "white",
                backgroundImage: `url(${slides[current].img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 0.6s ease-in-out",
            }}
        >
            {/* NAVBAR */}
            <div
                style={{
                    width: "100%",
                    padding: "20px 60px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 10,
                    background: "rgba(10,10,30,0.3)",
                    backdropFilter: "blur(4px)",
                }}
            >
                {/* LEFT → LOGO */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <img src="https://media.licdn.com/dms/image/v2/C510BAQEj8WPvjsV4kQ/company-logo_200_200/company-logo_200_200/0/1630613567773/techstern_logo?e=2147483647&v=beta&t=Gr4q3CF070ez8p-fEdrt9b6R3VTV-Api6HCca1Ts0bs" alt="logo" style={{ width: "55px" }} />
                    <h1 style={{ fontSize: "32px", fontWeight: "600" }}>Techstern</h1>
                </div>

                {/* CENTER → MENU */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "35px",
                        fontSize: "17px",
                        fontWeight: "500",
                    }}
                >
                    <a>Home</a>
                    <a>About</a>

                    {/* SERVICES DROPDOWN */}
                    <div style={{ position: "relative" }}>
                        <a
                            onMouseEnter={() => setShowServices(true)}
                            onMouseLeave={() => setShowServices(false)}
                            style={{ cursor: "pointer" }}
                        >
                            Services ▼
                        </a>

                        {showServices && (
                            <div
                                onMouseEnter={() => setShowServices(true)}
                                onMouseLeave={() => setShowServices(false)}
                                style={{
                                    position: "absolute",
                                    top: "30px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "900px",
                                    background: "white",
                                    color: "black",
                                    padding: "25px",
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                                    gap: "20px",
                                    borderRadius: "10px",
                                    boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
                                }}
                            >
                                <div>
                                    <h3 style={{ color: "#d81456" }}>AI & Automation</h3>
                                    <p>Workflow Automation</p>
                                    <p>AI Chatbots</p>
                                    <p>Document Automation</p>
                                    <p>Data Intelligence</p>
                                </div>

                                <div>
                                    <h3 style={{ color: "#d81456" }}>Cloud Services</h3>
                                    <p>Cloud Deployment</p>
                                    <p>CI/CD Pipeline Setup</p>
                                    <p>Cloud Migration</p>
                                    <p>Identity Migration</p>
                                </div>

                                <div>
                                    <h3 style={{ color: "#d81456" }}>Development</h3>
                                    <p>Web App Development</p>
                                    <p>Mobile App Dev</p>
                                    <p>Frontend Dev</p>
                                    <p>UI/UX Design</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <a>Case Studies</a>
                    <a>Contact Us</a>
                </div>

                {/* RIGHT → GET QUOTE BUTTON */}
                <button
                    style={{
                        padding: "10px 25px",
                        background: "linear-gradient(90deg,#d81456,#ff2e72)",
                        borderRadius: "30px",
                        border: "none",
                        color: "white",
                        fontSize: "16px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                    }}
                >
                    Get A Quote ➜
                </button>
            </div>

            {/* HERO TEXT */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "60px",
                    transform: "translateY(-50%)",
                    maxWidth: "650px",
                    zIndex: 5,
                }}
            >
                <h1
                    style={{
                        fontSize: "52px",
                        fontWeight: "700",
                        lineHeight: "1.2",
                        marginBottom: "15px",
                        textShadow: "0px 2px 8px rgba(0,0,0,0.6)",
                    }}
                >
                    {slides[current].title}
                </h1>

                <p
                    style={{
                        fontSize: "24px",
                        fontWeight: "400",
                        opacity: 0.95,
                        textShadow: "0px 2px 8px rgba(0,0,0,0.6)",
                    }}
                >
                    {slides[current].subtitle}
                </p>

                <button
                    style={{
                        marginTop: "25px",
                        padding: "12px 32px",
                        background: "linear-gradient(90deg,#d81456,#ff2e72)",
                        borderRadius: "30px",
                        border: "none",
                        color: "white",
                        fontSize: "18px",
                        cursor: "pointer",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                    }}
                >
                    Explore More ➜
                </button>
            </div>

            {/* DOTS */}
            <div
                style={{
                    position: "absolute",
                    bottom: "40px",
                    left: "100px",
                    display: "flex",
                    gap: "10px",
                }}
            >
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrent(index)}
                        style={{
                            width: current === index ? "15px" : "10px",
                            height: current === index ? "15px" : "10px",
                            background: current === index ? "white" : "#777",
                            borderRadius: "50%",
                            cursor: "pointer",
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
