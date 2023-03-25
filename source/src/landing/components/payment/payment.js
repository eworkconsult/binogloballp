import React from "react";
import {ColumnWrapper, RootStyle} from "../components";
import {Box, Container, Typography} from "@mui/material";
import FlutterWave from "./components/flutter";
import Mollie from "./components/mollie";
import Paypal from "./components/paypal";
import Paystack from "./components/paystack";
import PayU from "./components/payU";
import Stripe from "./components/stripe";
import {styled} from "@mui/material/styles";
import {MotionInView, varFadeInUp} from "../animate";

const Payment = () => {
    return (
        <RootStyle sx={{pb: 0, pt: "40px"}}>
            <Container maxWidth="xl">
                <MotionInView variants={varFadeInUp}>
                    <ColumnWrapper>
                        <PaymentHeader>
                            We feature a variety of payment gateways to choose
                            from
                        </PaymentHeader>
                        <PaymentBox>
                            <FlutterWave />
                            <Mollie />
                            <Stripe />
                            <Paypal />
                            <Paystack />
                            <PayU />
                        </PaymentBox>
                    </ColumnWrapper>
                </MotionInView>
            </Container>
        </RootStyle>
    );
};

const PaymentBox = styled(Box)(({theme}) => ({
    display: "grid",
    gap: 0,
    width: "100%",
    justifyContent: "center",
    gridTemplateColumns: "auto auto auto auto auto auto",
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "auto auto"
    }
}));
const PaymentHeader = styled(Typography)(({theme}) => ({
    ...theme.typography.h5,
    textAlign: "center",
    color: theme.palette.primary.dark,
    marginBottom: 20
}));

export default Payment;
