import React from "react";
import { useInputValidation } from "6pp";
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
import { Navigate } from "react-router-dom";

const isAdmin = true;

const AdminLogIn = () => {
  const secretKey = useInputValidation("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  if (isAdmin) {
    return <Navigate to="/admin/dashboard" />;
  }
  return (
    <div>
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
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <>
            <Typography variant="h6">Admin Login</Typography>
            <form
              style={{
                width: "100%",
                margin: "7rem",
              }}
              onSubmit={submitHandler}
            >
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={secretKey.value}
                onChange={secretKey.changeHandler}
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
            </form>
          </>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogIn;
