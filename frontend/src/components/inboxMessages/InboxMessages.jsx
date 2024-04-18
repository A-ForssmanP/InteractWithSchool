import { List, ListItem, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { useState } from "react";
function InboxMessages({ message }) {
  return (
    <List>
      {message.map((msg, index) => {
        return (
          <ListItem key={index}>
            <Card
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
                  </Box>
                  <Typography
                    // variant="p"
                    // width="1rem"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    // whiteSpace="nowrap"
                    // marginTop="auto"
                  >
                    {msg.message}
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
