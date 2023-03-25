import React from "react";
import {Box, Container, Stack, Typography} from "@mui/material";
import {animateScroll as scroll} from "react-scroll";
import {styled, useTheme} from "@mui/material/styles";
import {Icon} from "@iconify/react";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    const theme = useTheme();
    return (
        <Box
            sx={{
                width: "100%",
                padding: "40px 0px",
                position: "relative",
                boxSizing: "border-box",
                overflow: "hidden",
                background: theme.palette.primary.main
            }}>
            <Container maxWidth="lg">
                <Stack alignItems="center" spacing={2}>
                    <Typography
                        variant="h3"
                        sx={{color: "#fff", cursor: "pointer"}}
                        onClick={toggleHome}>
                        Bino9ja
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{textAlign: "center", width: "45%", color: "#fff"}}>
                        Get more crypto for cash. Other exchanges charge high
                        fees to buy and sell crypto. We charge 0 to very little
                        fees. Sign up fast.
                    </Typography>
                    <Stack spacing={2} direction="row" justifyContent="center">
                        {footerIcons.map((o) => (
                            <a
                                href={o.link}
                                target="_blank"
                                key={o.id}
                                rel="noreferrer">
                                <FooterIcon icon={o.icon} />
                            </a>
                        ))}
                    </Stack>
                </Stack>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#fff"
                    }}>
                    <Typography variant="body2">
                        Copyright @{new Date().getFullYear()} Bino9ja
                    </Typography>
                    <Box>
                        <Link href="#">Terms of use </Link>|{" "}
                        <Link href="#"> Privacy Policy </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
const footerIcons = [
    {
        id: 2,
        icon: "ant-design:twitter-outlined",
        link: "https://twitter.com/binoglobal"
    }
];
const FooterIcon = styled(Icon)(({theme}) => ({
    color: "#fff",
    border: "1px solid #fff",
    padding: theme.spacing(1),
    fontSize: 40,
    borderRadius: "50%",
    [theme.breakpoints.down("md")]: {
        fontSize: 30,
        padding: theme.spacing(0.7)
    },
    "&:hover": {
        color: theme.palette.primary.light,
        transition: "all 0.3s ease-in",
        border: `1px solid ${theme.palette.primary.light}`
    }
}));
const Link = styled("a")(({theme}) => ({
    ...theme.typography.body2,
    cursor: "pointer",
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
        color: theme.palette.primary.light
    }
}));

export default Footer;
