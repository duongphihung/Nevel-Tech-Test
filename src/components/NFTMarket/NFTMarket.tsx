import img1 from "../../assets/images/banner_1.png"
import img2 from "../../assets/images/banner_2.png"
import img3 from "../../assets/images/banner_3.png"
import { ChevronLeft, ChevronRight } from "lucide-react"
import styles from "./NFTMarket.module.scss"

const NFTMarket = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.title}>NFT Drops Calendar</div>
                    <div className={styles.group_btn}>
                        <button className={styles.btn} >
                            <ChevronLeft size={20} />
                        </button>
                        <button className={styles.btn} >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
                <div>
                    <img src={img1} alt="" />
                </div>
            </div>

            <div className={styles.container_nft}>
                <div className={styles.title}>Hot NFT</div>
                <img src={img2} alt="" />
            </div>

            <div className={styles.container_nft}>
                <div className={styles.title}>PROMOTION</div>
                <img src={img3} alt="" />
            </div>
        </div>
    )
}

export default NFTMarket