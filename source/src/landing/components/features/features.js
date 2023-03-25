import React from "react";
import {
    Body,
    CentreWrapper,
    Desc,
    Header,
    RootStyle,
    Subheader
} from "../components";
import {Box, Card, Container, Stack} from "@mui/material";
import {styled} from "@mui/material/styles";
import Flash from "./component/flash";
import Phone from "./component/phone";
import Secure from "./component/secure";
import {MotionInView, varFadeInDown, varFadeInUp} from "../animate";

const Features = () => {
    return (
        <RootStyle id="features">
            <Container maxWidth="lg">
                <CentreWrapper>
                    <MotionInView variants={varFadeInDown}>
                        <CentreWrapper>
                            <Desc>Safe & Secure</Desc>
                            <Header>Your Crypto. Your Experience.</Header>
                            <Subheader
                                sx={{
                                    width: {xs: "100%", md: "50%"},
                                    mb: "40px",
                                    textAlign: "center"
                                }}>
                                Buy and sell your crypto with people just like
                                you using your own prices and your payment
                                methods.
                            </Subheader>
                        </CentreWrapper>
                    </MotionInView>
                    <MotionInView variants={varFadeInUp}>
                        <Stack
                            direction={{xs: "column", md: "row"}}
                            spacing={4}>
                            {cardItems.map((cardItem) => (
                                <CardWrapper
                                    cardItem={cardItem}
                                    key={cardItem.id}
                                />
                            ))}
                        </Stack>
                    </MotionInView>
                </CentreWrapper>
            </Container>
        </RootStyle>
    );
};
const CardWrapper = ({cardItem}) => {
    return (
        <FeatureCard isFirst={cardItem.id === 1} key={cardItem.id}>
            <LogoWrapper isFirst={cardItem.id === 1}>
                {cardItem.logo}
            </LogoWrapper>
            <FeatureHeader sx={{mt: "40px"}}>{cardItem.header}</FeatureHeader>
            <Body>{cardItem.text}</Body>
        </FeatureCard>
    );
};

const cardItems = [
    {
        id: 1,
        logo: <Flash />,
        header: "Instant Deposits & Withdrawals",
        text: "Your wallet is credited instantly."
    },
    {
        id: 2,
        logo: <Phone />,
        header: "24/7 Fast Customer Support",
        text: "Our support assistance staff is available 24 hours a day to help you out."
    },
    {
        id: 3,
        logo: <Secure />,
        header: "Secure trading",
        text: "Trade with peace of mind with our secured escrow, 2FA & other security features."
    }
];

const FeatureCard = styled(({isFirst, ...otherProps}) => {
    return <Card {...otherProps} />;
})(({theme, isFirst}) => ({
    borderRadius: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    boxShadow: "none",
    border: `3px solid ${theme.palette.grey["100"]}`,
    padding: 50,
    ...(isFirst && {
        background: theme.palette.grey["100"]
    }),
    [theme.breakpoints.down("lg")]: {
        paddingRight: 50
    },
    [theme.breakpoints.down("md")]: {
        paddingRight: 100
    },
    [theme.breakpoints.down("sm")]: {
        paddingRight: 50
    }
}));

const LogoWrapper = styled(({isFirst, ...otherProps}) => {
    return <Box {...otherProps} />;
})(({theme, isFirst}) => ({
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    background: theme.palette.grey["100"],
    ...(isFirst && {
        background: theme.palette.background.paper,
        boxShadow: theme.shadows[10]
    })
}));

const FeatureHeader = styled(Subheader)(({theme}) => ({
    ...theme.typography.h5,
    fontWeight: 800,
    color: theme.palette.primary.darker
}));

export default Features;
