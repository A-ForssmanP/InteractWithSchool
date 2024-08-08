import { List, ListItem, Box, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";

function InboxMessages({
  selectedInbox,
  deleteMessage,
  studentIndx,
  messageOpened,
}) {
  const navigate = useNavigate();
  const theme = useTheme();

  // navigate to see full message
  const handleClick = (msg) => {
    messageOpened(msg.opened, msg._id);
    navigate(msg._id, {
      state: {
        message: msg,
      },
    });
  };

  return (
    <List
      sx={{
        maxWidth: "100%",
        height: "80dvh",
        marginTop: 1,
        overflowY: "auto",
      }}
    >
      {selectedInbox &&
        selectedInbox.messages.map((msg) => {
          return (
            <ListItem key={crypto.randomUUID()}>
              <Card
                onClick={() => handleClick(msg)}
                sx={{
                  cursor: "pointer",
                  "&:hover": { background: "rgba(0, 0, 0, 0.04)" },
                }}
              >
                <CardContent
                  sx={
                    {
                      // display: "flex"
                    }
                  }
                >
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Box
                      // width="11rem"
                      overflow="hidden"
                      textOverflow="ellipsis"
                      whiteSpace="nowrap"
                    >
                      <Typography sx={{ fontSize: 18 }} color="text.secondary">
                        {msg.from}
                      </Typography>
                      <Typography
                        variant="h3"
                        // maxWidth="16ch"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                        sx={{ fontSize: 27 }}
                      >
                        {msg.title}
                      </Typography>
                    </Box>
                    <Box display={"flex"} justifyContent={"right"}>
                      {!msg.opened ? (
                        <Typography color="green">Nytt</Typography>
                      ) : (
                        <CheckCircleOutlineOutlinedIcon
                          sx={{
                            color: "green",
                          }}
                        />
                      )}

                      <DeleteOutlineIcon
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteMessage(msg._id, studentIndx);
                        }}
                        sx={{
                          marginLeft: "5px",
                          backgroundColor: theme.palette.secondary.main,
                          color: theme.palette.grey[200],
                          borderRadius: "50%",
                          "&:hover": {
                            color: "red",
                            bgcolor: "lightGrey",
                            borderRadius: "50%",
                          },
                        }}
                      />
                    </Box>
                  </Box>

                  <Box maxWidth="50em" whiteSpace={"nowrap"}>
                    <Typography
                      fontSize={{ xs: 16, sm: 20 }}
                      overflow="hidden"
                      textOverflow="ellipsis"
                    >
                      {msg.text}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </ListItem>
          );
        })}
    </List>
  );
}

export default InboxMessages;
