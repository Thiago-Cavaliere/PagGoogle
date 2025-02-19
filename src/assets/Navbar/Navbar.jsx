import { Avatar, Toolbar, styled } from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';

const StyledBar = styled(Toolbar)(() => ({
    display: 'flex',
    justifyContent: "flex-end",
    backgroundColor: "transparent", // Fundo transparente
    position: "fixed", // Fixa o Navbar no topo
    top: 0, // Coloca o Navbar no topo
    left: 0, // Alinha à esquerda
    right: 0, // Alinha à direita
    zIndex: 100, // Garante que o Navbar esteja em cima da imagem
    gap: "15px",
    fontsize: "10px",
   
}));

export default function Navbar() {
  return (
    <>
      <StyledBar>
        <a href="/" style={{ color: 'white' , textDecoration:"none" }}>Gmail</a>
        <a style={{ color: 'white' }}>Imagens</a>   
        <AppsIcon style={{ color: 'white' }} />
        <Avatar sx={{ padding: "2px", background: "green" }}>T</Avatar>
      </StyledBar>
    </>
  );
}
