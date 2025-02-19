import { Avatar, styled } from "@mui/material";
import Img from "../img/jonatan-pie-3l3RwQdHRHg-unsplash.jpg";
import { Container, Grid } from "@mui/material";
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import GamepadIcon from '@mui/icons-material/Gamepad';

// Usando styled ao invés de style
const InputStyled = styled("input")(() => ({
  display: "flex",
  width: "100%",  // Ajuste para uma largura razoável
  maxWidth: "800px",  // Limita a largura do campo
  height: "50px",
  backgroundColor: "white",
  borderRadius: "50px",
  justifyContent: "space-around",
  padding: "10px 20px",
  fontSize: "1rem",
  marginBottom: "20px", // Adiciona um espaçamento inferior
  border:"none",
}));

const ImgStyled = styled("div")(() => ({
  backgroundImage: `url(${Img})`,
  backgroundSize: "cover",
  backgroundPosition: "center", // Para centralizar a imagem de fundo
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}));




export default function Body() {
  return (
    <ImgStyled>
      <Container > 
        <Grid >
          <Grid >
            <Grid  marginTop="-400px" justifyContent="center" display="flex">
            <h1 style={{ color: "white", fontSize: "5rem", fontWeight: "bold", fontFamily: "''Segoe UI', Tahoma, sans-serif" }}>
              Google
            </h1>
            </Grid >
            <Grid justifyContent="center" display="flex">
            <InputStyled  type="text" placeholder="Pesquise no Google ou digite um URL" />
            </Grid>
          </Grid>
        </Grid>

        {/* Alinhando os ícones na horizontal */}
        <Grid container justifyContent="center" alignItems="center" style={{ marginTop: "25px" }}>
          <Grid item style={{ margin: "0 25px" }}>
            <Avatar sx={{ bgcolor: "transparent", border: "1px solid white", padding: "25px", background:"white"} }>
            <XIcon style={{ fontSize: 50,  background: "black" }} />
            </Avatar>
            <Grid container justifyContent="center" alignItems="center">
            <h1 style={{ color: "white", fontSize: "0.8rem", fontWeight: "bold" }} >
              Twitter
              </h1>
              </Grid>
          </Grid>

          <Grid  item style={{ margin: "0 25px" }}>
            <Avatar sx={{ bgcolor: "transparent", border: "1px solid white", padding: "25px", background:"white"}}>
              <WhatsAppIcon style={{ fontSize: 50, color: "rgb(37, 211, 102)" }} />
            </Avatar>
            <Grid container justifyContent="center" alignItems="center">
            <h1 style={{ color: "white", fontSize: "0.8rem", fontWeight: "bold" }}>
              WhatsApp
              </h1>
              </Grid>
          </Grid>

          <Grid item style={{ margin: "0 35px" }}>
            <Avatar sx={{ bgcolor: "transparent", border: "1px solid white", padding: "25px", background:"white"}}>
              <MailIcon style={{ fontSize: 50,  color:"blue" }} />
            </Avatar>
            <Grid container justifyContent="center" alignItems="center">
            <h1 style={{ color: "white", fontSize: "0.8rem", fontWeight: "bold" }}>
              Email
              </h1>
              </Grid>
          </Grid>

          <Grid item style={{ margin: "0 35px" }}>
            <Avatar sx={{ bgcolor: "transparent", border: "1px solid white", padding: "25px", background:"white"}}>
              <LinkedInIcon style={{ fontSize: 50, color: "rgb(0, 119, 181)" }} />
            </Avatar>
            <Grid container justifyContent="center" alignItems="center">
            <h1 style={{ color: "white", fontSize: "0.8rem", fontWeight: "bold" }}>
              Linkedin
              </h1>
              </Grid>
          </Grid>

          <Grid item style={{ margin: "0 25px" }}>
            <Avatar sx={{ bgcolor: "transparent", border: "1px solid white", padding: "25px", background:"white"}}>
              <FacebookIcon style={{ fontSize: 50, color: "blue" }} />
            </Avatar>
            <Grid container justifyContent="center" alignItems="center">
            <h1 style={{ color: "white", fontSize: "0.8rem", fontWeight: "bold" }}>
              Facebook
              </h1>
              </Grid>
          </Grid>

          <Grid item style={{ margin: "0 35px" }}>
            <Avatar sx={{ bgcolor: "transparent", border: "1px solid white", padding: "25px", background:"white"}}>
              <YouTubeIcon style={{ fontSize: 50, color: "rgb(255, 0, 0)" }} />
            </Avatar>
            <Grid container justifyContent="center" alignItems="center">
            <h1 style={{ color: "white", fontSize: "0.8rem", fontWeight: "bold" }}>
              YouTube
              </h1>
              </Grid>
          </Grid>

          <Grid item style={{ margin: "0 25px" }}>
            <Avatar sx={{ bgcolor: "transparent", border: "1px solid white", padding: "25px", background:"white"}}>
              <AirplanemodeActiveIcon style={{ fontSize: 50, color: "black" }} />
            </Avatar>
            <h1 style={{ color: "white", fontSize: "0.8rem", fontWeight: "bold" }}>
              Viagens
              </h1>
          </Grid>

          <Grid item style={{ margin: "0 35px" }}>
            <Avatar sx={{ bgcolor: "transparent", border: "1px solid white", padding: "25px", background:"white"}}>
              <GamepadIcon style={{ fontSize: 50, color: "black" }} />
            </Avatar>
            <Grid container justifyContent="center" alignItems="center">
            <h1 style={{ color: "white", fontSize: "0.8rem", fontWeight: "bold" }}>
              Games
              </h1>
              </Grid>
          </Grid>

          <Grid item style={{ margin: "0 32px" }}>
            <Avatar sx={{ bgcolor: "transparent", border: "1px solid white", padding: "25px", background:"white"}}>
              <GoogleIcon style={{ fontSize: 50,  color: "rgb(66, 133, 244)" }} />
            </Avatar>
            <Grid container justifyContent="center" alignItems="center">
            <h1 style={{ color: "white", fontSize: "0.8rem", fontWeight: "bold" }}>
              Google
              </h1>
              </Grid>
          </Grid>

          <Grid item style={{ margin: "0 25px" }}>
            <Avatar sx={{ bgcolor: "transparent", border: "1px solid white", padding: "25px", background:"white"}}>
              <InstagramIcon style={{ fontSize: 50, color: "rgb(228, 64, 95)" }} />
            </Avatar>
            <h1 style={{ color: "white", fontSize: "0.8rem", fontWeight: "bold" }}>
              Instagram
              </h1>
          </Grid>


        </Grid>
      </Container>
    </ImgStyled>
  );
}
