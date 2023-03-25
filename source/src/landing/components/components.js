import {styled} from "@mui/material/styles";
import {Box, Button} from "@mui/material";
import {keyframes} from "@emotion/react";

export const RootStyle = styled(Box)(({theme}) => ({
    width: "100%",
    padding: "80px 0px",
    position: "relative",
    boxSizing: "border-box",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
        padding: "40px 0"
    }
}));
export const Desc = styled(Box)(({theme}) => ({
    fontSize: "0.9rem",
    color: theme.palette.primary.light,
    marginBottom: 10,
    fontWeight: 600,
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
        textAlign: "center"
    }
}));
export const Subheader = styled(Box)(({theme}) => ({
    ...theme.typography.h6,
    fontWeight: 400,
    marginBottom: 20,
    color: theme.palette.grey["500"],
    [theme.breakpoints.down("md")]: {
        textAlign: "center"
    }
}));
export const Header = styled(Box)(({theme}) => ({
    ...theme.typography.h3,
    marginBottom: 20,
    color: theme.palette.primary.darker,
    [theme.breakpoints.down("md")]: {
        textAlign: "center"
    }
}));
export const Body = styled(Box)(({theme}) => ({
    ...theme.typography.body1,
    color: theme.palette.grey["500"]
}));
export const CentreWrapper = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}));
export const ColumnWrapper = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "column"
}));
export const ContainedButton = styled(Button)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    padding: "8px 30px",
    letterSpacing: 1.1,
    textTransform: "capitalize",
    background: theme.palette.primary.main,
    color: "#fff",
    fontSize: ".9rem",
    borderRadius: theme.shape.borderRadiusLg,
    fontWeight: 500,
    boxShadow: theme.customShadows.primary,
    "&:hover": {
        background: theme.palette.primary.dark
    }
}));
export const OutlinedButton = styled(ContainedButton)(({theme}) => ({
    background: "transparent",
    padding: "8px 14px",
    color: theme.palette.primary.main,
    boxShadow: "none",
    "&:hover": {
        color: theme.palette.primary.dark,
        background: "none"
    }
}));
export const Svg = styled("svg")(({theme}) => ({
    width: 40,
    height: 40,
    fill: theme.palette.primary.main,
    marginRight: 15
}));
export const ImageAnimation = styled(Box)(({theme}) => ({
    position: "absolute",
    height: 500,
    width: 500,
    left: "30%",
    zIndex: 1,
    top: "50%",
    "&::before, &::after": {
        position: "absolute",
        content: "''",
        border: "4px solid rgba(151, 175, 213, 0.3)",
        borderRadius: "50%",
        boxSizing: "border-box"
    },
    "&::before": {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        borderTopColor: theme.palette.primary.dark,
        borderRightColor: theme.palette.primary.dark,
        animation: `${rotate} 15s linear infinite 0s;`
    },
    "&::after": {
        top: 5,
        left: 5,
        bottom: 85,
        right: 85,
        borderTopColor: theme.palette.primary.main,
        borderBottomColor: theme.palette.primary.main,
        animation: `${reverseRotate} 10s linear infinite 0s;`
    },
    [theme.breakpoints.down("lg")]: {
        height: 400,
        width: 400
    },
    [theme.breakpoints.down("md")]: {
        left: "50%",
        top: "60%"
    },
    [theme.breakpoints.down("sm")]: {
        height: 320,
        width: 320,
        top: "67%"
    }
}));

const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(
            0deg)
  }
  to {
    transform: translate(-50%, -50%) rotate(
            360deg)
  }
`;
const reverseRotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(
            360deg)
  }
  to {
    transform: translate(-50%, -50%) rotate(
            0deg)
  }
`;
export const PageLink = styled("a")(() => ({
    textDecoration: "none"
}));
