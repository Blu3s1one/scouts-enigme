import { createContext, useMemo, useState } from "react";

export const OtpContext = createContext<{
  otp: string[];
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
  otpCompleted: boolean;
}>({
  otp: Array(4).fill(""),
  setOtp: () => {},
  otpCompleted: false,
});

export default function OtpProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  const otpCompleted = useMemo(() => {
    return otp.join("") === "9563";
  }, [otp]);
  return (
    <OtpContext.Provider
      value={{
        otp,
        setOtp,
        otpCompleted,
      }}
    >
      {children}
    </OtpContext.Provider>
  );
}
