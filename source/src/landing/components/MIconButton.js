import React, {forwardRef} from "react";
import PropTypes from "prop-types";
// material
import {alpha, useTheme} from "@mui/material/styles";
import {IconButton} from "@mui/material";

// ----------------------------------------------------------------------

const MIconButton = forwardRef(
    ({color = "default", children, sx, ...other}, ref) => {
        const theme = useTheme();

        if (
            color === "default" ||
            color === "inherit" ||
            color === "primary" ||
            color === "secondary"
        ) {
            return (
                <IconButton ref={ref} color={color} sx={sx} {...other}>
                    {children}
                </IconButton>
            );
        }

        return (
            <IconButton
                ref={ref}
                sx={{
                    color: theme.palette[color].main,
                    "&:hover": {
                        bgcolor: alpha(
                            theme.palette[color].main,
                            theme.palette.action.hoverOpacity
                        )
                    },
                    ...sx
                }}
                {...other}>
                {children}
            </IconButton>
        );
    }
);

MIconButton.propTypes = {
    children: PropTypes.node,
    sx: PropTypes.object,
    color: PropTypes.oneOf([
        "default",
        "inherit",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error"
    ])
};

export default MIconButton;
