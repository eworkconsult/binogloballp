import React, {useState} from "react";

// mui imports
import {Body, ColumnWrapper, ContainedButton, RootStyle} from "../components";
import {
    Box,
    CircularProgress,
    Container,
    Grid,
    Typography
} from "@mui/material";
import {keyframes} from "@emotion/react";
import {styled} from "@mui/material/styles";
import useSettings from "hooks/useSettings";

// image imports
import viewImg from "assets/view.png";
import BannerDark from "assets/bannerDark.png";
import BannerLight from "assets/bannerLight.png";
import trend from "assets/increase.png";
import chart from "assets/growth-chart.png";
import piechart from "assets/pie-chart.png";
import {MotionInView, varFadeInLeft, varFadeInUp} from "../animate";

const Hero = ({loading, data}) => {
    const {themeMode} = useSettings();
    const isLight = themeMode === "dark";
    const [email, setEmail] = useState("");
    return (
        <RootStyle sx={{mt: "80px"}} id="home">
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <ColumnWrapper>
                            <MotionInView variants={varFadeInUp}>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        mb: {xs: "20px", md: "20px"},
                                        textAlign: {xs: "center", md: "left"}
                                    }}>
                                    Trade your Bitcoin for NGN Fast with Bino9ja
                                </Typography>
                            </MotionInView>
                            <MotionInView variants={varFadeInLeft}>
                                <Body
                                    sx={{
                                        width: {xs: "100%", lg: "70%"},
                                        lineHeight: "1.8",
                                        textAlign: {xs: "center", md: "left"}
                                    }}>
                                    Start your journey now. Join the leading
                                    peer-to-peer platform to buy and sell
                                    Bitcoin and other Cryptocurrencies in just 3
                                    simple steps.
                                </Body>
                                <SubscribeSection
                                    action="https://bino9ja.us21.list-manage.com/subscribe/post?u=4a1b7f37c4b2ba3779a8e02f7&amp;id=4c7172874f&amp;f_id=00b0d0e1f0"
                                    method="post"
                                    id="mc-embedded-subscribe-form"
                                    name="mc-embedded-subscribe-form"
                                    target="_blank"
                                    noValidate>
                                    <BannerInput
                                        placeholder="@ Enter your email..."
                                        type="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        name="EMAIL"
                                        id="mce-EMAIL"
                                    />
                                    <ContainedButton
                                        sx={{
                                            position: "absolute",
                                            right: "2%",
                                            bottom: "7%"
                                        }}
                                        type="submit"
                                        value="Subscribe"
                                        name="subscribe"
                                        id="mc-embedded-subscribe">
                                        Subscribe
                                    </ContainedButton>
                                </SubscribeSection>
                                <Box sx={{display: "block", mt: "40px"}}>
                                    <Body>Token Popular</Body>
                                    {loading ? (
                                        <Box
                                            sx={{
                                                width: "inherit",
                                                height: "inherit",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}>
                                            <CircularProgress color="primary" />
                                        </Box>
                                    ) : (
                                        <CryptoWrapper>
                                            {data.map((crypto) => {
                                                const str =
                                                    crypto.price_change_percentage_24h.toString();
                                                return (
                                                    <CryptoBoxWrapper
                                                        crypto={crypto}
                                                        str={str}
                                                        key={crypto.id}
                                                    />
                                                );
                                            })}
                                            <CryptoBox
                                                onClick={() =>
                                                    window.open(
                                                        "/auth/login",
                                                        "_blank"
                                                    )
                                                }>
                                                <CryptoImage
                                                    src={viewImg}
                                                    alt="view-png"
                                                />
                                                <CryptoText
                                                    sx={{
                                                        fontSize: "0.8rem",
                                                        margin: 0,
                                                        marginRight: "10px"
                                                    }}>
                                                    View more
                                                </CryptoText>
                                            </CryptoBox>
                                        </CryptoWrapper>
                                    )}
                                </Box>
                            </MotionInView>
                        </ColumnWrapper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <BannerShape>
                            {isLight ? (
                                <BannerImage
                                    src={BannerLight}
                                    alt="banner-img"
                                />
                            ) : (
                                <BannerImage
                                    src={BannerDark}
                                    alt="banner-img"
                                />
                            )}
                            <ImageTopCard>
                                <CryptoChartImage
                                    src={piechart}
                                    alt="piechart"
                                />
                                <ColumnWrapper>
                                    <CryptoText
                                        sx={{
                                            fontSize: "0.9rem",
                                            fontWeight: 400
                                        }}>
                                        $12200
                                    </CryptoText>
                                    <CryptoText
                                        sx={{
                                            color: (theme) =>
                                                theme.palette.grey["500"],
                                            fontSize: "0.6rem",
                                            fontWeight: 400,
                                            margin: 0
                                        }}>
                                        Total Portfolio
                                    </CryptoText>
                                </ColumnWrapper>
                            </ImageTopCard>
                            <ImageBottomCard>
                                <CryptoTrendWrapper>
                                    <CryptoTrendImage
                                        src={trend}
                                        alt="trend-img"
                                    />
                                </CryptoTrendWrapper>
                                <ColumnWrapper>
                                    <CryptoText
                                        sx={{
                                            color: (theme) =>
                                                theme.palette.grey["500"],
                                            fontSize: "0.9rem",
                                            fontWeight: 400
                                        }}>
                                        Market Cap
                                    </CryptoText>
                                    <CryptoText
                                        sx={{
                                            fontSize: "0.9rem",
                                            fontWeight: 400
                                        }}>
                                        $200 T
                                    </CryptoText>
                                </ColumnWrapper>
                                <CryptoChartImage src={chart} alt="chart-img" />
                            </ImageBottomCard>
                        </BannerShape>
                    </Grid>
                </Grid>
            </Container>
        </RootStyle>
    );
};

