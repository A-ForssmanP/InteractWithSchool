import { ListItem, Paper, useTheme, Typography, Box } from "@mui/material";

function ChatWindowMessage({ message }) {
  const theme = useTheme();
  return (
    <ListItem sx={{ display: "flex", alignItems: "end" }}>
      <Paper
        sx={{
          width: "fit-content",
          maxWidth: "70%",
          padding: 1.2,
          // marginBottom: 1,
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
      <Box>
        <Typography pl={1} fontSize={13}>
          {message.sendTime}
        </Typography>
      </Box>
    </ListItem>
  );
}

export default ChatWindowMessage;
