export default function ProjectExam2() {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Project-2-Exam",
          text: "Check out this bidding website project I built!",
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
      <h1 className="article-title">Project-2-Exam</h1>

      <img
        src="/diamondbid2.png"
        alt="Project-2-Exam"
        className="article-img"
      />
      <hr className="article-line"/>
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

      {/* Project Links and Share Button inline */}
      <p className="article-link-container">
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
