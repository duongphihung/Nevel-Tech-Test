import InstallImg from "../../assets/images/Installapp.png";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerSection}>
                <h3>ABOUT US</h3>
                <a href="#">Careers</a>
                <a href="#">Company Details</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Help Center</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Affiliate</a>
            </div>
            <div className={styles.footerSection}>
                <h3>PRODUCTS</h3>
                <a href="#">NFT Marketplace</a>
                <a href="#">SlingShot</a>
                <a href="#">Swaps</a>
                <a href="#">NFT Launchpad</a>
                <a href="#">Runes Platform</a>
                <a href="#">Creator Dashboard</a>
            </div>
            <div className={styles.footerSection}>
                <h3>RESOURCES</h3>
                <a href="#">Support</a>
                <a href="#">API</a>
                <a href="#">Feature Requests</a>
                <a href="#">Trust & Safety</a>
                <a href="#">Sitemap</a>
            </div>
            <div className={styles.footerSection}>
                <h3>CONTACT US</h3>
                <a href="mailto:support@tech.com">support@tech.com</a>
                <a href="mailto:affiliate@tech.com">affiliate@tech.com</a>
                <img src={InstallImg} alt="Instagram" />
            </div>
        </footer>
    );
};

export default Footer;