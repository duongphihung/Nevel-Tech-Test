import styles from "./Navbar.module.scss";
import WhiteLogo from "../../assets/images/White_logo.png";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div  className={styles.container}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <button
                        className={`${styles.mobileMenuBtn} ${isMenuOpen ? styles.open : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <img src={WhiteLogo} alt="Tech Logo" />
                    <ul className={`${styles.menu} ${styles.desktopMenu}`}>
                        <li className={styles.active}>HOME</li>
                        <li>ITEMS 1</li>
                        <li>ITEMS 2</li>
                        <li>ITEMS 3</li>
                        <li>ITEMS 4</li>
                    </ul>
                </div>

                <div className={`${styles.desktopAuth}`}>
                    <button className={`${styles.btn} ${styles.signup}`}>SIGN UP</button>
                    <button className={`${styles.btn} ${styles.login}`}>LOG IN</button>
                </div>

                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.mobileMenuList}>
                        <li className={styles.active}>HOME</li>
                        <li>ITEMS 1</li>
                        <li>ITEMS 2</li>
                        <li>ITEMS 3</li>
                        <li>ITEMS 4</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}