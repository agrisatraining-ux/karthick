import React from "react";
import "./Profile.css";
import profileimg from "../../assets/profile.jpg";
import logo1 from "../../assets/logo1.PNG";
import logo2 from "../../assets/logo2.PNG";
import gamelogoo from "../../assets/gamelogoo.png";
import { FaLinkedinIn, FaEnvelope, FaPhone, FaWhatsapp, FaDownload } from "react-icons/fa";

const certifications = [
    "NLP Master Practitioner (Neuro Linguistic Programming – Science of Excellence)",
    "IIPE-Certified Experiential Trainer (Canada)",
    "CBT & REBT Practitioner (Cognitive and Rational Emotive Behavioural Therapy)",
    "Certified Professional in Theatre-based Learning",
    "TA 101 (Transactional Analysis)",
    "Pace Palette, Enneagram & Ego States Profiling",
    "Trained in Art Therapy Foundation & Heal Your Life (HYL) workshops",
];

const expertise = [
    { title: "Corporate Workshops", desc: "Leadership, Team Building, Communication, Conflict Resolution, Decision Making, Negotiation." },
    { title: "Game-Based Learning", desc: "Board games, murder mysteries, space survival missions, and custom-designed simulations." },
    { title: "Theatre-Based Learning", desc: "Role plays, forum theatre, and emotional catharsis techniques for deep behavioral shifts." },
    { title: "Outbound Training", desc: "Barefoot walks, fire/glass walks, nature-based challenges, and experiential team activities." },
    { title: "Public Programs", desc: "Open enrollment workshops for individuals across industries and life stages." },
    { title: "Leadership Development", desc: "Immersive journeys for CXOs, senior leaders, and high-potential managers." },
];

const clients = [
    "Hyundai", "Daimler India", "Samsung", "TVS", "Citibank", "Axis Bank",
    "Canara Bank", "HCL", "Cognizant", "Capgemini", "Accenture", "TCS",
    "Vodafone", "Airtel", "Larsen & Toubro", "Sterlite", "Michelin",
    "BPCL", "Anna University", "VIT", "LIBA",
];

const stats = [
    { number: "19+", label: "Years Experience" },
    { number: "850+", label: "Sessions Delivered" },
    { number: "700+", label: "Corporate Workshops" },
    { number: "6000+", label: "Participants Trained" },
];

export default function Profile() {
    return (
        <div className="profile-overall">
            {/* Download Banner */}
            <div className="profile-download-bar">
                <span>📄 View Karthik's Full Profile</span>
                <a href="/karthik-profile.pdf" download="Mr. Karthik Profile.pdf" className="profile-dl-btn">
                    <FaDownload /> Download PDF
                </a>
            </div>

            {/* HERO SECTION */}
            <section className="profile-hero">
                <div className="profile-hero-content">
                    <div className="profile-hero-text">
                        <p className="profile-tagline">Experiential Facilitator & Game Designer</p>
                        <h1 className="profile-name">Karthik K. Swami</h1>
                        <h2 className="profile-role">CEO & Lead Consultant, AGRISA Interactive Trainings</h2>
                        <p className="profile-intro">
                            A seasoned experiential facilitator, coach, and game designer with <strong>19+ years</strong> of professional experience and <strong>12+ years</strong> dedicated to transformative training and facilitation across India.
                        </p>
                        <div className="profile-contact-links">
                            <a href="mailto:Karthik@agrisa.co.in"><FaEnvelope /> Karthik@agrisa.co.in</a>
                            <a href="tel:+919840600638"><FaPhone /> +91 98406 00638</a>
                            <a href="https://wa.me/919840600638" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a>
                            <a href="http://linkedin.com/in/karthik-k-swami-b074718" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /> LinkedIn</a>
                        </div>
                    </div>
                    <div className="profile-hero-img">
                        <img src={profileimg} alt="Karthik K. Swami" />
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="profile-stats">
                {stats.map((s, i) => (
                    <div className="profile-stat-box" key={i}>
                        <h2>{s.number}</h2>
                        <p>{s.label}</p>
                    </div>
                ))}
            </section>

            {/* ABOUT */}
            <section className="profile-section">
                <div className="profile-section-inner">
                    <h2 className="profile-section-title">About AGRISA</h2>
                    <p>AGRISA Interactive Trainings is a dynamic learning design and facilitation company founded by Karthik K. Swami in <strong>2020</strong>, with the mission of transforming traditional training spaces into arenas of discovery, dialogue, and development.</p>
                    <p>The company specializes in experiential training where learning is not just taught but <em>lived</em> — through activities, simulations, games, storytelling, theatre, and deeply engaging experiences that move beyond PowerPoint slides and theory-driven workshops.</p>
                    <div className="profile-logos">
                        <img src={logo1} alt="Partner Logo 1" />
                        <img src={logo2} alt="Partner Logo 2" />
                        <img src={gamelogoo} alt="Game Logo" />
                    </div>
                </div>
            </section>

            {/* EXPERTISE */}
            <section className="profile-section profile-section-alt">
                <div className="profile-section-inner">
                    <h2 className="profile-section-title">Areas of Expertise</h2>
                    <div className="profile-expertise-grid">
                        {expertise.map((e, i) => (
                            <div className="profile-expertise-card" key={i}>
                                <h3>{e.title}</h3>
                                <p>{e.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CERTIFICATIONS */}
            <section className="profile-section">
                <div className="profile-section-inner">
                    <h2 className="profile-section-title">Certifications & Credentials</h2>
                    <ul className="profile-certs-list">
                        {certifications.map((c, i) => (
                            <li key={i}>
                                <span className="profile-cert-dot">✦</span> {c}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* KEY CLIENTS */}
            <section className="profile-section profile-section-alt">
                <div className="profile-section-inner">
                    <h2 className="profile-section-title">Key Clients & Partners</h2>
                    <p className="profile-clients-intro">Karthik has collaborated with leading organizations across industries in India:</p>
                    <div className="profile-clients-grid">
                        {clients.map((c, i) => (
                            <span className="profile-client-tag" key={i}>{c}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPERIENCE */}
            <section className="profile-section">
                <div className="profile-section-inner">
                    <h2 className="profile-section-title">Notable Achievements</h2>
                    <ul className="profile-achieves-list">
                        <li>Delivered <strong>850+ sessions</strong>, including 700+ corporate workshops and 150+ public programs.</li>
                        <li>Trained over <strong>6,000+ participants</strong> across India.</li>
                        <li>Recognized by <strong>TATA Consultancy Services</strong> in 2016 for conducting 100+ ILP (Initial Learning Programs).</li>
                        <li>Facilitated programs across IT, BFSI, Manufacturing, Telecom, Education, Consulting, and Government sectors.</li>
                        <li>Designed workshops for <strong>CXOs, senior leaders, executives, employees, students</strong>, and community groups.</li>
                    </ul>
                </div>
            </section>

            {/* CONTACT CTA */}
            <section className="profile-cta">
                <h2>Let's Work Together</h2>
                <p>Ready to transform your team? Reach out to Karthik to design a customized learning journey for your organization.</p>
                <div className="profile-cta-btns">
                    <a href="mailto:Karthik@agrisa.co.in?subject=Training Inquiry" className="btn-premium">
                        <FaEnvelope /> Email Karthik
                    </a>
                    <a href="/karthik-profile.pdf" download="Mr. Karthik Profile.pdf" className="btn-outline-premium">
                        <FaDownload /> Download PDF Profile
                    </a>
                </div>
            </section>
        </div>
    );
}
