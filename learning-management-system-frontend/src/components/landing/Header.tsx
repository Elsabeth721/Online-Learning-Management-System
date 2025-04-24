import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="py-4 px-4 md:px-6 flex items-center justify-between fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-2xl font-bold !text-indigo-950">
          EduElevate
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-md font-medium !text-gray-600 hover:!text-indigo-600"
          >
            Home
          </Link>
          <a
            href="#courses"
            className="text-md font-medium !text-gray-600 hover:!text-indigo-600"
          >
            Courses
          </a>
          <a
           href="#learning-journey"
            className="text-md font-medium !text-gray-600 hover:!text-indigo-600"
          >
            How it works
          </a>
          <a
            href="#contact"
            className="text-md font-medium !text-gray-600 hover:!text-indigo-600"
          >
            Contact us
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Link
          to="/signin"
          className="text-md font-medium !text-gray-600 hover:!text-indigo-600"
        >
          Sign in
        </Link>
        <Link to="/signup">
          <Button className="!bg-indigo-950 hover:!bg-indigo-800 text-white">
            Sign up
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;