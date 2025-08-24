import { RiBookLine } from "@remixicon/react";
import React from "react";
import SlideUp from "../../utlits/animations/slideUp";

const Resume = () => {
  return (
    <section id="resume" className="resume-area">
      <div className="container">
        <div className="resume-items">
          <div className="row">
            {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
            <div className="col-xl-6 col-md-6">
              <div className="single-resume">
                <h2>Experience</h2>
                <div className="experience-list">
                  <Card
                    year={"2024 - Present"}
                    title={"Graphic Designer"}
                    institution={"Sage IT Private Limited"}
                  />
                  <Card
                    year={"2023 - 2024"}
                    title={"UI/UX Designer"}
                    institution={"Zeal Zoft Private Limited"}
                  />
                  <Card
                    year={"2020 - 2023"}
                    title={"Creative Designer (Freelance)"}
                    institution={"Remote / Self-employed"}
                  />
                </div>
              </div>
            </div>
            {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
            <div className="col-xl-6 col-md-6">
              <div className="experience-list">
                <div className="single-resume">
                  <h2>Education</h2>
                  <Card
                    year={"2025 - 2027"}
                    title={"Master of Computer Applications"}
                    institution={"SRM Institute of Science and Technology"}
                  />
                  <Card
                    year={"2017 - 2020"}
                    title={"Bachelor of Visual Communication"}
                    institution={
                      "Bharath Institute of Higher Education and Research"
                    }
                  />
                  <Card
                    year={"2016 - 2017"}
                    title={"Higher Secondary Education"}
                    institution={"Raj Matriculation Higher Secondary School"}
                  />
                </div>
              </div>
            </div>
            {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

const Card = ({ year, title, institution }) => {
  return (
    <SlideUp>
      <div className="resume-item">
        <div className="icon">
          <RiBookLine />
        </div>
        <div className="content">
          <span className="years">{year}</span>
          <h4>{title}</h4>
          <span className="company"> {institution} </span>
        </div>
      </div>
    </SlideUp>
  );
};
