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

import Image from "next/image";
import Link from "next/link";

const HeaderLandscape = () => {
  return (
    <header className="header-area">
      {/* Header Top (commented as original HTML) */}
      {/*
      <div className="header-top">
        <div className="container">
          <div className="header-top-wrapper d-flex flex-wrap justify-content-sm-between">
          </div>
        </div>
      </div>
      */}

      <div id="navigation" className="navigation sticky navigation-landscape">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-3 col-6">
              <div className="header-logo">
                <Link href="https://www.ipathsala.com">
                  <Image
                    src="https://www.ipathsala.com/images/ipathsala-logo.png"
                    alt="ipathsala-logo"
                    width={180}
                    height={60}
                    priority
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-9 col-6">
              <div className="nav-toggle"></div>

              <nav
                className="nav-menus-wrapper"
                id="topManu"
                style={{ float: "right", transitionProperty: "none" }}>
                <span className="nav-menus-wrapper-close-button sidemenu_btn">
                  ✕
                </span>

                <ul className="nav-menu">
                  <li>
                    <Link id="HOME-top" href="/home">
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
        </div>
      </div>
      <div id="navigation" className="navigation sticky navigation-portrait">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-3 col-6">
              <div className="header-logo">
                <Link href="https://www.ipathsala.com">
                  <Image
                    src="https://www.ipathsala.com/images/ipathsala-logo.png"
                    alt="ipathsala-logo"
                    width={180}
                    height={60}
                    priority
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-9 col-6">
              <div className="nav-toggle"></div>

              <nav
                className="nav-menus-wrapper nav-menus-wrapper-open"
                id="topManu"
                style={{ float: "right", transitionProperty: "left" }}>
                <span className="nav-menus-wrapper-close-button sidemenu_btn">
                  ✕
                </span>

                <ul className="nav-menu">
                  <li>
                    <Link id="HOME-top" href="/home">
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
        </div>

        {/* Overlay */}
      </div>
    </header>
  );
};

export default HeaderLandscape;
