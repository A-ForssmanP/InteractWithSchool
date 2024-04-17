import { List, ListItem, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
function InboxMessages({ message }) {
  return (
    <List>
      {message.map((msg, index) => {
        return (
          <ListItem key={index}>
            <Card sx={{ width: "100%", cursor: "pointer" }}>
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
                <CheckCircleOutlineOutlinedIcon sx={{ color: "green" }} />
                <Typography
                  variant="p"
                  maxWidth="30rem"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  paddingLeft={2}
                  marginTop="auto"
                >
                  {msg.message}
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
        );
      })}{" "}
      har läst
    </List>
  );
}

export default InboxMessages;
