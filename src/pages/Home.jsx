import { Link } from "react-router-dom";

export default function Home() {
  const projects = [
    {
      name: "ReactFrameworkCA",
      description:
        "A school project built to demonstrate that I can create a functional website using the React framework.",
      language: "React.js + CSS",
      url: "https://github.com/Ole12345678910/ReactFrameworkCA",
      live: "https://react-ca.netlify.app/",
      image: "/reeact-ca2.png",
      route: "/project/reactframeworkca",
    },
    {
      name: "Project-2-Exam",
      description:
        "An exam project using Tailwind CSS and JavaScript. A bidding website where users can log in, create listings, and place bids.",
      language: "JavaScript + HTML + Tailwind",
      url: "https://github.com/Ole12345678910/Project-2-Exam",
      live: "https://diamondbid.netlify.app/",
      image: "/diamondbid2.png",
      route: "/project/projectexam2",
    },
    {
      name: "FCAJS2",
      description:
        "A website built with Tailwind and a JavaScript framework where users can log in, create posts, comment, and react to content.",
      language: "JavaScript + HTML + Tailwind",
      url: "https://github.com/Ole12345678910/FCAJS2",
      live: "https://fcajs2-css-frameworks.netlify.app/",
      image: "/fcajs2-css-frameworks2.png",
      route: "/project/fcajs2",
    },
  ];

  return (
    <main className="flex-1 max-w-7xl mx-auto p-4">
      <section
        id="about"
        className="mb-12 mx-auto bg-white p-6 rounded-xl shadow-md"
      >
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                fill="none"
                shapeRendering="auto"
                width="62"
                height="62"
              >
                <metadata
                  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xmlns:dc="http://purl.org/dc/elements/1.1/"
                  xmlns:dcterms="http://purl.org/dc/terms/"
                >
                  <rdf:RDF>
                    <rdf:Description>
                      <dc:title>Fun Emoji Set</dc:title>
                      <dc:creator>Davis Uche</dc:creator>
                      <dc:source xsi:type="dcterms:URI">
                        https://www.figma.com/community/file/968125295144990435
                      </dc:source>
                      <dcterms:license xsi:type="dcterms:URI">
                        https://creativecommons.org/licenses/by/4.0/
                      </dcterms:license>
                      <dc:rights>
                        Remix of „Fun Emoji Set”
                        (https://www.figma.com/community/file/968125295144990435)
                        by „Davis Uche”, licensed under „CC BY 4.0”
                        (https://creativecommons.org/licenses/by/4.0/)
                      </dc:rights>
                    </rdf:Description>
                  </rdf:RDF>
                </metadata>
                <mask id="viewboxMask">
                  <rect
                    width="200"
                    height="200"
                    rx="0"
                    ry="0"
                    x="0"
                    y="0"
                    fill="#fff"
                  />
                </mask>
                <g mask="url(#viewboxMask)">
                  <rect fill="#d1d4f9" width="200" height="200" x="0" y="0" />
                  <g transform="matrix(1.5625 0 0 1.5625 37.5 110.94)">
                    <path
                      d="M40.54 30h-.75c-9.7-.22-20.8-5.3-23.7-16.15a1.36 1.36 0 0 1 .44-1.55 1.41 1.41 0 0 1 2.26.86c2.55 9.46 12.42 13.89 21.06 14.08 8.24.16 19.04-3.84 22.46-14.57a1.47 1.47 0 0 1 1.65-.55A1.44 1.44 0 0 1 65 13.5C61.85 23.31 52.3 30 40.54 30Z"
                      fill="#000"
                    />
                  </g>
                  <g transform="matrix(1.5625 0 0 1.5625 31.25 59.38)">
                    <path
                      d="M75.84 21.11c-2.9.04-5.72-.89-8.04-2.63a13.47 13.47 0 0 1-4.85-7.03 1.75 1.75 0 0 1 1.1-2.26 1.68 1.68 0 0 1 1.86.61c.14.2.24.4.3.64.6 2.11 1.87 3.97 3.61 5.28a9.84 9.84 0 0 0 6.04 1.98c2.17.01 4.29-.68 6.03-2a10.17 10.17 0 0 0 3.65-5.26c.15-.42.46-.75.85-.95a1.68 1.68 0 0 1 2.23.7c.21.38.27.83.17 1.26a13.48 13.48 0 0 1-4.87 7.04 13.17 13.17 0 0 1-8.08 2.62ZM13.84 21.11c-2.9.03-5.73-.9-8.06-2.65a13.54 13.54 0 0 1-4.85-7.05 1.78 1.78 0 0 1 .51-1.88 1.67 1.67 0 0 1 2.4.22c.15.17.25.38.32.6.62 2.1 1.9 3.96 3.64 5.28a9.93 9.93 0 0 0 6.02 2c2.18.03 4.3-.67 6.06-1.99a10.21 10.21 0 0 0 3.66-5.3 1.68 1.68 0 0 1 3.08-.25c.21.4.27.85.17 1.27a13.57 13.57 0 0 1-4.86 7.1 13.19 13.19 0 0 1-8.1 2.65Z"
                      fill="#000"
                    />
                  </g>
                </g>
              </svg>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Ole-Martin Bull
              </h3>
            </div>
            <h4 className="card-title-text">About me</h4>
            <p className="text-gray-700 mb-4">
              I’m a frontend developer passionate about building responsive,
              user-friendly websites using modern tools like React and Tailwind
              CSS.
            </p>
            <p className="text-gray-700 mb-4">
              When I’m not coding, I enjoy gaming, exploring technology, and
              learning more about Linux and server setups.
            </p>

            <h4 className="card-title-text">Tech Stack</h4>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Languages: HTML, CSS, JavaScript</li>
              <li>Frameworks: React, Tailwind CSS</li>
              <li>Tools: Figma, Git, VS Code</li>
              <li>Other: Linux basics, basic server setup</li>
            </ul>

            <h4 className="card-title-text">Work Style & Values</h4>
            <p className="text-gray-700 mb-4">
              I value clean, maintainable code and accessibility. I enjoy
              collaborating with others and solving real-world problems with
              simple, elegant solutions. Continuous learning is important to me.
            </p>

            <div className="flex gap-6">
              <a
                href="https://github.com/Ole12345678910"
                target="_blank"
                rel="noopener noreferrer"
                className="githublink"
              >
                GitHub Profile
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              📍 Norway · 🎮 Gamer · 💻 Code Enthusiast
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="card-container">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((repo, i) => (
            <div key={i} className="card-styling">
              <Link to={repo.route}>
                <h3 className="text-card-styling">{repo.name}</h3>
                <img src={repo.image} alt={repo.name} className="card-image" />
                <hr className="article-line" />
                <p className="card-description">{repo.description}</p>
                <p className="language-text">Language: {repo.language}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
