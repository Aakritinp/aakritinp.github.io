import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-pink-200 shadow-lg py-4">
      <ul className="flex justify-center space-x-8 text-pink-900 font-semibold">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-pink-600"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-pink-600"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-pink-600"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-pink-600"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
