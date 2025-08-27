import styles from "./LinkMenu.module.scss"
import image1 from "../../assets/images/Free_to_Earn.png"
import image2 from "../../assets/images/Ranking.png"
import image3 from "../../assets/images/Vide_nft.png"
import image4 from "../../assets/images/How_to_buy.png"
import image5 from "../../assets/images/New_nft.png"
import image6 from "../../assets/images/Roadmap.png"
const LinkMenu = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <img src={image1} alt="Free_to_Earn" />
                <img src={image2} alt="Ranking" />
                <img src={image3} alt="Vide_nft" />
                <img src={image4} alt="How_to_buy" />
                <img src={image5} alt="New_nft" />
                <img src={image6} alt="Roadmap.png" />
            </div>
        </div>
    )
}

export default LinkMenu