'use client';

import { Link, useRouter } from "waku";
import DarkModeToggle from "./darkmodetoggle";

const Navbar: React.FC = () => {
  const { path } = useRouter();
  return (
    <nav className="border-b border-primary-200 dark:border-primary-700 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/">
          <div className="text-xl font-bold font-sans text-primary-800 dark:text-primary-100">
            Richard Oliver Bray
          </div>
        </Link>
        <div className="flex items-center space-x-6">
          <Link
            to="/blog"
            className={`text-primary-600 hover:text-primary-800 dark:text-primary-300 dark:hover:text-primary-100 transition-colors font-sans text-lg ${path === '/blog' ? 'font-bold' : ''}`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`text-primary-600 hover:text-primary-800 dark:text-primary-300 dark:hover:text-primary-100 transition-colors font-sans text-lg ${path === '/contact' ? 'font-bold' : ''}`}
          >
            Contact
          </Link>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
