"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DesktopNavigationMenu,
  DesktopNavigationMenuContent,
  DesktopNavigationMenuItem,
  DesktopNavigationMenuList,
  DesktopNavigationMenuTrigger,
} from "@/components/ui/navigation-menu-navbar";
import { ChevronDown, ChevronsUpDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PurpleIcon from "../img/logo/intrahacktive-icon-purple.png";
import PurpleLogo from "../img/logo/intrahacktive-logo-purple-white.png";

// import styles from "@/app/styles.module.css";

export default function NavBar() {
  return (
    // Navbar
    <nav className="navbar  navbar-dark bg-primary">
      <div className="flex items-center justify-between w-full px-4">
        {/* Logo for medium and large screens  */}
        <Link className="navbar-brand logo max-md:hidden " href="/">
          <Image src={PurpleLogo} alt="" />
        </Link>
        {/* Logo for small screens  */}
        <Link className="icon-logo md:hidden" href="/">
          <Image src={PurpleIcon} alt="" />
        </Link>

        {/* Navigation for small screens */}
        <NavigationMenu className="md:hidden">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="navbar-toggler"></NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/">Home</NavigationMenuLink>
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between">
                    <p onClick={() => (window.location.href = "/guidelines")}>
                      Guidelines
                    </p>{" "}
                    <ChevronsUpDownIcon className="ml-16" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="CollapsibleContent flex flex-col gap-4 ml-4">
                    <Link
                      onClick={() =>
                        (window.location.href = "/guidelines#pills-hackathon")
                      }
                      id="hackathonNavItem"
                      className="dropdown-item mt-4"
                      href="/guidelines#pills-hackathon"
                    >
                      Hackathon
                    </Link>
                    <Link
                      onClick={() =>
                        (window.location.href = "/guidelines#pills-debuggers")
                      }
                      id="debuggersNavItem"
                      className="dropdown-item"
                      href="/guidelines#pills-debuggers"
                    >
                      Debuggers
                    </Link>
                    <Link
                      onClick={() =>
                        (window.location.href =
                          "/guidelines#pills-database-wizards")
                      }
                      id="databaseWizardNavItem"
                      className="dropdown-item"
                      href="/guidelines#pills-database-wizards"
                    >
                      Database Wizards
                    </Link>
                  </CollapsibleContent>
                </Collapsible>
                <NavigationMenuLink href="/registration">
                  Registration
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Navigation for medium and large screens */}
        <div className="flex items-center gap-4 max-md:hidden">
          <Link
            className="text-[rgba(255,255,255,0.55)] font-semibold"
            href={"/"}
          >
            Home
          </Link>
          <DesktopNavigationMenu>
            <DesktopNavigationMenuList>
              <DesktopNavigationMenuItem>
                <DesktopNavigationMenuTrigger className="text-[rgba(255,255,255,0.55)] font-semibold bg-none hover:bg-none focus:bg-none flex items-center">
                  Guidelines <ChevronDown size={16} className="ml-2" />
                </DesktopNavigationMenuTrigger>
                <DesktopNavigationMenuContent>
                  <Link
                    onClick={() =>
                      (window.location.href = "/guidelines#pills-hackathon")
                    }
                    id="hackathonNavItem"
                    className="dropdown-item p-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors duration-75"
                    href="/guidelines#pills-hackathon"
                  >
                    Hackathon
                  </Link>
                  <Link
                    onClick={() =>
                      (window.location.href = "/guidelines#pills-debuggers")
                    }
                    id="debuggersNavItem"
                    className="dropdown-item p-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors duration-75"
                    href="/guidelines#pills-debuggers"
                  >
                    Debuggers
                  </Link>
                  <Link
                    onClick={() =>
                      (window.location.href =
                        "/guidelines#pills-database-wizards")
                    }
                    id="databaseWizardNavItem"
                    className="dropdown-item p-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors duration-75"
                    href="/guidelines#pills-database-wizards"
                  >
                    Database Wizards
                  </Link>
                </DesktopNavigationMenuContent>
              </DesktopNavigationMenuItem>
            </DesktopNavigationMenuList>
          </DesktopNavigationMenu>
          <Link
            className="text-[rgba(255,255,255,0.55)] font-semibold"
            href={"/registration"}
          >
            Registration
          </Link>
        </div>

        {/* LEGACY NAVIGATION FOR MOBILE */}
        {/* Button for toggling the navbar */}
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* Navbar links */}
        {/* <div className="collapse navbar-collapse" id="navbarNav">
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
                    onClick={() =>
                      (window.location.href = "/guidelines#pills-hackathon")
                    }
                    id="hackathonNavItem"
                    className="dropdown-item"
                    href="/guidelines#pills-hackathon"
                  >
                    Hackathon
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() =>
                      (window.location.href = "/guidelines#pills-debuggers")
                    }
                    id="debuggersNavItem"
                    className="dropdown-item"
                    href="/guidelines#pills-debuggers"
                  >
                    Debuggers
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() =>
                      (window.location.href =
                        "/guidelines#pills-database-wizards")
                    }
                    id="databaseWizardNavItem"
                    className="dropdown-item"
                    href="/guidelines#pills-database-wizards"
                  >
                    Database Wizards
                  </Link>
                </li> */}
        {/* <li>
                  <Link
                  onClick={() =>
                    (window.location.href = "/guidelines#pills-cpc")
                  }
                    id="competitiveProgrammingNavItem"
                    className="dropdown-item"
                    href="/guidelines#pills-cpc"
                  >
                    Competitive Programming
                  </Link>
                </li> */}
        {/* </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/registration">
                Registration
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
}
