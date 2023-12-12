//CSS
import "../CSS/navbar.css";
import '../../node_modules/swiper/swiper-bundle.min.css'
import '../../node_modules/swiper/swiper.min.css'

//MOTION FOR ANIMATED ELEMENTS
import { motion } from "framer-motion";

//SPLINE 3D
import Spline from '@splinetool/react-spline';

//REACT
import React from "react";

//IMAGE
import downArrow from "../assets/down-arrow.png";

//COMPONENTS
import ServiceBox from "../components/serviceBox";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'

//MOTION VARIANTS
const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
        duration: 1,
        staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
        duration: 2,
        repeat: Infinity,
        },
    },
};

const LandingPage = () => {

//<**************VARIABLES**********************>

const slider = [
    {
        title: "Clippify",
        description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
        url: "https://images.unsplash.com/photo-1612240498936-65f5101365d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        logo: "https://images.unsplash.com/photo-1612240498936-65f5101365d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
        title: "Lupody",
        description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
        url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        logo: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
        title: "Lupody Mobile",
        description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
        url: "https://images.unsplash.com/photo-1646615077267-97c6088b74d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
        logo: "https://images.unsplash.com/photo-1646615077267-97c6088b74d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
    
        {
        title: "Clippify Mobile",
        description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
        url: "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        logo: "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
]

//IS SELECTED | WEB | MOBILE | CROSS
const [isSelected, setIsSelected] = React.useState("web");

//WEB DATA
const webData = {
    title: "Web App",
    desc: "Web App Desc",
}

//MOBILE DATA
const mobileData = {
    title: "Mobile App",
    desc: "Mobile App Desc",
}

//CROSS DATA
const crossData = {
    title: "Cross-Platform",
    desc: "Cross-Platform Desc",
}

//<**************FUNCTIONS**********************>

//HANDLE PORTFOLIO NAVIGATION
const handlePortfolioNavigation = (title) => {
    window.location.href = '/portfolio/'+title;
}

//HANDLE VR PRESSED
const handleVrPressed = () => {
    window.location.href = '/about-me';
}


return (
<>
    <div className="row1">
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>Hi, I'm <span>Tamas. 👋</span></motion.h2>
                    <motion.h1 variants={textVariants}>
                        Fullstack Web and Mobile developer
                    </motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>
                        See the Latest Works
                        </motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img
                        variants={textVariants}
                        animate="scrollButton"
                        src={downArrow}
                        alt="dasdsd"
                        className="scrollButton"
                    />
                </motion.div>
            </div>

            <div className="spline3D">
                <Spline scene="https://prod.spline.design/08GxCRZfeAsvSbUl/scene.splinecode" />
            </div>
        </div>
        
    </div>
    <div style={{width:"80%",left:0,marginRight:100,position:"absolute",top:350,zIndex:-1,scrollBehavior:"none"}}>
        <Spline scene="https://prod.spline.design/8TZXGNPj0BahNLrA/scene.splinecode" />
    </div>

    <div style={{borderTop:"1px solid black"}}>
        <div id="services">
            <div className="services-pick">
                <h3 onClick={() => setIsSelected("mobile")} className={isSelected === "mobile" ? "selected" : "select"}>Mobile App</h3>
                <h3 onClick={() => setIsSelected("web")} className={isSelected === "web" ? "selected" : "select"} >Web App</h3>
                <h3  onClick={() => setIsSelected("cross")} className={isSelected === "cross" ? "selected" : "select"}>Cross-Platform</h3>
            </div>

            <div className="service-show">
                {/* <ServiceBox props={isSelected === "web" ? webData : isSelected === "mobile" ? mobileData : isSelected === "cross" ? crossData : null} />  */}
                <div className="service-grid-box">
                    <h2 className="service-help-title">I CAN HELP YOU</h2>
                    <ServiceBox />
                </div>
                <div className="device-show" >
                    {isSelected === "web" ?  <Spline scene="https://prod.spline.design/93k0UQpHjCDQ-xcA/scene.splinecode" /> : isSelected === "mobile" ? <Spline scene="https://prod.spline.design/7Tw5Onj31K29lbsG/scene.splinecode" /> : isSelected === "cross" ? <h1>Cross-Platform</h1> : null}
                </div>
            </div>

            <div className="service-fee-row">
                <div className="h-rate">
                    <h4>Price : 30$ / h</h4>
                </div>
            </div>

            <div id="portfolio">
                <div className="portfolio-title">
                    <h1>Portfolio</h1>
                </div>

                <div style={{marginTop:50, maxWidth:1000,width: 1000,marginBottom:100}}>
                    <Swiper 
                        className='myswiper'
                        modules={[Pagination, EffectCoverflow, Autoplay]}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 3,
                            slideShadows: true
                        }}
                        loop={true}
                        pagination={{clickable: true}}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2
                            },
                            768: {
                                slidesPerView: 1
                            },
                            1024: {
                                slidesPerView: 2
                            },
                            1560: {
                                slidesPerView: 3
                            },
                        }}
                    >
                        {
                        slider.map(data => (
                            <SwiperSlide style={{ backgroundImage: `url(${data.url})` }} className="myswiper-slider">
                                <div>
                                    <h2>{data.title}</h2>
                                    <p>{data.description}</p>
                                    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"0%",height:100,marginTop:30}}>
                                        <img src={data.logo} className="swiper-image" alt="" />
                                        <a onClick={() => handlePortfolioNavigation(data.title)} target="_blank" className='slider-btn'>explore</a>
                                    </div>
                                    
                                </div>
                            </SwiperSlide>
                        ))
                        }
                    </Swiper>
                </div>
            </div>

            <div className="aboutme-section">
                <h2>About Me</h2>
                <h5>Let me show you with another perspective</h5>
                <div onClick={handleVrPressed} style={{cursor:"pointer"}}> 
                    <div  style={{height:500,zIndex:-1,marginTop:-100}}> 
                        <Spline scene="https://prod.spline.design/KX8f-KHZwA3H06Gs/scene.splinecode" />
                    </div>
                </div>
            </div>

            <div className="review-bubbles">
                <div className="bubble-rows">

                    {/* COL 1 */}
                    <div className="bubbleCol">
                        <div className="bubble-type1">
                            <h1>5.0</h1>
                            <h3>Rating</h3>
                        </div>

                        <div className="bubble-type2">
                            <h1>10+</h1>
                            <h3>Projects</h3>
                        </div>

                    </div>
                    {/* COL 2 */}
                    <div className="bubbleCol">
                        <div className="bubble-type2">
                            <h1>5.0</h1>
                            <h3>Rating</h3>
                        </div>

                        <div className="bubble-type1">
                            <h1>10+</h1>
                            <h3>Projects</h3>
                        </div>

                    </div>
                    {/* COL 3 */}
                    <div className="bubbleCol">
                        <div className="bubble-type1">
                            <h1>5.0</h1>
                            <h3>Rating</h3>
                        </div>

                        <div className="bubble-type2">
                            <h1>10+</h1>
                            <h3>Projects</h3>
                        </div>

                    </div>
                    {/* COL 4 */}
                    <div className="bubbleCol">
                        <div className="bubble-type1">
                            <h1>5.0</h1>
                            <h3>Rating</h3>
                        </div>

                        <div className="bubble-type2">
                            <h1>10+</h1>
                            <h3>Projects</h3>
                        </div>

                    </div>
                    {/* COL 5 */}
                    <div className="bubbleCol">
                    <div className="bubble-type2">
                        <h1>5.0</h1>
                        <h3>Rating</h3>
                    </div>

                    <div className="bubble-type1">
                        <h1>10+</h1>
                        <h3>Projects</h3>
                    </div>

                    </div>
                 
                </div>
            </div>

            {/* <div className="review-row">
                <div className="review-box">
                    <h3>Anonymus</h3>
                    <h4>Working with Tamas was a delight! Their expertise, attention to detail, and commitment to deadlines exceeded my expectations. The app they developed not only met but surpassed my vision. I highly recommend !!!</h4>
                </div>
            </div> */}
        </div>
    </div>
</>
)};

export default LandingPage;