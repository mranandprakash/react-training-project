// import React from "react";
// import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleLogin } from "../Store/ApplicationSlice";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const { isLogin, isLogged } = useSelector((state) => state.application);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const handleClick = (e) => {
//     e.preventDefault();
//     dispatch(toggleLogin(!isLogin));
//   };
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" component="div">
//           RentWheelz
//         </Typography>
//         {isLogged ? (
//           <Button
//             onClick={(e) => navigate("/mybooking")}
//             color="inherit"
//             sx={{ marginLeft: "auto" }}
//           >
//             My Bookings
//           </Button>
//         ) : (
//           <Button
//             onClick={(e) => handleClick(e)}
//             color="inherit"
//             sx={{ marginLeft: "auto" }}
//           >
//             {isLogin ? "Register" : "Login"}
//           </Button>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setLogged, toggleLogin } from "../Store/ApplicationSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { isLogged, isLogin } = useSelector((state) => state.application);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLogged(false));
  };
  <Typography variant="h6" color="#00ff00"></Typography>

  return (
    <AppBar position="static" sx={{ bgcolor: "#7b1fa2" }}>
      <Toolbar>
        <Typography variant="h6" component="div">
          RentWheelz
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        {isLogged ? (
          <>
            <Button color="inherit" onClick={() => navigate("/home")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/mybooking")}>
              My Bookings
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <Button color="inherit" onClick={() => dispatch(toggleLogin(!isLogin))}>
            {isLogin ? "Register" : "Login"}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
