import React from "react";
import {
    Body,
    CentreWrapper,
    ColumnWrapper,
    Desc,
    Header,
    OutlinedButton,
    RootStyle,
    Subheader
} from "../components";
import {Box, Card, Container, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import useSettings from "hooks/useSettings";
import {Icon} from "@iconify/react";

// image imports
import profileLight from "assets/profileLight.png";
import profileDark from "assets/profileDark.png";
import {MotionInView, varFadeInDown, varFadeInRight} from "../animate";

const Profile = () => {
    const {themeMode} = useSettings();
    const isLight = themeMode === "dark";
    return (
        <div>
            <RootStyle>
                <Container maxWidth="lg">
                    <ColumnWrapper>
                        <MotionInView variants={varFadeInDown}>
                            <CentreWrapper sx={{marginBottom: "40px"}}>
                                <Desc>How it works</Desc>
                                <Header>Start your journey now</Header>
                                <Subheader>
                                    Create an account &gt; Link your bank
                                    account &gt; Start buying & selling.
                                </Subheader>
                            </CentreWrapper>
                        </MotionInView>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <ImageWrapper>
                                    {isLight ? (
                                        <ProfileImage
                                            src={profileLight}
                                            alt="profileLight"
                                        />
                                    ) : (
                                        <ProfileImage
                                            src={profileDark}
                                            alt="profileLight"
                                        />
                                    )}
                                </ImageWrapper>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <MotionInView variants={varFadeInRight}>
                                    {boxItems.map((boxItem) => (
                                        <ProfileContainer
                                            item={boxItem}
                                            key={boxItem.id}
                                        />
                                    ))}
                                </MotionInView>
                            </Grid>
                        </Grid>
                    </ColumnWrapper>
                </Container>
            </RootStyle>
        </div>
    );
};

const boxItems = [
    {
        id: 1,
        icon: "icons8:create-new",
        header: "Create your account",
        text: "Create your account now by simply providing a unique username, email address and password.",
        btnText: "Create account now",
        btnIcon: "akar-icons:arrow-up-right"
    },
    {
        id: 2,
        icon: "fluent:building-bank-link-24-regular",
        header: "Link bank account",
        text: "Link your Nigerian (NGN) Bank account for instant Deposits & Withdrawals 24/7."
    },
    {
        id: 3,
        icon: "ic:baseline-currency-exchange",
        header: "Start Buying and selling",
        text: "Start Buying or Sell Bitcoin and other Cryptocurrencies using NGN through your bank account."
    }
];
const ProfileContainer = ({item}) => {
    return (
        <ProfileBox isFirst={item.id === 1}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    width: "100%"
                }}>
                <BoxHeader>{item.header}</BoxHeader>
                <ProfileIcon icon={item.icon} />
            </Box>
            <Body sx={{width: "80%", lineHeight: "1.9"}}>{item.text}</Body>
            <IconBox isFirst={item.id === 1}>
                <OutlinedButton
                    onClick={() => {
                        window.open("/auth/register", "_blank");
                    }}>
                    {item.btnText}
                    <ButtonIcon icon={item.btnIcon} />
                </OutlinedButton>
            </IconBox>
        </ProfileBox>
    );
};

const ImageWrapper = styled(Box)(({theme}) => ({
    maxWidth: "100%",
    height: "100%",
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: theme.shape.borderRadiusMd,
    background: theme.palette.grey["100"]
}));
const ProfileIcon = styled(Icon)(({theme}) => ({
    fontSize: 32,
    color: theme.palette.primary.darker
}));
const ButtonIcon = styled(Icon)(() => ({
    fontSize: 26
}));
const BoxHeader = styled(Typography)(({theme}) => ({
    ...theme.typography.h4,
    color: theme.palette.primary.darker,
    marginBottom: 20
}));
const ProfileImage = styled("img")(({theme}) => ({
    width: "180%",
    height: "90%",
    left: "-85%",
    position: "absolute",
    borderRadius: theme.shape.borderRadiusMd,
    boxShadow: theme.shadows[10],
    [theme.breakpoints.down("md")]: {
        position: "relative",
        left: 0,
        width: "95%",
        height: "95%"
    }
}));
const ProfileBox = styled(({isFirst, ...otherProps}) => {
    return <Card {...otherProps} />;
})(({theme, isFirst}) => ({
    borderRadius: theme.shape.borderRadiusMd,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    boxShadow: "none",
    border: `2px solid ${theme.palette.grey["100"]}`,
    padding: 20,
    marginLeft: "10%",
    marginTop: 40,
    ...(isFirst && {
        borderTop: `4px solid ${theme.palette.primary.main}`,
        background: theme.palette.grey["100"],
        marginTop: 0
    }),
    [theme.breakpoints.down("md")]: {
        marginLeft: 0,
        ...(isFirst && {
            marginTop: 40
        })
    }
}));
const IconBox = styled(({isFirst, ...otherProps}) => {
    return <Box {...otherProps} />;
})(({isFirst}) => ({
    display: "none",
    ...(isFirst && {
        display: "flex"
    })
}));

export default Profile;
