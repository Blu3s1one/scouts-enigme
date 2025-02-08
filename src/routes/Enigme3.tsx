import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import banc from "../assets/images/banc_seine.jpg";
import barriere from "../assets/images/barriere.jpg";
import panneau from "../assets/images/panneau_securite.jpg";
import sport from "../assets/images/sport.jpg";
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
          où sont ces endroits, non ?
        </Typography>
        <Typography variant="body2" textAlign={"center"} fontSize={12}>
          Vous trouverez plus ou moins plus le code.
        </Typography>
      </Grid>

      <img src={banc} alt="Indice" width={width * 0.8} />
      <img src={barriere} alt="Indice" width={width * 0.8} />
      <img src={panneau} alt="Indice" width={width * 0.8} />
      <img src={sport} alt="Indice" width={width * 0.8} />
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
