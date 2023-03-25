import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Container,
    Grid
} from "@mui/material";
import {CentreWrapper, Desc, RootStyle, Subheader, Header} from "../components";
import {ExpandLess} from "@mui/icons-material";
import {styled} from "@mui/material/styles";
import {MotionInView, varFadeInDown, varFadeInUp} from "../animate";

const Faq = () => {
    const [expanded, setExpanded] = React.useState("panel1");
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <RootStyle id="faqs">
            <Container maxWidth="lg">
                <Grid container direction="column">
                    <Grid item sx={{width: "100%"}}>
                        <MotionInView variants={varFadeInDown}>
                            <CentreWrapper>
                                <Desc>FAQs</Desc>
                                <Header>Frequently Asked Questions</Header>
                                <Subheader
                                    sx={{
                                        mb: "40px",
                                        textAlign: "center",
                                        width: {xs: "100%", md: "60%"}
                                    }}>
                                    Below we’ve answered your most frequently
                                    asked questions. If you have any other
                                    questions, please get in touch using the
                                    contact form below.
                                </Subheader>
                            </CentreWrapper>
                        </MotionInView>
                    </Grid>
                    <Grid item sx={{width: "100%"}}>
                        <MotionInView variants={varFadeInUp}>
                            {faqItems.map((generalItem) => (
                                <FaqAccordion
                                    expanded={expanded === generalItem.panel}
                                    onChange={handleChange(generalItem.panel)}
                                    key={generalItem.id}>
                                    <FaqAccordionSummary
                                        aria-controls={
                                            generalItem.togglerId + "d-content"
                                        }
                                        id={generalItem.togglerId + "d-header"}
                                        expandIcon={<FaqExpandLess />}>
                                        {generalItem.question}
                                    </FaqAccordionSummary>
                                    <FaqAccordionDetails>
                                        {generalItem.answer}
                                    </FaqAccordionDetails>
                                </FaqAccordion>
                            ))}
                        </MotionInView>
                    </Grid>
                </Grid>
            </Container>
        </RootStyle>
    );
};

const faqItems = [
    {
        id: 1,
        question: "Can I buy giftcard with crypto?",
        answer: "Yes, you can buy giftcard with crypto on our system",
        panel: "panel1"
    },
    {
        id: 2,
        question: "Does it support multiple languages?",
        answer: "Yes we do, you can however get in contact with our support if your desired locale isn't available in the system!",
        panel: "panel2"
    },
    {
        id: 3,
        question: "Are all cryptocurrencies supported?",
        answer: "No, not all currencies are supported, more would be made available over time!",
        panel: "panel3"
    },
    {
        id: 4,
        question: "How can I change my preferred language?",
        answer: "You'll find a selection panel to change to available locales on the home page!",
        panel: "panel4"
    },
    {
        id: 5,
        question: "I want my data deleted?",
        answer: "Please contact our support using the Get support button in the system or through the contact form below!",
        panel: "panel5"
    },
    {
        id: 6,
        question: "My region isn't supported",
        answer: "We are limited to the countries we can support, however you can get in contact with our support for a feedback on if your region can be supported or not",
        panel: "panel6"
    }
];

const FaqAccordion = styled(Accordion)(({theme}) => ({
    border: "none",
    background: "transparent",
    padding: 8,
    "&:not(:first-of-type)": {
        marginTop: 10
    },
    "&.Mui-expanded": {
        border: "none",
        borderTop: `1px solid ${theme.palette.divider}`,
        borderRadius: 0,
        boxShadow: "none",
        "&:first-of-type": {
            borderTop: "none"
        }
    },
    [theme.breakpoints.down("md")]: {
        "&:first-of-type": {
            marginTop: 40
        }
    }
}));
const FaqAccordionSummary = styled(AccordionSummary)(({theme}) => ({
    ...theme.typography.h6,
    fontWeight: 400,
    color: theme.palette.primary.darker
}));
const FaqAccordionDetails = styled(AccordionDetails)(({theme}) => ({
    ...theme.typography.body1,
    color: theme.palette.grey[500]
}));
const FaqExpandLess = styled(ExpandLess)(({theme}) => ({
    color: theme.palette.grey["400"],
    fontSize: 30
}));

export default Faq;
