import { ListItem, Paper, useTheme, Typography } from "@mui/material";

function ChatWindowMessage({ message }) {
  const theme = useTheme();
  return (
    <ListItem>
      <Paper
        sx={{
          width: "fit-content",
          maxWidth: "70%",
          padding: 1.2,
          marginBottom: 1,
          bgcolor:
            message.author === "user"
              ? theme.palette.primary.main
              : theme.palette.grey[100],
          color: message.author === "user" && theme.palette.common.white,
          marginLeft: message.author !== "user" && "auto",
        }}
      >
        <Typography display="flex" flexWrap="wrap">
          {message.text}
        </Typography>
      </Paper>
    </ListItem>
  );
}

export default ChatWindowMessage;
