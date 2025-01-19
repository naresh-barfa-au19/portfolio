import React from "react";

const Education = () => {
  return (
    <article className="education active" data-page="education">
      <header>
        <h2 className="h2 article-title">Education</h2>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Scaler Academy</h4>
            <span>July, 2023 – Present</span>
            <p className="timeline-text">Advance Software engineering Course</p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">AttainU Academy</h4>
            <span>April, 2021 - February, 2022</span>
            <p className="timeline-text">
              Full stack development - MERN stack course
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Graduaction</h4>
            <span>August, 2016 – May, 2020</span>
            <p className="timeline-text">
              Bachelor of Technology - Computer Science and Engineering | 7 CGPA | Parul University Vadodara, Gujarat
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">High school (12th Board)</h4>
            <span>Jul, 2014 — May, 2015</span>
            <p className="timeline-text">
              Completed senior secondary education with 86.00% from RBSE | Board
              Of Secondary Eduation, Rajasthan.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Matrix School (10th Board)
            </h4>
            <span>Jul, 2012 — Jun, 2013</span>
            <p className="timeline-text">
              Completed secondary education with 84.00% from RBSE | Board Of
              Secondary Eduation, Rajasthan.
            </p>
          </li>
        </ol>
      </section>

      
    </article>
  );
};

export default Education;