const CryptoBoxWrapper = ({crypto, str}) => {
    return (
        <CryptoBox key={crypto.id}>
            <CryptoImage src={crypto.image} alt="crypto_img" />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                <CryptoText
                    sx={{
                        fontSize: "0.8rem",
                        margin: 0
                    }}>
                    {crypto.name}
                </CryptoText>
                <Box
                    sx={{
                        display: "flex"
                    }}>
                    <CryptoText
                        sx={{
                            margin: 0
                        }}>
                        {"$" + crypto.current_price}
                    </CryptoText>
                    <Box>
                        {str.includes("-") ? (
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
                        ) : (
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
                        )}
                    </Box>
                </Box>
            </Box>
        </CryptoBox>
    );
};

const BannerInput = styled("input")(({theme}) => ({
    width: "100%",
    border: `1px solid ${theme.palette.grey["300"]}`,
    borderRadius: theme.shape.borderRadiusLg,
    background: "transparent",
    padding: "8px 30px",
    paddingRight: "35%",
    fontSize: "0.9rem",
    marginTop: 40,
    color: theme.palette.grey["500"],
    height: 70,
    outline: "none",
    "&::placeholder": {
        color: theme.palette.grey["500"],
        fontFamily: theme.typography.fontFamily
    },
    [theme.breakpoints.down("lg")]: {
        padding: "8px 10px",
        fontSize: "0.8rem"
    },
    [theme.breakpoints.down("md")]: {
        padding: "8px 30px",
        fontSize: "0.9rem"
    }
}));
const SubscribeSection = styled("form")(({theme}) => ({
    position: "relative",
    width: "90%",
    [theme.breakpoints.down("md")]: {
        width: "100%"
    }
}));
const CryptoWrapper = styled(Box)(({theme}) => ({
    display: "flex",
    width: "90%",
    marginTop: "20px",
    [theme.breakpoints.down("xl")]: {
        width: "100%"
    },
    [theme.breakpoints.down("sm")]: {
        overflowX: "scroll"
    },
    "&::-webkit-scrollbar-track": {
        WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
        borderRadius: "10px",
        backgroundColor: "#F5F5F5"
    },
    "&::-webkit-scrollbar": {width: "10px", backgroundColor: "#F5F5F5"},
    "&::-webkit-scrollbar-thumb": {
        borderRadius: "10px",
        WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
        backgroundColor: theme.palette.primary.light
    }
}));
const CryptoBox = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 190,
    height: 55,
    padding: "8px 0px",
    cursor: "pointer",
    marginRight: 10,
    background: theme.palette.grey["100"],
    borderRadius: theme.shape.borderRadiusLg,
    [theme.breakpoints.down("lg")]: {
        width: "100%"
    }
}));
const CryptoImage = styled("img")(({theme}) => ({
    width: 30,
    height: 30,
    borderRadius: "50%",
    boxShadow: theme.shadows[13],
    marginRight: 10
}));
const CryptoText = styled(Typography)(({theme}) => ({
    fontSize: "0.7rem",
    fontWeight: 700,
    margin: "0px 10px",
    color: theme.palette.primary.darker
}));
const BannerShape = styled(Box)(({theme}) => ({
    height: "100%",
    position: "relative",
    maxWidth: 500,
    background: theme.palette.grey["100"],
    borderTopLeftRadius: "25%",
    borderTopRightRadius: "25%",
    margin: "auto",
    [theme.breakpoints.down("lg")]: {
        maxWidth: 400
    },
    [theme.breakpoints.down("md")]: {
        maxWidth: 400,
        marginTop: 40
    },
    [theme.breakpoints.down("sm")]: {
        maxWidth: 300
    }
}));
const BannerImage = styled("img")(() => ({
    maxWidth: "100%",
    animation: `${bounce} 3s ease-in-out infinite`
}));
const ImageBottomCard = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: theme.shadows[10],
    borderRadius: theme.shape.borderRadiusSm,
    backgroundColor: theme.palette.background.paper,
    maxWidth: 250,
    height: 80,
    position: "absolute",
    padding: 10,
    bottom: "5%",
    left: "-10%",
    animation: `${bounce} 3s ease-in-out infinite`
}));
const ImageTopCard = styled(ImageBottomCard)(({theme}) => ({
    maxWidth: 200,
    height: 80,
    padding: 10,
    top: "15%",
    left: "75%",
    bottom: 0,
    animation: `${slide} 3s ease-in-out infinite`,
    [theme.breakpoints.down("lg")]: {
        left: "70%"
    },
    [theme.breakpoints.down("md")]: {
        left: "50%"
    },
    [theme.breakpoints.down("sm")]: {
        left: "40%"
    }
}));
const CryptoTrendWrapper = styled(Box)(({theme}) => ({
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: theme.palette.primary.lighter,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}));
const CryptoTrendImage = styled("img")(() => ({
    width: 50,
    height: 50
}));
const CryptoChartImage = styled("img")(({theme}) => ({
    width: 60,
    height: 60,
    marginRight: 10,
    [theme.breakpoints.down("md")]: {
        width: 40,
        height: 40
    },
    [theme.breakpoints.down("sm")]: {
        width: 30,
        height: 30
    }
}));

const bounce = keyframes`
  0%, 100% {
    transform: translate(0, 0)
  }
  50% {
    transform: translate(0, -25px)
  }
`;
const slide = keyframes`
  0%, 100% {
    transform: translate(0, 0)
  }
  50% {
    transform: translate(25px, -25px)
  }
`;

export default Hero;
