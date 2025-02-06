import { Button, Modal, Stack, Typography } from "@mui/material";
import OTP from "../components/Code";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { OtpContext } from "../providers/OtpProvider";

export default function Home() {
  const onComplete = (otp: string) => {
    if (otp !== "9563") {
      alert("Le code secret n'est pas correct");
    }
  };

  const navigate = useNavigate();
  const { otp, otpCompleted } = useContext(OtpContext);
  return (
    <Stack flex={1} alignItems={"center"} gap={10} paddingTop={10}>
      <Typography variant="h1">Localisation de PiHer</Typography>
      <Typography variant="h2">Code secret</Typography>
      <OTP onComplete={onComplete} length={4} />
      <Stack sx={{ alignItems: "center", paddingX: 10 }}>
        <Typography variant="body1">Bonjour Pieher</Typography>
        <Typography variant="body2">
          Vous avez oublié votre code secret ? pas de soucis, vous pouvez le
          retrouver.
        </Typography>
        <Typography variant="body2">
          Mais pour ne pas qu'il tombe entre les mains de n'importe qui, il va
          falloir prouver que c'est bien vous.
        </Typography>
      </Stack>
      <Stack direction="row" gap={2}>
        <Button
          variant="contained"
          color={!otp[0].length ? "primary" : "secondary"}
          onClick={() => navigate("/enigme1")}
        >
          Epreuve 1
        </Button>
        <Button
          variant="contained"
          color={otp[1].length === 0 ? "primary" : "secondary"}
          disabled={!otp[0].length}
          onClick={() => navigate("/enigme2")}
        >
          Epreuve 2
        </Button>
        <Button
          variant="contained"
          color={otp[2].length === 0 ? "primary" : "secondary"}
          disabled={!otp[1].length}
          onClick={() => navigate("/enigme3")}
        >
          Epreuve 3
        </Button>
        <Button
          variant="contained"
          color={otp[3].length === 0 ? "primary" : "secondary"}
          disabled={!otp[2].length}
          onClick={() => navigate("/enigme4")}
        >
          Epreuve 4
        </Button>
      </Stack>
      <Modal open={otpCompleted}>
        <Stack
          flex={1}
          alignItems={"center"}
          justifyContent={"center"}
          height={"100%"}
        >
          <Stack
            bgcolor={"black"}
            padding={10}
            alignItems={"center"}
            gap={2}
            sx={{
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#ffffff",
              borderStyle: "solid",
            }}
          >
            <Typography variant="h1">Code secret récupéré</Typography>
            <Typography variant="body2">coordonées de PiHer</Typography>
            <Typography>48.901826, 1.941051</Typography>
          </Stack>
        </Stack>
      </Modal>
    </Stack>
  );
}
