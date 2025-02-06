import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/image.png";
import { Grid, Stack } from "@mui/system";
export default function Enigme3() {
  const navigation = useNavigate();
  const width = window.innerWidth;
  return (
    <Grid flex={1} alignItems={"center"} padding={5}>
      <Grid paddingBottom={2}>
        <Typography variant="h1" textAlign={"center"}>
          Epreuve 3
        </Typography>
        <Typography variant="body2" textAlign={"center"}>
          Vous avez oublié votre code secret, mais vous devez vous souvenir de
          où est cet endroit, non ?
        </Typography>
      </Grid>

      <img src={image} alt="Indice" width={width * 0.8} />
      <Stack paddingTop={2} alignItems={"center"}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigation("/")}
        >
          Retour
        </Button>
      </Stack>
    </Grid>
  );
}
