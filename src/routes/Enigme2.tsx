import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Enigme2() {
  const navigation = useNavigate();
  return (
    <Stack gap={2} flex={1} alignItems={"center"} paddingTop={10}>
      <Typography variant="h1">Epreuve 2</Typography>
      <Typography variant="body1">Prouvez vos capacités physiques.</Typography>
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
