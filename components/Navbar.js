
// import styles from '../styles/Home.module.css';
import styles from './navbar_style.module.css';
import Link from 'next/link';
import React from "react";
import { navLinks } from '../data';
import { useRouter } from 'next/router';
import propTypes from "prop-types";

const NavItem = ({ item }) => {
  const router = useRouter();
  return <>{router.pathname === '/' ? item : ""}</>;
}

NavItem.propTypes = {
  item: propTypes.string,
};


export default function Navbar({}){

  const router = useRouter();
 
  
  return (
  
    <nav className={styles.navBar}>                                
      {navLinks.map((link, index) =>{
        return (
          <ul key={index}>
            <Link href = {link.path}>
              <li key={link.key.toString()} className={router.route === link.path.toString() ? styles.navBarActive : styles.navBarli} >{link.name}</li>
            </Link>
          </ul>
        );
      }
      )}
    </nav>

  )
}

