import { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { VisuallyHiddenInput } from "../components/styles/StyledComponent";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { userNameValidator } from "../utils/validators";
import { useDispatch } from "react-redux";
import axios from "axios";
import { server } from "../constants/config";
import { userExits } from "../redux/reducers/auth";
import toast from "react-hot-toast";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", userNameValidator);
  const password = useStrongPassword();

  const dispatch = useDispatch();

  const hanldleLogin = async (e) => {
    e.preventDefault();

    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        `${server}/api/v1/user/login`,
        {
          username: username.value,
          password: password.value,
        },
        config
      );
      dispatch(userExits(true));
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something Went Wrong");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("avatar", avatar.file);
    formData.append("name", name.value);
    formData.append("bio", bio.value);
    formData.append("username", username.value);
    formData.append("password", password.value);

    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const { data } = await axios.post(
        `${server}/api/v1/user/new`,
        formData,
        config
      );

      dispatch(userExits(true));
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Someting Went Wrong");
    }
  };

  const avatar = useFileHandler("single");
  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          height: "95vh",
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography
              sx={{ marginTop: "2rem", paddingTop: "2rem" }}
              variant="h6"
            >
              Login
            </Typography>
            <form
              style={{
                width: "100%",
                margin: "7rem",
              }}
              onSubmit={hanldleLogin}
            >
              <TextField
                required
                fullWidth
                margin="normal"
                label="Username"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button
                variant="contained"
                fullWidth
                color="primary"
                type="submit"
                sx={{
                  marginTop: "1rem",
                  backgroundColor: "#987070",
                  "&:hover": {
                    backgroundColor: "#DBB5B5",
                  },
                }}
              >
                Login
              </Button>

              <Typography textAlign={"center"} margin={"1rem"}>
                Or
              </Typography>

              <Button
                variant="text"
                fullWidth
                type="submit"
                onClick={toggleLogin}
              >
                Sign Up Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h6">Sign Up</Typography>
            <form
              style={{
                width: "100%",
                margin: "1rem",
              }}
              onSubmit={handleSignup}
            >
              <Stack position={"relative"} width={"10rem"} marginLeft={"8rem"}>
                <Avatar
                  sx={{
                    width: "5rem",
                    height: "5rem",
                    objectFit: "contain",
                  }}
                  src={avatar.preview}
                />

                <IconButton
                  sx={{
                    width: "2rem",
                    height: "2rem",
                    position: "absolute",
                    bottom: "0.1rem",
                    right: "5rem",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      bgcolor: "rgba(0,0,0,0.7)",
                    },
                  }}
                  component="label"
                >
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput
                      type="file"
                      onChange={avatar.changeHandler}
                    />
                  </>
                </IconButton>
              </Stack>

              {avatar.error && (
                <Typography
                  m={"1rem auto"}
                  width={"fit-content"}
                  color="error"
                  variant="body2"
                >
                  {avatar.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                margin="normal"
                label="Name"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                margin="normal"
                label="Bio"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                margin="normal"
                label="Username"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />

              {username.error && (
                <Typography color="error" variant="body2">
                  {username.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={password.value}
                onChange={password.changeHandler}
              />
              {password.error && (
                <Typography color="error" variant="body2">
                  {password.error}
                </Typography>
              )}
              <Button
                variant="contained"
                fullWidth
                color="primary"
                type="submit"
                sx={{
                  marginTop: "2rem",
                  backgroundColor: "#987070",
                  "&:hover": {
                    backgroundColor: "#DBB5B5",
                  },
                }}
              >
                Sign Up
              </Button>

              <Typography textAlign={"center"} margin={"1rem"}>
                Or
              </Typography>

              <Button
                variant="text"
                fullWidth
                type="submit"
                onClick={toggleLogin}
              >
                Login Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
