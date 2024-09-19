import React, { useEffect, useState } from "react";
import styles from "@/styles/Header.module.css";
import Link from "next/link";
import { MdCancel } from "react-icons/md";
import { usePathname } from "next/navigation";
// import { useLocation } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  const location = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav  , setScrollNav] = useState<boolean>(false)
  const handleScroll = () =>{
      if(window.scrollY > 50){
        setScrollNav(true);
      }else{
        setScrollNav(false)
      }
  };
  useEffect(() => {
   window.addEventListener('scroll' , handleScroll);
   return () => {
        window.removeEventListener('scroll', handleScroll)
   }
  }, [])
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div id={styles.header}>
        <div className="container">
        <nav className={`navbar fixed-top navbar-expand-lg ${scrollNav ? styles.nav_scrolled : ''}`} style={{height:"75px"}}>
      <div className="container">
        <Link className="navbar-brand" style={{ color: '#fff' }} href="/">
          VIVEK
        </Link>

        {!isOpen && (
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            style={{ backgroundColor: '#c000ff' }}
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        )}

        {isOpen && (
          <div style={{ zIndex: '9999' , position:"relative" ,top:"0" }}>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsOpen(false)}
              style={{ color: '#c000ff', fontSize: '40px',position:"absolute" , top:"-30px", right:"145px" }}
            >
              <MdCancel />
            </button>
          </div>
        )}

        {/* The menu (navbarCollapse) */}
        <div className={`${styles.navbarCollapse} ${isOpen ? styles.show : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item pe-4">
              <Link className={`nav-link ${styles.header_a} ${location=='/' && styles.active}`} aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item pe-4">
              <Link className={`nav-link ${styles.header_a} ${location=='/about' && styles.active}`} href="/about">
                About
              </Link>
            </li>
            <li className="nav-item pe-4">
              <Link className={`nav-link ${styles.header_a} ${location=='/project' && styles.active}`} href="/project">
                Projects
              </Link>
            </li>
            <li className="nav-item pe-4">
              <Link className={`nav-link ${styles.header_a} ${location=='/contact' && styles.active}`} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
