export default function ReactFrameworkCA() {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "ReactFrameworkCA",
          text: "Check out this React product shop project I built!",
          url: window.location.href,
        })
        .catch((err) => console.error("Share failed:", err));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="article-container">
      <h1 className="article-title">ReactFrameworkCA</h1>

      <img
        src="/reeact-ca2.png"
        alt="ReactFrameworkCA"
        className="article-img"
      />
      <hr className="article-line" />

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

      {/* Project Links and Share Button inline */}
      <p className="article-link-container">
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
        <button
          onClick={handleShare}
          className="share-btn"
          aria-label="Share this project"
        >
          Share →
        </button>
      </p>
    </div>
  );
}
