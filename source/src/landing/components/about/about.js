import React from "react";
import {
    Body,
    ColumnWrapper,
    ContainedButton,
    Desc,
    Header,
    ImageAnimation,
    RootStyle,
    Subheader
} from "../components";
import {Box, Container, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import useSettings from "hooks/useSettings";

// import images
import aboutLight from "assets/aboutLight.png";
import aboutDark from "assets/aboutDark.png";
import {
    MotionInView,
    varFadeInLeft,
    varFadeInRight,
    varFadeInUp
} from "../animate";
import ExchangeSvg from "./component/exchange";
import WalletSvg from "./component/wallet";
import GiftcardSvg from "./component/GiftcardSvg";

const About = () => {
    const {themeMode} = useSettings();
    const isLight = themeMode === "dark";
    return (
        <RootStyle
            id="about"
            sx={{padding: "120px 0px", paddingTop: {xs: "0px", md: "120px"}}}>
            <Container maxWidth="lg">
                <Grid container alignItems="center" direction="row-reverse">
                    <Grid item xs={12} md={5}>
                        <MotionInView variants={varFadeInRight}>
                            <Desc>Trade anytime & anywhere</Desc>
                            <Header sx={{width: {xs: "100%", md: "80%"}}}>
                                Enjoy a seamless trading experience
                            </Header>
                            <Subheader sx={{width: {xs: "100%", md: "100%"}}}>
                                Find great deals for Bitcoin and other
                                Cryptocurrencies on Bino9ja. We offer the lowest
                                possible fees on your trades.
                            </Subheader>
                        </MotionInView>
                        <MotionInView variants={varFadeInUp}>
                            <AboutBox>
                                {aboutItems.map((aboutItem) => (
                                    <ColumnWrapper key={aboutItem.id}>
                                        <Box
                                            sx={{
                                                display: "flex"
                                            }}>
                                            {aboutItem.icon}
                                        </Box>
                                        <AboutBody>{aboutItem.text}</AboutBody>
                                    </ColumnWrapper>
                                ))}
                            </AboutBox>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: {xs: "center", md: "left"},
                                    mt: "40px"
                                }}>
                                <PageLink href="/auth/login">
                                    <ContainedButton
                                        sx={{
                                            textTransform: "none",
                                            margin: {xs: "auto", md: 0}
                                        }}>
                                        Learn about bino9ja
                                    </ContainedButton>
                                </PageLink>
                            </Box>
                        </MotionInView>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <MotionInView variants={varFadeInLeft}>
                            <AboutImageWrapper>
                                <ImageAnimation />
                                {isLight ? (
                                    <AboutImage
                                        src={aboutLight}
                                        alt="about-light"
                                    />
                                ) : (
                                    <AboutImage
                                        src={aboutDark}
                                        alt="about-dark"
                                    />
                                )}
                            </AboutImageWrapper>
                        </MotionInView>
                    </Grid>
                </Grid>
            </Container>
        </RootStyle>
    );
};

const aboutItems = [
    {
        id: 1,
        icon: <ExchangeSvg />,
        text: "Convert your BTC to Naira (NGN) quickly and easily! Trade any Cryptocurrency within 15 minutes."
    },
    {
        id: 2,
        icon: <WalletSvg />,
        text: "Get a free Bino9ja Wallet with unique receiving addresses, you can send and store your Bitcoin safely."
    },
    {
        id: 3,
        icon: <GiftcardSvg />,
        text: "We provide the best escrow for every transaction. Your Bitcoin is held in secure escrow until a trade is successfully completed."
    }
];
const AboutImageWrapper = styled(Box)(({theme}) => ({
    maxWidth: 600,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
        maxWidth: "100%",
        margin: "60px 0 60px"
    },
    [theme.breakpoints.down("sm")]: {
        margin: "0px 0px 40px"
    }
}));
const AboutImage = styled("img")(({theme}) => ({
    width: "90%",
    boxShadow: theme.customShadows.primary,
    marginLeft: "-40%",
    zIndex: 2,
    [theme.breakpoints.down("md")]: {
        marginLeft: 0,
        width: "80%",
        marginTop: 60
    },
    [theme.breakpoints.down("sm")]: {
        width: "80%",
        marginTop: 140
    }
}));

const AboutBox = styled(Box)(() => ({
    display: "grid",
    gap: 10,
    width: "100%",
    justifyContent: "center",
    gridTemplateColumns: "auto auto"
}));
const AboutBody = styled(Body)(({theme}) => ({
    ...theme.typography.body1,
    marginTop: 10,
    textAlign: "left"
}));
const PageLink = styled("a")(() => ({
    textDecoration: "none"
}));

export default About;
