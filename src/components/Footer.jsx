export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 text-center p-4 mt-8 text-sm">
      <p>&copy; {new Date().getFullYear()} Ole's Portfolio. All rights reserved.</p>
      <p className="mt-2">
        Avatar style “Fun Emoji” by Davis Uche, licensed under{" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-400"
        >
          CC BY 4.0
        </a>.
      </p>
    </footer>
  );
}
