import React from "react";

const About = ({ onOpenModal }) => {
  

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          💻 I am Naresh Barfa, a Software Engineer with over 4 years of experience specializing in full-stack web development and scalable applications. My expertise lies in Next.js, React.js, Node.js, and TypeScript, along with proficiency in modern tools and frameworks. I am passionate about building responsive, user-centric solutions and collaborating with cross-functional teams to achieve project excellence.
        </p>
        <p>
          ✨Currently working as Software Development Engineer 1 at
          Clover Bay Technologies.
          🎓 Graduated with a Bachelor of Technology - Computer Science and Engineering from Parul University Vadodara Gujarat.{" "}
        </p>
        <p>
          With a strong foundation in web technologies and frameworks like ReactJS, NextJS, and VueJS, I bring expertise in creating efficient, scalable, and user-friendly applications. I am skilled in unit testing, agile methodologies, and DevOps practices. My experience spans domains such as telecommunications, finance, and healthcare, enabling me to tackle diverse technical challenges.

        </p>
        <p>
          🔧 Hold several certificates in key areas including Git-GitHub,
          Building Responsive Pages, JavaScript, and SQL. My
          certifications come from esteemed platforms like scaler, Attainu and HackerRank.
        </p>
        <p>
          🎓 Completed courses in "Mastering the Software Developer Engineer," "MERN stack development course".
        </p>
      </section>

      {/* <!--- service --> */}
      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-design.svg"
                alt="design icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Front-End Development</h4>
              <p className="service-item-text">
                The most modern and high-quality, responsive client-side (UI),
                and interactive web pages made at a professional level.
              </p>
              <div className="flex gap-3 mt-3">
                <img
                  src="/assets/images/tools/html.webp"
                  className="w-5"
                  alt="html"
                />
                <img
                  src="/assets/images/tools/css.svg"
                  className="w-5"
                  alt="CSS"
                />
                <img
                  src="/assets/images/tools/Java.png"
                  className="w-5"
                  alt="Java"
                />
                <img
                  src="/assets/images/tools/JS.webp"
                  className="w-5"
                  alt="JS"
                />
                <img
                  src="/assets/images/tools/Tailwindcss.png"
                  className="w-5"
                  alt="Tailwindcss"
                />
                <img
                  src="/assets/images/tools/ReactJS.webp"
                  className="w-5"
                  alt="ReactJS"
                />
              </div>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-app.svg"
                alt="mobile app icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Back-End Development</h4>
              <p className="service-item-text">
                Handles professional server-side authentication, business logic,
                and APIs, and designs, implements, and manages databases.
              </p>
              <div className="flex gap-3 mt-3">
                <img
                  src="/assets/images/tools/NodeJS.png"
                  className="w-5"
                  alt="NodeJS"
                />
                <img
                  src="/assets/images/tools/ExpressJS.webp"
                  className="w-5"
                  alt="ExpressJS"
                />
                <img
                  src="/assets/images/tools/MongoDB.svg"
                  className="w-5"
                  alt="MongoDB"
                />
                <img
                  src="/assets/images/tools/firebase.png"
                  className="w-5"
                  alt="firebase"
                />
                <img
                  src="/assets/images/tools/cloudinary-icon.png"
                  className="w-5"
                  alt="cloudinary-icon"
                />
                <img
                  src="/assets/images/tools/postman.svg"
                  className="w-5"
                  alt="postman"
                />
              </div>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-dev.svg"
                alt="React-JS icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Full-Stack React-JS</h4>
              <p className="service-item-text">
                Handle both client-side (UI) and server-side (business logic,
                database) tasks, Deploy web apps to servers, allowing them to
                create a complete web application from scratch.
              </p>
              <p className="service-item-text">
                Git and GitHub to manage code versions, collaborate with teams,
                and review/merge code efficiently.
              </p>
              <div className="flex gap-3 mt-3 flex-wrap">
                <img
                  src="/assets/images/tools/html.webp"
                  className="w-5"
                  alt="html"
                />
                <img
                  src="/assets/images/tools/css.svg"
                  className="w-5"
                  alt="CSS"
                />
                <img
                  src="/assets/images/tools/Java.png"
                  className="w-5"
                  alt="Java"
                />
                <img
                  src="/assets/images/tools/JS.webp"
                  className="w-5"
                  alt="JS"
                />
                <img
                  src="/assets/images/tools/Tailwindcss.png"
                  className="w-5"
                  alt="Tailwindcss"
                />
                <img
                  src="/assets/images/tools/ReactJS.webp"
                  className="w-5"
                  alt="ReactJS"
                />

                <img
                  src="/assets/images/tools/NodeJS.png"
                  className="w-5"
                  alt="NodeJS"
                />
                <img
                  src="/assets/images/tools/ExpressJS.webp"
                  className="w-5"
                  alt="ExpressJS"
                />
                <img
                  src="/assets/images/tools/MongoDB.svg"
                  className="w-5"
                  alt="MongoDB"
                />
                <img
                  src="/assets/images/tools/firebase.png"
                  className="w-5"
                  alt="firebase"
                />
                <img
                  src="/assets/images/tools/cloudinary-icon.png"
                  className="w-5"
                  alt="cloudinary-icon"
                />

                <img
                  src="/assets/images/tools/Git_icon.png"
                  className="w-5"
                  alt="Git_icon"
                />
                <img
                  src="/assets/images/tools/gitHub.png"
                  className="w-5"
                  alt="gitHub"
                />
                <img
                  src="/assets/images/tools/postman.svg"
                  className="w-5"
                  alt="postman"
                />
                <img
                  src="/assets/images/tools/Visual_Studio_Code.png"
                  className="w-5"
                  alt="Visual_Studio_Code"
                />
              </div>
            </div>
          </li>
        </ul>
      </section>

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
            <h4 className="h4 timeline-item-title">Programming Languages:</h4>
            <div className="flex gap-3 flex-wrap mt-3">
              <img
                src="/assets/images/tools/html.webp"
                className="w-16"
                alt="html"
              />
              <img
                src="/assets/images/tools/css.svg"
                className="w-16"
                alt="CSS"
              />
              <img
                src="/assets/images/tools/Java.png"
                className="w-16"
                alt="Java"
              />
              <img
                src="/assets/images/tools/JS.webp"
                className="w-16"
                alt="JS"
              />
              <img
                src="/assets/images/tools/NodeJS.png"
                className="w-16"
                alt="NodeJS"
              />
            </div>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Frameworks & Libraries:</h4>
            <div className="flex gap-3 flex-wrap mt-3">
              <img
                src="/assets/images/tools/Tailwindcss.png"
                className="w-16"
                alt="Tailwindcss"
              />
              <img
                src="/assets/images/tools/ReactJS.webp"
                className="w-16"
                alt="ReactJS"
              />
              <img
                src="/assets/images/tools/ExpressJS.webp"
                className="w-16"
                alt="ExpressJS"
              />
              <img
                src="/assets/images/tools/MongoDB.svg"
                className="w-16"
                alt="MongoDB"
              />
              <img
                src="/assets/images/tools/firebase.png"
                className="w-16"
                alt="firebase"
              />
              <img
                src="/assets/images/tools/cloudinary-icon.png"
                className="w-16"
                alt="cloudinary-icon"
              />
            </div>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Tools:</h4>
            <div className="flex gap-3 flex-wrap mt-3">
              <img
                src="/assets/images/tools/Git_icon.png"
                className="w-16"
                alt="Git_icon"
              />
              <img
                src="/assets/images/tools/gitHub.png"
                className="w-16"
                alt="gitHub"
              />
              <img
                src="/assets/images/tools/postman.svg"
                className="w-16"
                alt="postman"
              />
              <img
                src="/assets/images/tools/Visual_Studio_Code.png"
                className="w-16"
                alt="Visual_Studio_Code"
              />
            </div>
          </li>
        </ol>
      </section>

    </article>
  );
};

export default About;
