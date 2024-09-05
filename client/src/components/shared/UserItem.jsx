import { Remove as RemoveIcon } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { Avatar, IconButton, List, Stack, Typography } from "@mui/material";
import React, { memo } from "react";

const UserItem = ({
  user,
  handler,
  hanlderIsLoading,
  isAdded = false,
  styling = {},
}) => {
  const { name, _id, avatar } = user;

  return (
    <List>
      <Stack
        direction={"row"}
        spacing={"2rem"}
        width={"100%"}
        alignItems={"center"}
        {...styling}
      >
        <Avatar />
        <Typography
          variant="body1"
          sx={{
            width: "100%",
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </Typography>
        <IconButton onClick={() => handler(_id)} disabled={hanlderIsLoading}>
          {isAdded ? <RemoveIcon color="error" /> : <AddIcon color="green" />}
        </IconButton>
      </Stack>
    </List>
  );
};

export default memo(UserItem);
