import React from "react";
import {styled} from "@mui/material/styles";
import {
    Box,
    CardActionArea,
    FormControlLabel,
    IconButton,
    List,
    Radio,
    RadioGroup,
    Toolbar
} from "@mui/material";
import {animateScroll as scroll, Link as ScrollLink} from "react-scroll";
import {Icon} from "@iconify/react";
import {ContainedButton, OutlinedButton} from "../components";
import useSettings from "../../../hooks/useSettings";
import sunFill from "@iconify-icons/eva/sun-fill";
import moonFill from "@iconify-icons/eva/moon-fill";
import LogoSvg from "./components/logoSvg";

const Header = ({scrollNav, toggle, isOpen}) => {
    const {themeMode, onChangeMode} = useSettings();
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <Navbar disableGutters isopen={isOpen} scrollNav={scrollNav}>
            <LogoContainer onClick={toggleHome}>
                <LogoSvg scrollNav={scrollNav} />
            </LogoContainer>
            <Box sx={{display: {xs: "none", md: "flex"}, alignItems: "center"}}>
                <NavLinksContainer>
                    {navItems.map((navItem) => (
                        <NavLinks
                            scrollNav={scrollNav}
                            key={navItem.id}
                            to={navItem.idm}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-100}>
                            {navItem.name}
                        </NavLinks>
                    ))}
                </NavLinksContainer>
                <ThemeContainer>
                    <RadioGroup
                        name="themeMode"
                        onChange={onChangeMode}
                        value={themeMode}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between"
                            }}>
                            {["dark", "light"].map((mode, index) => (
                                <CardActionArea
                                    sx={{color: "primary.main"}}
                                    key={mode}>
                                    <Box
                                        sx={{
                                            py: 4,
                                            display: "flex",
                                            color: "text.disabled",
                                            justifyContent: "center",
                                            ...(themeMode === mode && {
                                                color: "primary.main"
                                            })
                                        }}>
                                        <Icon
                                            icon={
                                                index === 0 ? sunFill : moonFill
                                            }
                                            width={24}
                                            height={24}
                                        />
                                    </Box>

                                    <FormControlLabel
                                        label=""
                                        value={mode}
                                        control={
                                            <Radio sx={{display: "none"}} />
                                        }
                                        sx={{
                                            top: 0,
                                            margin: 0,
                                            width: "100%",
                                            height: "100%",
                                            position: "absolute"
                                        }}
                                    />
                                </CardActionArea>
                            ))}
                        </Box>
                    </RadioGroup>
                </ThemeContainer>
            </Box>
            <Box
                sx={{
                    display: {xs: "none", md: "flex"},
                    alignItems: "center",
                    position: "absolute",
                    right: "10%"
                }}>
                <ButtonContainer>
                    <PageLink href="/auth/login" scrollNav={scrollNav}>
                        <OutlinedButton> Sign in </OutlinedButton>
                    </PageLink>
                    <PageLink href="/auth/register">
                        <ContainedButton>Sign up</ContainedButton>
                    </PageLink>
                </ButtonContainer>
            </Box>

            <Box
                sx={{
                    display: {xs: "flex", md: "none"},
                    alignItems: "center",
                    position: "absolute",
                    right: "10%"
                }}>
                <NavIconButton onClick={toggle}>
                    <NavIcon
                        icon="material-symbols:menu-rounded"
                        scrollNav={scrollNav}
                    />
                </NavIconButton>
            </Box>
        </Navbar>
    );
};

const Navbar = styled(Toolbar)(({theme, scrollNav}) => ({
    height: 80,
    width: "100%",
    position: "fixed",
    background: theme.palette.background.paper,
    boxShadow: scrollNav ? theme.shadows[3] : "none",
    top: 0,
    left: 0,
    transition: ".35s ease-in-out",
    zIndex: 999
}));
const LogoContainer = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginLeft: "10%",
    height: "inherit",
    cursor: "pointer",
    [theme.breakpoints.down("lg")]: {
        marginLeft: "5%"
    }
}));
const ThemeContainer = styled(Box)(({theme}) => ({
    position: "absolute",
    right: "27%",
    [theme.breakpoints.down("lg")]: {
        right: "32%"
    },
    [theme.breakpoints.down("md")]: {
        right: "20%"
    }
}));
const NavLinksContainer = styled(List)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    marginLeft: 100,
    [theme.breakpoints.down("lg")]: {
        marginLeft: 50
    }
}));
const NavLinks = styled(ScrollLink)(({theme}) => ({
    fontFamily: theme.typography.fontFamily,
    position: "relative",
    margin: "0px 20px",
    padding: "10px 0px",
    fontWeight: 500,
    color: theme.palette.text.primary,
    cursor: "pointer",
    fontSize: "0.9rem",
    "&::after": {
        content: "''",
        height: 2,
        width: 0,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        background: theme.palette.primary.main,
        transition: "width .3s ease-in-out"
    },
    "&:hover::after": {
        width: "100%",
        transition: "width .5s ease-in-out"
    },
    [theme.breakpoints.down("lg")]: {
        margin: "0px 9px"
    }
}));
const ButtonContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center"
}));
const NavIconButton = styled(IconButton)(() => ({
    position: "absolute",
    right: "10%"
}));
const NavIcon = styled(Icon)(({theme}) => ({
    fontSize: "30px",
    color: theme.palette.primary.main
}));
const PageLink = styled("a")(() => ({
    textDecoration: "none",
    "&:not(:first-of-type)": {
        marginLeft: 5
    }
}));
export const navItems = [
    {id: 1, idm: "home", name: "Home"},
    {id: 2, idm: "about", name: "About"},
    {id: 3, idm: "features", name: "Features"},
    {id: 4, idm: "faqs", name: "FAQs"},
    {id: 5, idm: "contact", name: "Contact"}
];

export default Header;
