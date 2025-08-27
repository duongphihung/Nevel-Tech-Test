import { Carousel } from 'antd';
import image from "../../assets/images/nfts.png";
import styles from "./Banner.module.scss";

const Banner = () => {
    return (
        <Carousel
            autoplay={{ dotDuration: true }}
            autoplaySpeed={4000}
        >
            <div>
                <img src={image} alt="banner1" className={styles.banner} />
            </div>
            <div>
                <img src={image} alt="banner1" className={styles.banner} />
            </div>
            <div>
                <img src={image} alt="banner1" className={styles.banner} />
            </div>
            <div>
                <img src={image} alt="banner1" className={styles.banner} />
            </div>
        </Carousel>
    )
}

export default Banner