import React, { useContext, useRef } from "react";
import { TextField, Box, styled, Stack } from "@mui/material";
import { OtpContext } from "../providers/OtpProvider";

interface OtpInputProps {
  length?: number;
  onComplete: (otp: string) => void;
}

// Custom styled TextField with white text and background
const WhiteTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    color: "white !important", // Add !important to override global CSS
    backgroundColor: "black",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "black",
    "& fieldset": {
      borderColor: "gray",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "blue",
    },
  },
});

const OtpInput: React.FC<OtpInputProps> = ({ length = 4, onComplete }) => {
  const { otp, setOtp } = useContext(OtpContext);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <Stack style={{ height: "fit-content" }}>
      <Box display="flex" gap={2}>
        {otp.map((digit, index) => (
          <WhiteTextField
            key={index}
            type="text"
            inputProps={{
              maxLength: 1,
              style: { textAlign: "center" },
            }}
            value={digit}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(index, e.target.value)
            }
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              handleKeyDown(index, e)
            }
            inputRef={(el) => (inputs.current[index] = el)}
            sx={{ width: "56px" }}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default OtpInput;
