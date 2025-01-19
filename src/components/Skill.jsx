import React from "react";

const Skill = () => {
  return (
    <article className="education active" data-page="skill">
      <header>
        <h2 className="h2 article-title">Skills</h2>
      </header>

      {/* <!-- Skills --> */}
      <section className="skill">
        <div className="title-wrapper mb-2">
          <div className="icon-box ">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3 ml-2">Skills</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Frameworks and Libraries:</h4>
            <span className="flex gap-3 flex-wrap mt-3">
              ReactJS, NextJS, VueJS
            </span>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">State Management:</h4>
            <span className="flex gap-3 flex-wrap mt-3">
              Redux Toolkit

            </span>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Web Technologies:</h4>
            <span className="flex gap-3 flex-wrap mt-3">
              HTML5, SCSS, CSS, MUI, AntD, Responsive Web UI, Storybook, GraphQL, i18 Localization
            </span>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Backend development:</h4>
            <span className="flex gap-3 flex-wrap mt-3">
              Node.js, Express.js, Hapi.js, RabbitMQ

            </span>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Databases:</h4>
            <span className="flex gap-3 flex-wrap mt-3">
              SQL, MongoDB, Firebase, PostgreSQL
            </span>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Unit Testing:</h4>
            <span className="flex gap-3 flex-wrap mt-3">Jest, React testing library, Chai, Sinon, Test Driven Development
            </span>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">APIs:</h4>
            <span className="flex gap-3 flex-wrap mt-3">RESTful API
            </span>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Tools:</h4>
            <span className="flex gap-3 flex-wrap mt-3">Git, Bitbucket, Gitlab, JIRA, Postman
            </span>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">DevOps:</h4>
            <span className="flex gap-3 flex-wrap mt-3">Docker, CI/CD, AWS

            </span>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Development Practices:</h4>
            <span className="flex gap-3 flex-wrap mt-3">Object-Oriented Programming, Agile Methodologies
            </span>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Content Management:</h4>
            <span className="flex gap-3 flex-wrap mt-3">CMS (Content Management Systems)
            </span>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Skill;
