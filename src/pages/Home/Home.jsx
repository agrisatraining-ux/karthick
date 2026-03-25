import React from "react";
import './Home.css';
import pro1 from '../../assets/pro1.png'
import pro2 from '../../assets/pro2.jpg'
import pro3 from '../../assets/pro3.jpg';
import pro7 from '../../assets/pro7.jpg';
import pro45 from '../../assets/pro45.jpg';
import proreal from '../../assets/proreal.jpg'
import { GoPerson } from "react-icons/go";
import { FaRegLightbulb } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
import { Navigate, useNavigate } from "react-router-dom";
import ImageSlider from "../../component/imageslide";

const Home = () => {

    const homeser = [
        {
            icon: <GoPerson />,
            title: "Corporate Training",
            content: "We deliver customized, experiential corporate training programs that enhance leadership, communication, teamwork, and employee engagement. "
        },
        {
            icon: <FaRegLightbulb />,
            title: 'Innovation Consulting',
            content: "Through innovation-driven consulting, we help organizations embrace creativity, design thinking, and problem-solving strategies. "
        },
        {
            icon: <FiTarget />,
            title: "Leadership Development",
            content: "We design immersive leadership journeys that strengthen decision-making, negotiation, and conflict resolution skills. "
        }
    ]

    const navigate = useNavigate();

    return (
        <div className="overallhome">


            {/* Homeheader  */}

            <div className="homeheader">
                <h1>Transforming Organization through  </h1>
                <h2>Innovation</h2>
                <p> Unlock your potential with immersive workshops designed to <br /> inspire, empower, and transform your journey.</p>
                <div className="homehead-btn">
                    <button className="btn-outline-premium" onClick={() => navigate("/about")} >Learn More</button>
                    <button className="btn-premium" onClick={() => navigate("/work")} >Explore workshop &nbsp; &rarr;</button>
                </div>

                {/* Home img  */}
                <div className="homesecond-img">
                    <div className="homeslid">
                       <ImageSlider/>
                     
                    </div>
                </div>

            </div>


            {/* Home our company     */}

            <div className="homeourcompany">
                <h1>About our company</h1>
                <p>AGRISA Interactive Trainings is a dynamic learning design and facilitation company founded by Karthik K. Swami, with the mission of transforming traditional training spaces into arenas of discovery, dialogue, and development.</p>
                <p>Established in 2020, AGRISA was born out of Karthik’s passion for creating immersive, game-based learning experiences that move beyond PowerPoint slides and theory-driven workshops.</p>
                <p>The company specializes in experiential training, where learning is not just taught but lived through activities, simulations, and deeply engaging experiences.</p>
                <button className="btn-outline-premium" onClick={() => navigate("/about")} >Read our full story &nbsp; &rarr;</button>
            </div>

            {/* Home founder  */}

            <div className="homefounder">
                <h1>Meet our Founder</h1>
                <h2>Karthik, CEO & lead Consultant</h2>
                <p>Karthik K. Swami is a seasoned experiential facilitator, trainer, coach, and game designer, with over 19 years of professional experience and 12+ years dedicated to training and facilitation.</p>
                <p>Known for his ability to transform conventional workshops into immersive human experiences, Karthik has earned recognition as a leading voice in game-based learning and experiential education in India.</p>
                <p>Karthik’s journey into facilitation began in the corporate world, where he worked in Sales and Pre-Sales Management in the IT infrastructure sector. His early career equipped him with a strong foundation in business acumen, negotiation, and leadership.</p>
                <button className="btn-outline-premium" onClick={() => navigate("/about")} > Learn More about Karthik &nbsp; &rarr;</button>
            </div>

            {/* homefounderimg  */}

            <div className="homefounder-img">
                <img src={proreal} alt="" />
            </div>

            {/* What I do  */}

            <div className="home-whatdo">
                <h1>What I do</h1>
                <p>I design and deliver experiential learning programs that go beyond theory and PowerPoint. My work blends games, storytelling, theatre, simulations, and real-life challenges to create powerful spaces where people can reflect, connect, and transform.</p>
            </div>

            {/* Home service  */}

            <div className="homeservice">
                {homeser.map((homeser, index) => (
                    <div key={index} className="homeservicebox">
                        <i>{homeser.icon} </i>
                        <h1>{homeser.title} </h1>
                        <p>{homeser.content} </p>
                    </div>
                ))}


            </div>

            <div className="homeservicebtn">
                <button className="btn-premium" onClick={() => navigate("/work")} >Explore Our Service &nbsp; &rarr;</button>
            </div>

            <div className="homevideo">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6cPDpvj-wiI?si=YJq-nqx-P3uDjekr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className="homefooter">
                <h1>Ready to transform your Organization</h1>
                <p>At AGRISA Interactive Trainings, we believe true transformation happens when learning is not just heard but experienced. With game-based workshops, immersive simulations, and people-centered facilitation, we help organizations break silos, strengthen leadership, and build resilient, high-performing teams.</p>
                <div className="homefooter-btn">
                    <button className="btn-premium" onClick={() => navigate("/Contact")} >Get Started Today &nbsp; &rarr; </button>
                    <button className="btn-outline-premium" onClick={() => navigate("/work")}>View Our Work</button>
                </div>
            </div>

        </div>
    )
}

export default Home;