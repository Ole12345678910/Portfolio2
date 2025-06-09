export default function ProjectExam2() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Project-2-Exam</h1>

      <img
        src="/public/diamondbid2.png"
        alt="Project-2-Exam"
        className="mb-4 rounded"
      />

      <p className="mb-4">
        This was my final exam project, where I built a fully functional bidding
        website. I used Tailwind CSS for styling and plain JavaScript for all
        functionality.
      </p>
      <p className="mb-4">
        The main goal was to demonstrate my understanding of front-end
        development without relying on frameworks like React. Users can
        register, log in/out, create bid listings, and place bids on others'
        listings.
      </p>
      <p className="mb-4">
        The site also includes input validation, API communication, and state
        management. I focused on creating a responsive layout and a clean,
        user-friendly experience.
      </p>
      <p className="mb-4">
        This project helped me improve my skills in working with REST APIs,
        handling forms and authentication flows manually, and writing
        maintainable code with Tailwind CSS.
      </p>

      {/* Project Links */}
      <p className="mt-4 space-x-4">
        <a
          href="https://diamondbid.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Live Site →
        </a>
        <a
          href="https://github.com/Ole12345678910/Project-2-Exam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 underline"
        >
          GitHub →
        </a>
        <a
          href="https://github.com/Ole12345678910/Project-2-Exam/blob/main/README.md"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 underline"
        >
          View README →
        </a>
      </p>

      {/* Self-assessment */}
      <h2 className="text-xl font-semibold mt-6">
        Self-assessment & Improvements
      </h2>
      <p>
        I added form validation, improved responsiveness, and made UI
        enhancements based on the feedback I received. I also improved the
        structure of the codebase and made the site more user-friendly and
        accessible.
      </p>
    </div>
  );
}
