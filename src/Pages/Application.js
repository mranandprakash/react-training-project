import React from "react";
import LoginForm from "../Components/LoginForm";
import RegisterForm from "../Components/RegisterForm";
import { Box } from "@mui/material";
import carImage from "../Assets/BG_Image.jpg"; // import the image
import { useSelector } from "react-redux";
import Toast from "../Components/Toast";

const Application = () => {
  const { isLogin, showToast } = useSelector((state) => state.application);
  return (
    <div>
      {showToast && (
        <Toast message="You must accept the terms and conditions to continue" />
      )}
      <Box
        style={{
          backgroundImage: `url(${carImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          overflowX: "hidden",
        }}
      >
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </Box>
    </div>
  );
};

export default Application;
