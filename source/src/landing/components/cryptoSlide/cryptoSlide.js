import React, {useState, useCallback, useEffect} from "react";
import {ColumnWrapper, Desc, Header, RootStyle, Subheader} from "../components";
import {Box, CircularProgress, Container, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Icon} from "@iconify/react";
import useFetch from "hooks/useFetch";
import Badge from "./component/badge";
import {keyframes} from "@emotion/react";
import {MotionInView, varFadeInDown} from "../animate";

const CryptoSlide = () => {
    const [loading, , data] = useFetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&sparkline=false"
    );
    const [crypto] = useState([
        "Bitcoin",
        "Ethereum",
        "Litecoin",
        "Bitcoin Cash",
        "Dash",
        "BNB",
        "Tether",
        "Binance USD",
        "Shiba Inu",
        "Chainlink",
        "OMG Network"
    ]);
    const [cryptoArray, setCryptoArray] = useState([]);
    const getCrypto = useCallback(
        (data) => {
            const filteredData = data.filter((object) =>
                crypto.includes(object.name)
            );
            setCryptoArray(filteredData);
        },
        [crypto]
    );
    useEffect(() => {
        getCrypto(data);
    }, [data, getCrypto]);
    return (
        <RootStyle>
            <Container maxWidth="lg">
                <ColumnWrapper>
                    <MotionInView variants={varFadeInDown}>
                        <SlideWrapper>
                            <ColumnWrapper>
                                <Desc>Coin List</Desc>
                                <Header>Top Trending Cryptocurrencies </Header>
                            </ColumnWrapper>
                            <Subheader sx={{textAlign: "left"}}>
                                Buy, sell and store Bitcoin, Ethereum, Tether
                                and other Cryptocurrencies with Bino9ja 24/7.
                            </Subheader>
                        </SlideWrapper>
                    </MotionInView>
                    {loading ? (
                        <Box
                            sx={{
                                width: "inherit",
                                height: "inherit",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <SlideBox>
                            {cryptoArray.map((cryptoItem) => {
                                const str =
                                    cryptoItem.price_change_percentage_24h.toString();
                                return (
                                    <CryptoContainer
                                        crypto={cryptoItem}
                                        key={cryptoItem.id}
                                        str={str}
                                    />
                                );
                            })}
                        </SlideBox>
                    )}
                </ColumnWrapper>
            </Container>
        </RootStyle>
    );
};

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});
const CryptoContainer = ({crypto, str}) => {
    return (
        <CryptoBox key={crypto.id}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%"
                }}>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <ImageWrapper>
                        <CryptoImage src={crypto.image} alt="crypto-img" />
                    </ImageWrapper>
                    <ColumnWrapper>
                        <CryptoText>{crypto.name}</CryptoText>
                        <CryptoText
                            sx={{
                                color: (theme) => theme.palette.grey["500"],
                                fontSize: "0.7rem"
                            }}></CryptoText>
                    </ColumnWrapper>
                </Box>
                <ColumnWrapper sx={{alignItems: "flex-end"}}>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                        <CryptoText
                            sx={{fontSize: "1rem", marginRight: "-4px"}}>
                            {"#" + crypto.market_cap_rank}
                        </CryptoText>
                        <Badge />
                    </Box>
                    <CryptoText
                        sx={{
                            color: (theme) => theme.palette.grey["500"],
                            fontSize: "0.7rem"
                        }}>
                        Market Cap Rank
                    </CryptoText>
                </ColumnWrapper>
            </Box>
            <Box sx={{display: "flex", marginTop: {xs: "10px", md: "30px"}}}>
                <ColumnWrapper>
                    <CryptoText>
                        {formatter.format(crypto.market_cap)}
                    </CryptoText>
                    <CryptoText
                        sx={{
                            color: (theme) => theme.palette.grey["500"],
                            fontSize: "0.7rem"
                        }}>
                        Market Cap
                    </CryptoText>
                </ColumnWrapper>
                <ColumnWrapper sx={{alignItems: "flex-end"}}>
                    {str.includes("-") ? (
                        <Box
                            sx={{
                                display: "flex",
                                color: (theme) => theme.palette.error.main
                            }}>
                            <Icon icon="eva:arrow-down-fill" />
                            <CryptoText
                                sx={{
                                    color: (theme) => theme.palette.error.main
                                }}>
                                {Math.round(
                                    (crypto.price_change_percentage_24h +
                                        Number.EPSILON) *
                                        100
                                ) /
                                    100 +
                                    "%"}
                            </CryptoText>
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                display: "flex",
                                color: (theme) => theme.palette.success.main
                            }}>
                            <Icon icon="eva:arrow-up-fill" />
                            <CryptoText
                                sx={{
                                    color: (theme) => theme.palette.success.main
                                }}>
                                {"+" +
                                    Math.round(
                                        (crypto.price_change_percentage_24h +
                                            Number.EPSILON) *
                                            100
                                    ) /
                                        100 +
                                    "%"}
                            </CryptoText>
                        </Box>
                    )}
                    <CryptoText
                        sx={{
                            color: (theme) => theme.palette.grey["500"],
                            fontSize: "0.7rem"
                        }}>
                        Price Change(24h)
                    </CryptoText>
                </ColumnWrapper>
            </Box>
        </CryptoBox>
    );
};

const SlideWrapper = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10%",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "20%",
        alignItems: "none"
    },
    [theme.breakpoints.down("sm")]: {
        marginBottom: "30%"
    }
}));
const CryptoBox = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    width: 350,
    padding: "30px 20px",
    background: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadiusMd,
    boxShadow: theme.shadows[10],
    "&:not(:last-child)": {
        marginRight: 20
    },
    [theme.breakpoints.down("md")]: {
        width: 300,
        padding: "20px 10px"
    }
}));
const CryptoText = styled(Typography)(({theme}) => ({
    fontSize: "0.8rem",
    fontWeight: 700,
    margin: "0px 10px",
    color: theme.palette.primary.darker
}));
const CryptoImage = styled("img")(() => ({
    width: 20,
    height: 20
}));
const ImageWrapper = styled(Box)(({theme}) => ({
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    background: theme.palette.grey["100"]
}));
const SlideBox = styled(Box)(({theme}) => ({
    display: "flex",
    position: "absolute",
    bottom: 10,
    zIndex: 2,
    animation: `${linear1} 12s linear 3s infinite alternate`,
    "&:hover": {
        cursor: "pointer",
        animationPlayState: "paused"
    },
    [theme.breakpoints.down("lg")]: {
        animation: `${linear2} 12s linear 3s infinite alternate`
    },
    [theme.breakpoints.down("md")]: {
        animation: `${linear3} 12s linear 3s infinite alternate`
    }
}));

const linear1 = keyframes`
  0% {
    transform: translate(20%, 0)
  }
  100% {
    transform: translate(-71%, 0)
  }
`;
const linear2 = keyframes`
  0% {
    transform: translate(0%, 0)
  }
  100% {
    transform: translate(-79%, 0)
  }
`;
const linear3 = keyframes`
  0% {
    transform: translate(0%, 0)
  }
  100% {
    transform: translate(-89%, 0)
  }
`;

export default CryptoSlide;
