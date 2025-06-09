export default function Footer() {
  return (
    <footer className="footer-container">
      <p>&copy; {new Date().getFullYear()} Ole's Portfolio. All rights reserved.</p>
      <p className="mt-2">
        Avatar style “Fun Emoji” by Davis Uche, licensed under{" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-links"
        >
          CC BY 4.0
        </a>.
      </p>
      <p className="mt-1">
        Background image by{" "}
        <a
          href="https://www.freepik.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-links"
        >
          Freepik
        </a>.
      </p>
    </footer>
  );
}
