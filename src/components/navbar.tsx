import { Link } from "waku";

const Navbar: React.FC = () => {
  return (
    <nav className="border-b border-primary-200 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/">
          <div className="text-xl font-bold font-sans text-primary-800">
            Make Better Content
          </div>
        </Link>
        <div className="flex space-x-6">
          <Link to="/blog" className="text-primary-600 hover:text-primary-800 transition-colors font-sans">
            Blog
          </Link>
          <Link to="/contact" className="text-primary-600 hover:text-primary-800 transition-colors font-sans">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
