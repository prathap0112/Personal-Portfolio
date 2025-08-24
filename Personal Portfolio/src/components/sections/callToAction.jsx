import React from "react";
import { useNavigate } from "react-router-dom";
import { RiDownloadLine } from "@remixicon/react";
import SlideUp from "../../utlits/animations/slideUp";

const CallToAction = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };
  return (
    <section className="call-to-action-area">
      <div className="container">
        <div className="row">
          {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
          <div className="col-lg-12">
            <SlideUp>
              <div className="about-content-part call-to-action-part text-center">
                <h2>
                  Ready to turn your vision into a clean, user-focused digital
                  experience?
                </h2>
                <p>
                  Reach out and let’s make it happen ✨. I’m also available for
                  full-time opportunities to push the boundaries of design and
                  deliver exceptional results.
                </p>
                <div className="hero-btns">
                  <button onClick={handleClick} className="theme-btn">
                    Let's Talk{" "}
                    <i>
                      <RiDownloadLine size={16} />
                    </i>
                  </button>
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

export default CallToAction;
