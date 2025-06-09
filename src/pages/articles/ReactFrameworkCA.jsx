export default function ReactFrameworkCA() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">ReactFrameworkCA</h1>

      <img
        src="/public/reeact-ca2.png"
        alt="ReactFrameworkCA"
        className="mb-4 rounded"
      />

      <p className="mb-4">
        This project was created as part of a school assignment to demonstrate
        my ability to build a functional web application using React.
      </p>
      <p className="mb-4">
        The goal was to consume data from an external API, display products, and
        implement cart functionality.
      </p>
      <p className="mb-4">
        Users can browse items and add them to a cart. I structured the app
        using reusable components and managed state with React's built-in hooks.
      </p>
      <p>The layout was designed to be clean, responsive, and user-friendly.</p>

      {/* Project Links */}
      <p className="mt-4 space-x-4">
        <a
          href="https://react-ca.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Live Site →
        </a>
        <a
          href="https://github.com/Ole12345678910/ReactFrameworkCA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 underline"
        >
          GitHub →
        </a>
        <a
          href="https://github.com/Ole12345678910/ReactFrameworkCA/blob/main/README.md"
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
        I improved the structure and used routing. I learned better component
        reuse and state handling. The UI was refined using Tailwind CSS for
        responsive layout and cleaner styling.
      </p>
    </div>
  );
}
