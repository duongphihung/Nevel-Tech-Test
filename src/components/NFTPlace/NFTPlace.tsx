import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../../assets/images/img_1.png";
import img2 from "../../assets/images/img_2.png";
import img3 from "../../assets/images/img_3.png";
import img4 from "../../assets/images/img_4.png";
import img5 from "../../assets/images/img_5.png";
import img6 from "../../assets/images/img_6.png";
import styles from "./NFTPlace.module.scss";

const NFTPlace = () => {
    
    const newCollections = [
        { id: 1, image: img1 },
        { id: 2, image: img2 },
        { id: 3, image: img3 },
        { id: 4, image: img4 },
        { id: 5, image: img5 },
        { id: 6, image: img6 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 6;
    const totalItems = newCollections.length;

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
    };


    const getVisibleItems = () => {
        const items = [];
        for (let i = 0; i < itemsPerView; i++) {
            const index = (currentIndex + i) % totalItems;
            items.push(newCollections[index]);
        }
        return items;
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>New NFT Collections</div>
                <div className={styles.group_btn}>
                    <button className={styles.btn} onClick={handlePrev}>
                        <ChevronLeft size={20} />
                    </button>
                    <button className={styles.btn} onClick={handleNext}>
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
            <div className={styles.body}>
                <div
                    className={styles.slider}
                    
                >
                    {getVisibleItems().map((collection) => (
                        <img
                            key={collection.id}
                            src={collection.image}
                            alt={`Collection ${collection.id}`}
                            className={styles.img}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NFTPlace;