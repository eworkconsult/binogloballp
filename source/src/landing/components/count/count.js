import React from "react";
import {Body, CentreWrapper, Header, RootStyle} from "../components";
import {Container, Stack} from "@mui/material";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import {MotionInView, varFadeInUp} from "../animate";

const Count = () => {
    return (
        <VisibilitySensor partialVisibility offset={{bottom: 0}}>
            {({isVisible}) => (
                <RootStyle
                    sx={{
                        bgcolor: (theme) => theme.palette.grey[100]
                    }}>
                    <Container maxWidth="lg">
                        <MotionInView variants={varFadeInUp}>
                            <Stack direction="row">
                                {countItems.map((countItem) => (
                                    <CentreWrapper key={countItem.id}>
                                        {isVisible ? (
                                            <Header>
                                                <CountUp
                                                    end={countItem.end}
                                                    duration={
                                                        countItem.duration
                                                    }
                                                    prefix={countItem.prefix}
                                                    suffix={countItem.suffix}
                                                />
                                            </Header>
                                        ) : null}
                                        <Body sx={{textAlign: "center"}}>
                                            {countItem.text}
                                        </Body>
                                    </CentreWrapper>
                                ))}
                            </Stack>
                        </MotionInView>
                    </Container>
                </RootStyle>
            )}
        </VisibilitySensor>
    );
};

const countItems = [
    {
        id: 1,
        end: 200,
        duration: 1,
        prefix: "",
        suffix: "M+",
        text: "Trading Volume (NGN)"
    },
    {
        id: 2,
        end: 35,
        duration: 1,
        prefix: "",
        suffix: "+",
        text: "Payment Methods"
    },
    {
        id: 3,
        end: 25,
        duration: 1,
        prefix: "",
        suffix: "K+",
        text: "Verified Sellers"
    }
];

export default Count;
