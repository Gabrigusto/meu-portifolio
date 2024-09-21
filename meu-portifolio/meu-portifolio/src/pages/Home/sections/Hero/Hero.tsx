import {Container, Grid, styled, Typography } from "@mui/material"
import avatar from "../../../../assets/images/avatar.jpeg"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ContactMailIcon from "@mui/icons-material/ContactMail"
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
        background: theme.palette.primary.main,
        height: "100vh"
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%"

    }))



    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <StyledImg src={avatar} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center">Gabriel Batista</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">Meu Portifolio</Typography>
                            <Grid container display="flex" justifyContent="center" >

                                <Grid item xs={12} md={4} display={"flex"} justifyContent="center">
                                    <StyledButton>
                                        <FileDownloadIcon /> 
                                        contato
                                        </StyledButton>
                                </Grid>


                                <Grid item xs={12} md={4} display={"flex"} justifyContent="center">
                                    <StyledButton>
                                        <ContactMailIcon />
                                        Linkedin
                                    </StyledButton>
                                </Grid>


                            </Grid>

                        </Grid>
                    </Grid>

                </Container>

            </StyledHero>


        </>
    )
}

export default Hero
