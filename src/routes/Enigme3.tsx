import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/image.png";
export default function Enigme3() {
  const navigation = useNavigate();
  return (
    <Stack gap={2} flex={1} alignItems={"center"} paddingTop={10}>
      <Typography variant="h1">Epreuve 3</Typography>
      <Typography variant="body1">
        Vous avez oublié votre code secret, mais vous devez vous souvenir de où
        est cet endroit, non ?
      </Typography>
      <img src={image} alt="Indice" height={300} width={600} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigation("/")}
      >
        Retour
      </Button>
    </Stack>
  );
}
