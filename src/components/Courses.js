import React from "react";
export default function Courses() {
  return (
    <>
      <main className="third-main">
        <section className="third-section">
          <p className="latest-articles">Courses</p>
          <div className="img-card">
            <li>
              <img src="./images/front-end-developer.png" alt="currency" />
              <div className="card-data">
                <span>Front End Developer</span>
                <p className="the-world"> 100% Live Online Classes</p>
                <p className="the-world"> Industry Recongnized Certificate</p>
                <p className="the-world"> Mock Interviews</p>
                <button className="Request-Button " type="button">
                  Apply Now
                </button>
              </div>
            </li>
            <li>
              <img src="./images/back-end-developer.png" alt="restaurant" />
              <div className="card-data">
                <span>Back End Developer</span>
                <p className="the-world"> 100% Live Online Classes</p>
                <p className="the-world"> Industry Recongnized Certificate</p>
                <p className="the-world"> Mock Interviews</p>
                <button className="Request-Button" type="button">
                  Apply Now
                </button>
              </div>
            </li>
            <li>
              <img src="./images/full-stack-developer.jpg" alt="plane" />
              <div className="card-data">
                <span>Full Stack Developer</span>
                <p className="the-world"> 100% Live Online Classes</p>
                <p className="the-world"> Industry Recongnized Certificate</p>
                <p className="the-world"> Mock Interviews</p>
                <button className="Request-Button" type="button">
                  Apply Now
                </button>
              </div>
            </li>
            <li>
              <img src="./images/devops.png" alt="confetti" />
              <div className="card-data">
                <span>DevOps </span>
                <p className="the-world"> 100% Live Online Classes</p>
                <p className="the-world"> Industry Recongnized Certificate</p>
                <p className="the-world"> Mock Interviews</p>
                <button className="Request-Button" type="button">
                  Apply Now
                </button>
              </div>
            </li>
          </div>
        </section>
      </main>
    </>
  );
}
