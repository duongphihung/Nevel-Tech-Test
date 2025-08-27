import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"
import LinkMenu from "../../components/MenuLink/LinkMenu"
import NFTMarket from "../../components/NFTMarket/NFTMarket"
import NFTPlace from "../../components/NFTPlace/NFTPlace"

function HomePage() {
    return (
        <>
            <Banner />
            <LinkMenu />
            <NFTPlace />
            <NFTMarket />
            <Footer />
        </>
    )
}

export default HomePage