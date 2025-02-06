import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import carte from "../assets/images/carte.png";
import { Grid, Stack } from "@mui/system";
export default function Enigme1() {
  const navigation = useNavigate();
  const width = window.innerWidth;
  return (
    <Grid padding={5} alignItems={"center"}>
      <Grid paddingBottom={2}>
        <Typography variant="h1" textAlign={"center"}>
          Epreuve 1
        </Typography>
        <Typography variant="body1" textAlign={"center"}>
          Retrouvez votre carte d'identité pour commencer.
        </Typography>
        <Typography variant="body2" textAlign={"center"}>
          Elle se trouve à la croigée des chemins
        </Typography>
      </Grid>

      <img src={carte} alt="Indice" width={width * 0.8} />
      <Stack alignItems={"center"} paddingTop={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigation("/")}
          sx={{ alignSelf: "center" }}
        >
          Retour
        </Button>
      </Stack>
    </Grid>
  );
}
