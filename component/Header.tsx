// "use client";

// export default function Header() {
//   return (
//     <header className="header-area">
//       <div id="navigation" className="navigation navigation-landscape">
//         <div className="container position-relative">
//           <div className="row align-items-center">
//             {/* Logo */}
//             <div className="col-lg-3 col-6">
//               <div className="header-logo">
//                 <a href="/">
//                   <img
//                     src="https://www.ipathsala.com/images/ipathsala-logo.png"
//                     alt="ipathsala-logo"
//                   />
//                 </a>
//               </div>
//             </div>

//             {/* Navigation */}
//             <div className="col-lg-9 col-6">
//               <div className="nav-toggle"></div>

//               <nav
//                 className="nav-menus-wrapper"
//                 id="topManu"
//                 style={{ float: "right", transitionProperty: "none" }}>
//                 <span className="nav-menus-wrapper-close-button sidemenu_btn">
//                   ✕
//                 </span>

//                 <ul className="nav-menu">
//                   <li>
//                     <a id="HOME-top" href="/">
//                       HOME
//                     </a>
//                   </li>
//                   <li>
//                     <a id="about-us-top" href="/about-us">
//                       ABOUT US
//                     </a>
//                   </li>
//                   <li>
//                     <a id="course-top" href="/hotel-courses">
//                       HOTEL COURSES
//                     </a>
//                   </li>
//                   <li>
//                     <a id="courses-top" href="/software-courses">
//                       SOFTWARE COURSES
//                     </a>
//                   </li>
//                   <li>
//                     <a id="event-top" href="/event" className="active">
//                       EVENTS
//                     </a>
//                   </li>
//                   <li>
//                     <a id="contact-us-top" href="/contact-us">
//                       CONTACT US
//                     </a>
//                   </li>
//                   <li>
//                     <a id="APPLY-NOW-top" href="/apply-now">
//                       APPLY NOW
//                     </a>
//                   </li>
//                   <li>
//                     <a id="seminar-top" href="/seminar">
//                       Seminar
//                     </a>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const HeaderLandscape = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null); // Add ref for overlay

  useEffect(() => {
    const navElement = navRef.current;
    const menuElement = menuRef.current;
    const toggleElement = toggleRef.current;
    const overlayElement = overlayRef.current;

    if (!navElement || !menuElement || !toggleElement || !overlayElement)
      return;

    const updateNavigationClass = () => {
      if (window.innerWidth > 991) {
        navElement.classList.remove("navigation-portrait");
        navElement.classList.add("navigation-landscape");
      } else {
        navElement.classList.remove("navigation-landscape");
        navElement.classList.add("navigation-portrait");
      }
    };

    updateNavigationClass();
    window.addEventListener("resize", updateNavigationClass);

    const openMenu = () => {
      menuElement.classList.add("nav-menus-wrapper-open");
      overlayElement.style.display = "block";

      menuElement.style.transitionProperty = "left";
      menuElement.style.transitionDuration = "0.6s";
      menuElement.style.transitionTimingFunction = "ease-in-out";
    };

    const closeMenu = () => {
      menuElement.classList.remove("nav-menus-wrapper-open");
      overlayElement.style.display = "none";

      menuElement.style.transitionProperty = "left";
      menuElement.style.transitionDuration = "0.6s";
      menuElement.style.transitionTimingFunction = "ease-in-out";

      const onTransitionEnd = () => {
        menuElement.style.transitionProperty = "none";
        menuElement.removeEventListener("transitionend", onTransitionEnd);
      };
      menuElement.addEventListener("transitionend", onTransitionEnd);
    };

    const handleToggle = () => {
      if (menuElement.classList.contains("nav-menus-wrapper-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    };

    toggleElement.addEventListener("click", handleToggle);

    const closeButton = menuElement.querySelector(
      ".nav-menus-wrapper-close-button"
    );
    if (closeButton) {
      closeButton.addEventListener("click", handleToggle);
    }

    overlayElement.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("resize", updateNavigationClass);
      toggleElement.removeEventListener("click", handleToggle);
      if (closeButton) {
        closeButton.removeEventListener("click", handleToggle);
      }
      overlayElement.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <header className="header-area">
      <div
        id="navigation"
        ref={navRef}
        className="navigation sticky navigation-landscape">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-3 col-6">
              <div className="header-logo">
                <Link href="/">
                  <Image
                    src="/Images/ipathsala-logo.png"
                    alt="ipathsala-logo"
                    width={180}
                    height={60}
                    priority
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-9 col-6">
              <div ref={toggleRef} className="nav-toggle"></div>

              <nav
                ref={menuRef}
                className="nav-menus-wrapper"
                id="topManu"
                style={{ float: "right", transitionProperty: "none" }}>
                <span className="nav-menus-wrapper-close-button sidemenu_btn">
                  ✕
                </span>

                <ul className="nav-menu">
                  <li>
                    <Link id="HOME-top" href="/">
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link id="about-us-top" href="/about-us" className="active">
                      ABOUT US
                    </Link>
                  </li>
                  <li>
                    <Link id="course-top" href="/hotel-courses">
                      HOTEL COURSES
                    </Link>
                  </li>
                  <li>
                    <Link id="courses-top" href="/software-courses">
                      SOFTWARE COURSES
                    </Link>
                  </li>
                  <li>
                    <Link id="event-top" href="/event">
                      EVENTS
                    </Link>
                  </li>
                  <li>
                    <Link id="contact-us-top" href="/contact-us">
                      CONTACT US
                    </Link>
                  </li>
                  <li>
                    <Link id="APPLY-NOW-top" href="/apply-now">
                      APPLY NOW
                    </Link>
                  </li>
                  <li>
                    <Link id="seminar-top" href="/seminar">
                      Seminar
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Overlay panel - controlled by JS */}
          <div
            ref={overlayRef}
            className="nav-overlay-panel"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "none", // Initially hidden
            }}></div>
        </div>
      </div>
    </header>
  );
};

export default HeaderLandscape;
