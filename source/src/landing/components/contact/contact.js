import React from "react";
import {
    Box,
    Grid,
    TextField,
    Typography,
    TextareaAutosize,
    Container,
    Alert,
    Modal,
    CircularProgress
} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Icon} from "@iconify/react";
import {MotionInView, varFadeInDown, varFadeInUp} from "../animate";
import emailjs from "@emailjs/browser";
import {
    CentreWrapper,
    Desc,
    Subheader,
    Header,
    RootStyle,
    ContainedButton
} from "../components";

const Contact = () => {
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [toSend, setToSend] = React.useState({
        from_name: "",
        to_name: "",
        message: "",
        reply_to: ""
    });

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setIsSuccess(false);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs
            .send("bino9ja", "template_bfhv2dg", toSend, "DjwSLv5946DqfU4XH")
            .then((response) => {
                if (response.status >= 200 && response.status <= 299) {
                    setIsSuccess(true);
                    setIsLoading(false);
                } else {
                    setIsError(true);
                }
            })
            .catch(() => {
                setIsError(true);
            });
    };

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    };
    return (
        <RootStyle id="contact">
            <Container maxWidth="lg">
                <Grid container direction="column">
                    <Grid item>
                        <MotionInView variants={varFadeInDown}>
                            <CentreWrapper>
                                <Desc>Contact Us</Desc>
                                <Header>We love to hear from you</Header>
                                <Subheader>
                                    Any Questions? Any Queries? Please kindly
                                    let us know and we will get back to you
                                    shortly.
                                </Subheader>
                            </CentreWrapper>
                        </MotionInView>
                    </Grid>
                    <Grid item container>
                        <Grid item xs={12} md={4}>
                            <MotionInView variants={varFadeInUp}>
                                <ContactIconWrapper>
                                    {contactItems.map((contactItem) => (
                                        <ContactContent
                                            key={contactItem.id}
                                            onClick={() => {
                                                window.open(
                                                    contactItem.webUrl,
                                                    "_blank"
                                                );
                                            }}>
                                            <ContactIconBackground>
                                                <ContactIcon
                                                    icon={contactItem.icon}
                                                />
                                            </ContactIconBackground>
                                            <ContactText>
                                                {contactItem.text}
                                            </ContactText>
                                        </ContactContent>
                                    ))}
                                </ContactIconWrapper>
                            </MotionInView>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <MotionInView variants={varFadeInUp}>
                                <ContactForm onSubmit={onSubmit}>
                                    <Box sx={{display: "flex"}}>
                                        <CustomtextField
                                            id="outlined-basic"
                                            label="Name"
                                            variant="outlined"
                                            name="from_name"
                                            value={toSend.from_name}
                                            onChange={handleChange}
                                            required
                                        />
                                        <CustomtextField
                                            id="outlined"
                                            label="Email"
                                            variant="outlined"
                                            required
                                            type="Email"
                                            name="reply_to"
                                            value={toSend.reply_to}
                                            onChange={handleChange}
                                        />
                                    </Box>
                                    <ContactTextareaAutosize
                                        aria-label="get-in-touch"
                                        minRows={10}
                                        name="message"
                                        placeholder="Your message"
                                        value={toSend.message}
                                        onChange={handleChange}
                                    />
                                    <ButtonWrapper>
                                        <ContainedButton
                                            type="submit"
                                            variant="contained">
                                            Send Message{" "}
                                            {isLoading ? (
                                                <CircularProgress
                                                    size={20}
                                                    sx={{
                                                        marginLeft: "10px",
                                                        color: "#fff"
                                                    }}
                                                />
                                            ) : (
                                                <ButtonIcon icon="fluent:send-28-filled" />
                                            )}
                                        </ContainedButton>
                                    </ButtonWrapper>
                                </ContactForm>
                            </MotionInView>
                            <Modal
                                open={isSuccess}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description">
                                <ModalStyle>
                                    <Alert
                                        severity={isError ? "error" : "success"}
                                        sx={{
                                            height: "150px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}>
                                        {isError
                                            ? "Message failed to deliver"
                                            : "Message Sent Successfully"}
                                    </Alert>
                                </ModalStyle>
                            </Modal>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </RootStyle>
    );
};

const ContactIconWrapper = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    marginTop: 50,
    padding: "30px 70px",
    [theme.breakpoints.down("md")]: {
        padding: 0,
        margin: 0
    }
}));
const ContactContent = styled(Box)(() => ({
    display: "flex",
    marginBottom: 40,
    alignItems: "center"
}));
const ContactIconBackground = styled(Box)(({theme}) => ({
    background: theme.palette.primary.main,
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    boxShadow: theme.customShadows.primary
}));
const ContactIcon = styled(Icon)(({theme}) => ({
    color: "#fff",
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
        fontSize: 24
    }
}));
const ContactText = styled(Typography)(({theme}) => ({
    ...theme.typography.body2,
    paddingLeft: 25,
    color: theme.palette.grey[500]
}));
const ContactForm = styled("form")(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    marginTop: 50,
    [theme.breakpoints.down("md")]: {
        padding: 0,
        margin: 0
    }
}));
const ModalStyle = styled(Box)(({theme}) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: theme.shape.borderRadiusMd,
    border: "2px solid transparent",
    boxShadow: 24,
    p: 4
}));
const CustomtextField = styled(TextField)(({theme}) => ({
    marginBottom: 20,
    width: "100%",
    "& input:valid + fieldset": {
        border: `1px solid ${theme.palette.divider}`
    },
    "& input:invalid + fieldset": {
        border: `1px solid ${theme.palette.divider}`
    },
    "& input:valid:focus + fieldset": {
        borderLeftWidth: 6,
        padding: "4px !important",
        border: `1px solid ${theme.palette.divider}`
    },
    "& label": {
        color: theme.palette.grey["500"],
        fontSize: 14
    },
    "& input": {
        color: theme.palette.grey["500"],
        fontSize: 14
    },
    "&.Mui-focused fieldset": {
        borderColor: theme.palette.divider
    },
    "& input:hover": {
        outline: "none"
    },
    "&:first-of-type": {
        marginRight: 20
    }
}));
const ContactTextareaAutosize = styled(TextareaAutosize)(({theme}) => ({
    padding: 15,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.grey[500],
    fontSize: 14,
    border: `1px solid ${theme.palette.divider}`,
    marginBottom: 40,
    borderRadius: 7,
    background: "transparent",
    zIndex: 2,
    "&:hover": {
        outline: "none"
    },
    "&::placeholder": {
        color: theme.palette.grey[500]
    },
    "&:focus": {
        outline: "none",
        border: `2px solid ${theme.palette.primary.main}`
    }
}));
const ButtonWrapper = styled(Box)(({theme}) => ({
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
        justifyContent: "center"
    }
}));
const ButtonIcon = styled(Icon)(() => ({
    fontSize: 32,
    paddingLeft: 10
}));
const contactItems = [
    {
        id: 1,
        text: "080 6000 0000",
        icon: "bxs:phone-call",
        webUrl: "tel:+08060000000"
    },
    {
        id: 2,
        text: "info@bino9ja.com",
        icon: "ant-design:mail-filled",
        webUrl: "mailto:info@bino9ja.com"
    },
    {
        id: 3,
        text: "Join us on telegram",
        icon: "cib:telegram-plane",
        webUrl: "#"
    }
];

export default Contact;
