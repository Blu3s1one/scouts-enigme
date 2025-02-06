import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import carte from "../assets/images/carte.png";
export default function Enigme1() {
  const navigation = useNavigate();
  return (
    <Stack gap={2} flex={1} alignItems={"center"} paddingTop={10}>
      <Typography variant="h1">Epreuve 1</Typography>
      <Typography variant="body1">
        Retrouvez votre carte d'identité pour commencer.
      </Typography>
      <Typography variant="body2">
        Elle se trouve à la croigée des chemins
      </Typography>
      <img src={carte} alt="Indice" height={400} width={400} />
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
