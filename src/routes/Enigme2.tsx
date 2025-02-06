import { Button, Typography } from "@mui/material";
import { Grid, Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function Enigme2() {
  const navigation = useNavigate();
  return (
    <Grid alignItems={"center"} paddingTop={10}>
      <Typography variant="h1" textAlign={"center"}>
        Epreuve 2
      </Typography>
      <Typography variant="body1" textAlign={"center"}>
        Prouvez vos capacités physiques.
      </Typography>
      <Stack alignItems={"center"} paddingTop={2}>
        {" "}
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
