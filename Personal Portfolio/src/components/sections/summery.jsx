import React from "react";
import profile from "../../assets/images/about/prathap-kalaivanan.png";
import { RiMailSendLine } from "@remixicon/react";
import SlideUp from "../../utlits/animations/slideUp";
const Summery = () => {
  return (
    <section id="about" className="about-single-area innerpage-single-area">
      <div className="container">
        <div className="row">
          {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
          <div className="col-lg-4">
            <SlideUp>
              <div className="about-image-part">
                <img src={profile} alt="About Me" />
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
          <div className="col-lg-8">
            <SlideUp>
              <div className="about-content-part">
                <h2>
                  I’m Prathap Kalaivanan, a UI/UX designer and web developer.
                </h2>
                <p>
                  Based in Chennai, I come from a visual communication
                  background and currently work full-time as a UI/UX & Graphic
                  designer. Alongside my professional work, I’ve begun my MCA
                  journey at SRM to deepen my understanding of web development
                  and strengthen my technical skills.
                </p>
                <p>
                  With a blend of creative design and growing development
                  skills, I build digital experiences that are both visually
                  appealing and user-focused. I enjoy turning complex ideas into
                  clean, simple interfaces — for mobile apps, websites, or
                  branding. I believe great design balances form and function,
                  and I’m always eager to learn, take on new challenges, and
                  collaborate on meaningful work.
                </p>
                <div className="hero-btns">
                  <a
                    href="mailto:prathapkalaivanan@gmail.com"
                    className="theme-btn"
                  >
                    Get In touch
                    <i>
                      {""}
                      <RiMailSendLine size={16} />{" "}
                    </i>
                  </a>
                </div>
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
};

export default Summery;
