import React, { useEffect, useRef } from "react";
import "./home.css";

import shape_bg from '../../assets/images/shape-bg.png';

import liquid_img from '../../assets/images/liquid-fruit.png';
import juice_img from '../../assets/images/juice.png';

import apple1_img from '../../assets/images/apple1.png';
import apple2_img from '../../assets/images/apple2.png';

import leaf_img from '../../assets/images/leaf.png';

import gsap from "gsap";

const Home = () => {

  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".home__title",
        { opacity: 0, y: 0 },
        { opacity: 1, y: 20, duration: 1, delay: 0.2, ease: "expo.inOut" }
      );
      gsap.fromTo(
        ".home__description",
        { opacity: 0, y: 0 },
        { opacity: 1, y: 20, duration: 1, delay: 0.3, ease: "expo.inOut" }
      );
      gsap.fromTo(
        ".home__button",
        { opacity: 0, y: 0 },
        { opacity: 1, y: 20, duration: 1, delay: 0.4, ease: "expo.inOut" }
      );

      gsap.fromTo(
        ".liquid-img",
        { opacity: 0, y: 0 },
        { opacity: 1, y: 20, duration: 1, delay: 0.7, ease: "expo.inOut" }
      );
      
      gsap.fromTo(
        ".home__juice-animate",
        { opacity: 0, y: -400},
        { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: "expo.inOut" }
      );

      gsap.fromTo(
        ".apple1-img",
        { opacity: 0, y: -400},
        { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: "expo.inOut" }
      );
      gsap.fromTo(
        ".apple2-img",
        { opacity: 0, y: -400},
        { opacity: 1, y:0, duration: 1, delay: 1.6, ease: "expo.inOut" }
      );

      gsap.fromTo(
        ".leaf1-img",
        { opacity: 0, y: -400},
        { opacity: 1, y:0, duration: 2, delay: 1.3, ease: "expo.inOut" }
      );

      gsap.fromTo(
        ".leaf2-img",
        { opacity: 0, y: -400},
        { opacity: 1, y:0, duration: 2, delay: 1.4, ease: "expo.inOut" }
      );

      gsap.fromTo(
        ".leaf3-img",
        { opacity: 0, y: -400},
        { opacity: 1, y:0, duration: 2, delay: 1.5, ease: "expo.inOut" }
      );
      gsap.fromTo(
        ".leaf4-img",
        { opacity: 0, y: -400},
        { opacity: 1, y:0, duration: 2, delay: 1.6, ease: "expo.inOut" }
      );
      gsap.fromTo(
        ".leaf5-img",
        { opacity: 0, y: -400},
        { opacity: 1, y:0, duration: 2, delay: 1.7, ease: "expo.inOut" }
      );
      gsap.fromTo(
        ".leaf6-img",
        { opacity: 0, y: -400},
        { opacity: 1, y:0, duration: 2, delay: 1.8, ease: "expo.inOut" }
      );
      
    });

    return () => ctx.revert(); // Réinitialise GSAP quand le composant est démonté
  }, []);

  return (
    <section className="home" id="home">
        <div className="home__shape-small"></div>
        <div className="home__shape-big"></div>
        <img src={shape_bg} alt="shape_bg-image" className="shape_bg-img" />
      <div className="container home__container">
        <div className="home__data">
          <h1 className="home__title">
            Get Fresh <br/>
            <span>Juiceables</span>
            Everyday
          </h1>
          <p className="home__description">
            Starting at $360 per month, get <br />
            those benefits and more.
          </p>
          <a href="#" className="home__button">
          Details
          </a>
        </div>
        <div className="home__images">
            <img src={liquid_img} alt="liquid-image" className="liquid-img" />
            <div className="home__juice-animate">
              <img src={juice_img} alt="juice-image" className="juice-img" />
            </div>
            <img src={apple1_img} alt="apple1-image" className="apple1-img" />
            <img src={apple2_img} alt="apple2-image" className="apple2-img" />
            <div>
                <img src={leaf_img} alt="leaf-image" className="leaf1-img" />
                <img src={leaf_img} alt="leaf-image" className="leaf2-img" />
                <img src={leaf_img} alt="leaf-image" className="leaf3-img" />
                <img src={leaf_img} alt="leaf-image" className="leaf4-img" />
                <img src={leaf_img} alt="leaf-image" className="leaf5-img" />
                <img src={leaf_img} alt="leaf-image" className="leaf6-img" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
