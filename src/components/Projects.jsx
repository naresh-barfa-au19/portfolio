import React from "react";

const Projects = () => {

  return (
    <article className="education active" data-page="experience">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>
      {/* <!-- Experience --> */}

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">
            Personal Project <span className="text-gray-500 text-xs"></span>
          </h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Socio web application | Social site
            </h4>
            <p className="text-gray-500">
              <a href="https://github.com/attainu/backend-project-naresh-barfa-au19" target="_blank">Git Hub Link</a>
            </p>

            <span>February 2022</span>
            <p className="timeline-text">
              Create a public social network clone where users can create profiles, create posts, like and comment on posts, and
              interact with other users’ posts. Created necessary API to integrate with React Front-end.
            </p>
            <p className="timeline-text">
              Technologies - CSS, Bootstrap 5, React.js, Node.js, Express.js, Node mailer, MongoDB, Heroku

            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Car Parking Lot
            </h4>
            <p className="text-gray-500">
              <a href="https://github.com/attainu/python-project-naresh-barfa-au19/tree/dev" target="_blank"> Git Hub Link</a>
            </p>

            <span>September 2021</span>
            <p className="timeline-text">
              Implemented Python (Flask) based website with Car Parking Registration / Update / Setting / Search / About pages
              with all the required validations in the backend flask and connected with frontend HTML templates.

            </p>
            <p className="timeline-text">
              Designed schema for the application with SQL. Also created APIs for the application with server-side for smooth data
              flow between the backend and the front end of the application.

            </p>
            <p className="timeline-text">Technologies - CSS, Bootstrap 5, React.js, Python, Flask, SQL</p>

          </li>
        </ol>

      </section>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">
            Freelance Project <span className="text-gray-500 text-xs"></span>
          </h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Shri Aaijee Mahila College website
            </h4>
            <p className="text-gray-500">
              <a href="http://www.savmbilara.com/" target="_blank"> Live Link </a>
            </p>
            <span>2020</span>
            <p className="timeline-text">
              A website to display college notifications, facilities, staff members, infrastructure, labs and courses provided by the
              college. Students can get information about admission and other real-time event notifications.

            </p>
            <p className="timeline-text">
              Technologies - Ant Design CSS, Vue.js, Node.js, Firebase FireStore

            </p></li></ol>
      </section>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">
            Start up <span className="text-gray-500 text-xs"></span>
          </h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Foodbooknow ( Parul University - E cell )
            </h4>
            <span>Aug 2016 - Nov 2017</span>
            <p className="timeline-text">
              Developed a food delivery website with WordPress and managed food service between vendors/restaurants and
              students. I also handled the vendor dealing

            </p>
          </li></ol>
      </section>

    </article>
  );
};

export default Projects;
