import React, {useCallback, useEffect, useState} from "react";
import ThemeConfig from "../theme";
import useFetch from "../hooks/useFetch";
import {
    About,
    Contact,
    Count,
    CryptoSlide,
    Faq,
    Features,
    Footer,
    Header,
    Hero,
    Payment,
    Profile,
    Sidebar
} from "./components";
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const Landing = () => {
    const [loading, error, data] = useFetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&sparkline=false"
    );
    const [cryptoData, setCryptoData] = useState([]);
    const [scrollNav, setScrollNav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [crypto] = useState(["BNB", "Chainlink"]);
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up("md"), {
        defaultMatches: true
    });
    const open = isMd ? false : isOpen;
    const changeNav = () => {
        if (window.scrollY >= 60) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const getCrypto = useCallback(
        (data) => {
            const filteredData = data.filter((object) =>
                crypto.includes(object.name)
            );
            setCryptoData(filteredData);
        },
        [crypto]
    );
    useEffect(() => {
        window.addEventListener("scroll", changeNav);
        getCrypto(data);
    }, [data, getCrypto]);

    return (
        <ThemeConfig>
            <Header scrollNav={scrollNav} isOpen={isOpen} toggle={toggle} />
            <Sidebar toggle={toggle} open={open} />
            <Hero data={cryptoData} loading={loading} error={error} />
            <Payment />
            <About />
            <CryptoSlide />
            <Features />
            <Count />
            <Profile />
            <Faq />
            <Contact />
            <Footer />
        </ThemeConfig>
    );
};

export default Landing;
