export default function FCAJS2() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">FCAJS2</h1>

      <img
        src="/public/fcajs2-css-frameworks2.png"
        alt="FCAJS2"
        className="mb-4 rounded"
      />

      <p className="mb-4">
        This project was created to demonstrate my ability to build a dynamic
        web application using a JavaScript framework and Tailwind CSS.
      </p>
      <p className="mb-4">
        The goal was to simulate a simple social media experience where users
        can create posts, leave comments, and react to content. Features include
        user authentication (login/logout), post creation, commenting, and
        reactions like likes and emojis.
      </p>
      <p className="mb-4">
        I used Tailwind CSS for styling, which helped me quickly create a
        responsive and clean UI. The layout adapts well across screen sizes and
        provides a smooth user experience.
      </p>
      <p className="mb-4">
        This project helped me grow more confident in managing frontend logic,
        working with state, and handling user data. I also learned how to
        structure reusable components and improve overall project organization.
      </p>

      {/* Prosjektlenker */}
      <p className="mt-4 space-x-4">
        <a
          href="https://fcajs2-css-frameworks.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Live Site →
        </a>
        <a
          href="https://github.com/Ole12345678910/FCAJS2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 underline"
        >
          GitHub →
        </a>
        <a
          href="https://github.com/Ole12345678910/FCAJS2/blob/main/README.md"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 underline"
        >
          View README →
        </a>
      </p>

      {/* Selv-evaluering */}
      <h2 className="text-xl font-semibold mt-6">
        Self-assessment & improvements
      </h2>
      <p>
        I improved the comment logic, added better user flow handling, and
        refactored components to make them cleaner and more reusable. I also
        improved accessibility and responsiveness.
      </p>
    </div>
  );
}
