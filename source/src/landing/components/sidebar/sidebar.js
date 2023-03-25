import React from "react";
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    Box,
    RadioGroup,
    CardActionArea,
    FormControlLabel,
    Radio
} from "@mui/material";
import {navItems} from "../header";
import {Link as ScrollLink} from "react-scroll";
import {Close} from "@mui/icons-material";
import {styled} from "@mui/material/styles";
import {ContainedButton, OutlinedButton} from "../components";
import {Icon} from "@iconify/react/dist/iconify";
import sunFill from "@iconify-icons/eva/sun-fill";
import moonFill from "@iconify-icons/eva/moon-fill";
import useSettings from "../../../hooks/useSettings";

const Sidebar = ({open, toggle}) => {
    const drawerWidth = 400;
    const {themeMode, onChangeMode} = useSettings();

    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={toggle}
            sx={{
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth
                }
            }}>
            <List>
                <SideBarListItem onClick={toggle}>
                    <ListItemIcon sx={{minWidth: "auto"}}>
                        <CloseIcon />
                    </ListItemIcon>
                </SideBarListItem>
                <Box>
                    {navItems.map((sideItem) => (
                        <ListItem
                            key={sideItem.id}
                            sx={{flexDirection: "column"}}>
                            <ListItemLink
                                to={sideItem.idm}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                onClick={toggle}>
                                {sideItem.name}
                            </ListItemLink>
                        </ListItem>
                    ))}
                </Box>
            </List>
            <SideBarButtonWrapper>
                <PageLink href="/auth/register">
                    <SideOutlinedButton>Sign in</SideOutlinedButton>
                </PageLink>
                <PageLink href="/auth/login">
                    <SideContainedButton>Sign up</SideContainedButton>
                </PageLink>
            </SideBarButtonWrapper>
            <ThemeContainer>
                <RadioGroup
                    name="themeMode"
                    onChange={onChangeMode}
                    value={themeMode}>
                    <Box
                        sx={{display: "flex", justifyContent: "space-between"}}>
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
                                        icon={index === 0 ? sunFill : moonFill}
                                        width={24}
                                        height={24}
                                    />
                                </Box>
                                <FormControlLabel
                                    label=""
                                    value={mode}
                                    control={<Radio sx={{display: "none"}} />}
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
        </Drawer>
    );
};

const SideBarListItem = styled(ListItem)(() => ({
    justifyContent: "flex-end",
    cursor: "pointer"
}));
const CloseIcon = styled(Close)(({theme}) => ({
    fontSize: "30px",
    color: theme.palette.primary.main
}));
const ListItemLink = styled(ScrollLink)(({theme}) => ({
    fontFamily: theme.typography.fontFamily,
    position: "relative",
    margin: "10px 0px",
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
        transition: "all .3s ease-in-out"
    },
    "&:hover::after": {
        width: "100%",
        transition: "all .5s ease-in-out"
    }
}));
const SideBarButtonWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: 200,
    margin: "auto"
}));
const SideOutlinedButton = styled(OutlinedButton)(() => ({
    width: "100%",
    marginTop: 20
}));
const SideContainedButton = styled(ContainedButton)(() => ({
    width: "100%"
}));
const PageLink = styled("a")(() => ({
    textDecoration: "none",
    "&:not(:first-of-type)": {
        marginTop: 20
    }
}));
const ThemeContainer = styled(Box)(({theme}) => ({
    position: "relative",
    display: "flex",
    justifyContent: "center"
}));

export default Sidebar;
