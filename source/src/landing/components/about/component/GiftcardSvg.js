import * as React from "react";
import {useTheme} from "@mui/material/styles";
import {Svg} from "../../components";

function GiftcardSvg(props) {
    const theme = useTheme();
    const color = theme.palette.primary.dark;
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            viewBox="0 90 512 512"
            {...props}>
            <path d="M309.5 408.5h135c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5h-135c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5zm165-222.5h-437C16.8 186 0 202.8 0 223.5v251C0 495.2 16.8 512 37.5 512h437c20.7 0 37.5-16.8 37.5-37.5v-251c0-20.7-16.8-37.5-37.5-37.5zM15 223.5c0-12.4 10.1-22.5 22.5-22.5h123v73.7c-5.2 1-10.1 3.2-14.3 6.1l-36.3-18.6c-9.5-4.9-20.7-4.5-29.8 1.1-9.1 5.6-14.6 15.3-14.6 26V307H15v-83.5zm123.1 111.9l-35.1 18c-4.8 2.5-10.5 2.3-15.2-.6-4.6-2.8-7.4-7.8-7.4-13.2v-50.2c0-5.4 2.8-10.4 7.4-13.2 4.6-2.8 10.3-3.1 15.2-.6l32.5 16.6C132 298 130 304.8 130 312c0 8.8 3 17 8.1 23.4zM160.5 497h-123C25.1 497 15 486.9 15 474.5V322h50.5v17.6c0 10.7 5.5 20.4 14.6 26 4.9 3 10.4 4.5 15.9 4.5 4.7 0 9.5-1.1 13.9-3.4l40.8-20.9c3 1.6 6.3 2.7 9.8 3.4V497zM145 312c0-12.7 10.3-23 23-23s23 10.3 23 23-10.3 23-23 23-23-10.3-23-23zm352 162.5c0 12.4-10.1 22.5-22.5 22.5h-299V349.3c3.4-.7 6.7-1.9 9.8-3.4l40.8 20.9c4.4 2.3 9.2 3.4 13.9 3.4 5.5 0 11-1.5 15.9-4.5 9.1-5.6 14.6-15.3 14.6-26V322H497v152.5zM200.5 292.2l32.5-16.6c4.8-2.5 10.5-2.3 15.2.6 4.6 2.8 7.4 7.8 7.4 13.2v50.2c0 5.4-2.8 10.4-7.4 13.2-4.6 2.8-10.3 3.1-15.2.6l-35.1-18c5.1-6.5 8.1-14.6 8.1-23.4 0-7.2-2-14-5.5-19.8zM497 307H270.5v-17.6c0-10.7-5.5-20.4-14.6-26-9.1-5.6-20.3-6-29.8-1.1l-36.3 18.6c-4.2-3-9-5.1-14.2-6.1V201h299c12.4 0 22.5 10.1 22.5 22.5V307zM309.5 438.5h75c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5h-75c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5z" />
        </Svg>
    );
}

export default GiftcardSvg;
