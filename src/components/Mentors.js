import React from "react";

export default function Mentors() {
  return (
    <div>
      <main className="third-main">
        <section className="third-section">
          <p className="latest-articles">Mentors</p>
          <div className="img-card">
            <li>
              <img src="./images/image-morgon.jpeg" alt="morgon" />
              <div className="card-data">
                <span>Morgon</span>
                <p className="the-world">
                  A front-end developer mentor has extensive experience in
                  designing and developing user interfaces and is skilled in
                  HTML, CSS, and JavaScript.
                </p>
              </div>
            </li>
            <li>
              <img src="./images/image-joe.png" alt="restaurant" />
              <div className="card-data">
                <span>Joe</span>
                <p className="the-world">
                  A mentor in back-end development brings years of experience
                  and expertise in server-side technologies, database
                  management, API integration, and scalability to guide and
                  support your growth as a back-end developer.
                </p>
              </div>
            </li>
            <li>
              <img src="./images/image-john.png" alt="plane" />
              <div className="card-data">
                <span>John</span>
                <p className="the-world">
                  A full stack developer mentor with 5-10 years of experience
                  offers extensive technical knowledge, industry best practices,
                  project experience, architecture expertise, and
                  problem-solving skills to guide aspiring developers.
                </p>
              </div>
            </li>
            <li>
              <img src="./images/image-devops.png" alt="confetti" />
              <div className="card-data">
                <span>DevOps </span>
                <p className="the-world">
                  A mentor with expertise in DevOps can provide guidance and
                  support in implementing continuous integration and deployment
                  pipelines, optimizing infrastructure, and fostering a
                  collaborative and automated development environment.
                </p>
              </div>
            </li>
          </div>
        </section>
      </main>
    </div>
  );
}
