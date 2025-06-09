export default function FCAJS2() {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "FCAJS2 Project",
          text: "Check out this social media project I built!",
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
      <h1 className="article-title">FCAJS2</h1>

      <img
        src="/fcajs2-css-frameworks2.png"
        alt="FCAJS2"
        className="article-img"
      />
      <hr className="article-line"/>
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

      {/* Project links and share button inline */}
      <p className="article-link-container">
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
