import { ListItem, Paper, useTheme, Typography, Box } from "@mui/material";

function ChatWindowMessage({ message, userData }) {
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
            message.author._id === userData._id
              ? theme.palette.primary.main
              : theme.palette.grey[100],
          color:
            message.author._id === userData._id && theme.palette.common.white,
          marginLeft: message.author._id !== userData._id && "auto",
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
