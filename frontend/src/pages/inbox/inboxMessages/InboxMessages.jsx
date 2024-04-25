import { List, ListItem, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";

function InboxMessages({ selectedInbox, deleteMessage, setInbox }) {
  const navigate = useNavigate();
  // navigate to see full message
  const handleClick = (msg) => {
    navigate(msg.id, {
      state: {
        message: msg,
      },
    });
  };

  return (
    <List>
      {selectedInbox.messages.map((msg) => {
        return (
          <ListItem key={crypto.randomUUID()}>
            <Card
              onClick={() => handleClick(msg)}
              sx={{
                cursor: "pointer",
                "&:hover": { background: "rgba(0, 0, 0, 0.04)" },
              }}
            >
              <CardContent sx={{ display: "flex" }}>
                <Box
                  width="11rem"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                >
                  <Typography sx={{ fontSize: 15 }} color="text.secondary">
                    {msg.from}
                  </Typography>
                  <Typography
                    variant="h3"
                    maxWidth="16ch"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    sx={{ fontSize: 22 }}
                  >
                    {msg.title}
                  </Typography>
                </Box>
                <Box maxWidth="28rem" whiteSpace={"nowrap"}>
                  <Box display={"flex"} justifyContent={"right"}>
                    {!msg.opened ? (
                      <Typography>Nytt</Typography>
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
                        deleteMessage(msg.id);
                      }}
                      sx={{
                        marginLeft: "5px",

                        "&:hover": {
                          color: "red",
                          bgcolor: "lightGrey",
                          borderRadius: "50%",
                        },
                      }}
                    />
                  </Box>
                  <Typography
                    // variant="p"
                    // width="1rem"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    // whiteSpace="nowrap"
                    // marginTop="auto"
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
