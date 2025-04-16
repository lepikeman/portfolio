export default function Footer() {
  return (
    <footer className="w-full py-8 bg-base-200 text-center border-t border-base-300 mt-20">
      <div className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Axel Xhaflaire · Tous droits réservés
      </div>
      <div className="mt-2 flex justify-center gap-6">
        <a
          href="https://linkedin.com/in/xhaflaireaxel"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/lepikeman"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a href="mailto:xhaflaire.axel@gmail.com" className="hover:underline">
          Mail
        </a>
      </div>
    </footer>
  );
}
