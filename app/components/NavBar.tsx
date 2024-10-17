import Image from "next/image";
import PurpleIcon from "../img/logo/intrahacktive-logo-purple-white.png";
import Link from "next/link";

// import styles from "@/app/styles.module.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {/* Logo for medium and large screens  */}
        <Link className="navbar-brand logo d-none d-lg-block" href="/">
          <Image src={PurpleIcon} alt="" />
        </Link>
        {/* Logo for small screens  */}
        <Link className="icon-logo d-block d-lg-none" href="/">
          <Image src={PurpleIcon} alt="" />
        </Link>

        {/* Button for toggling the navbar */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Guidelines
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    id="hackathonNavItem"
                    className="dropdown-item"
                    href="guidelines#pills-hackathon-tab"
                  >
                    Hackathon
                  </Link>
                </li>
                <li>
                  <Link
                    id="debuggersNavItem"
                    className="dropdown-item"
                    href="guidelines#pills-debuggers-tab"
                  >
                    Debuggers
                  </Link>
                </li>
                <li>
                  <Link
                    id="databaseWizardNavItem"
                    className="dropdown-item"
                    href="guidelines#pills-database-wizards-tab"
                  >
                    Database Wizards
                  </Link>
                </li>
                <li>
                  <Link
                    id="competitiveProgrammingNavItem"
                    className="dropdown-item"
                    href="guidelines#pills-cpc-tab"
                  >
                    Competitive Programming
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="registration">
                Registration
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
