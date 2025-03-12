"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "What We Do",
      path: "#",
      submenu: [
        { name: "Annual Convention", path: "/annual-convention" },
        { name: "Charitable Activities", path: "/charitable-activities" },
      ],
    },
    {
      name: "Who We Are",
      path: "#",
      submenu: [
        { name: "About Us", path: "/about-us" },
        { name: "ATMA Chapters", path: "/atma-chapters" },
      ],
    },
    { name: "Gallery", path: "/gallery" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact" },
    { name: "Donations", path: "/donate" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenSubMenu(null); // Close any open submenus when the main menu is toggled
  };

  const toggleSubMenu = (index) => {
    if (openSubMenu === index) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logoContainer}>
            <Image
              className={`${styles.logo} py-2`}
              src="/logos/logo.png"
              alt="Logo"
              width={300}
              height={100}
            />
          </Link>
          {/* Menu icon for mobile */}
          <div
            className={`${styles.menuIcon} ${
              isMobileMenuOpen ? styles.open : ""
            }`}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <FiX />
            ) : (
              <Image
                src="/menu.svg"
                alt="menu"
                width={30}
                height={30}
                className={styles.menuIconImage}
                priority="true"
              />
            )}
          </div>
          {/* Main Navigation */}
          <nav
            className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ""}`}
          >
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className={`${styles.navItem} ${
                  item.submenu ? styles.hasSubmenu : ""
                }`}
                onMouseEnter={() =>
                  !isMobileMenuOpen && item.submenu && setOpenSubMenu(index)
                }
                onMouseLeave={() =>
                  !isMobileMenuOpen && item.submenu && setOpenSubMenu(null)
                }
              >
                <Link
                  href={item.path}
                  className={
                    pathname === item.path
                      ? styles.activeNavLink
                      : styles.navLink
                  }
                  onClick={(e) => {
                    if (item.submenu) {
                      e.preventDefault(); // Prevent default navigation for items with submenus
                      toggleSubMenu(index); // Toggle submenu on click in mobile view
                    } else {
                      setIsMobileMenuOpen(false); // Close menu for links without submenus
                    }
                  }}
                >
                  {item.name}
                  {item.submenu && (
                    <FiChevronDown className={styles.submenuIcon} />
                  )}
                </Link>

                {/* Submenu */}
                {item.submenu && (
                  <div
                    className={`${styles.submenu} ${
                      openSubMenu === index ? styles.open : ""
                    }`}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.path}
                        className={styles.submenuLink}
                        onClick={() => {
                          setIsMobileMenuOpen(false); // Close entire menu after selecting a submenu item
                          setOpenSubMenu(null);
                        }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <Link href="/donate" className={styles.donationButton}>
            <Button
              text="Donations"
              bgColor="var(--primary)"
              color="var(--color-white)"
              hoverBgColor="var(--secondary)"
              hoverTextColor="var(--color-black)"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
