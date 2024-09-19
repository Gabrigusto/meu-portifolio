import { Container, Grid, Grid2, styled, Typography } from "@mui/material"
import avatar from "../../../../assets/images/avatar.jpeg"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ContactMailIcon from "@mui/icons-material/ContactMail"

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        background: "Black",
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
                            <Typography color="primary" variant="h1" textAlign="center">Gabriel Batista</Typography>
                            <Typography color="primary" variant="h2" textAlign="center">Meu Portifolio</Typography>
                            <Grid container display="flex" justifyContent="center" >

                                <Grid item xs={12} md={4} display={"flex"} justifyContent="center">
                                    <button>
                                        <FileDownloadIcon />
                                        contato
                                        </button>
                                </Grid>


                                <Grid item xs={12} md={4} display={"flex"} justifyContent="center">
                                    <button>
                                        <ContactMailIcon />
                                        Linkedin
                                    </button>
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
