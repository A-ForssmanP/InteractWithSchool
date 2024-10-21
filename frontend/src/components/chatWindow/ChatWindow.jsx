import {
  Box,
  Avatar,
  useTheme,
  Typography,
  Button,
  TextField,
  List,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState, useRef, useEffect, useContext } from "react";
import {
  useNavigate,
  useLocation,
  useOutletContext,
  useParams,
} from "react-router-dom";
import axios from "axios";
import ButtonBack from "../buttonBack/ButtonBack";
import ChatWindowMessage from "../chatWindowMessage/ChatWindowMessage";
import { ChatContext } from "../../context";

function ChatWindow() {
  const data = useOutletContext()[0];
  const selectChatById = useOutletContext()[3];
  const contact = useOutletContext()[4];
  const theme = useTheme();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const lastMessageRef = useRef(null);
  const [newText, setNewText] = useState("");
  const [messages, setMessages] = useState(data?.messages || []);
  const chatContext = useContext(ChatContext);
  const { chatData, updateChatData, sendSocketMessage } = chatContext;
  const putUrl = `${import.meta.env.VITE_EXPRESS_SERVER}/chat/${
    data?._id
  }/userShownNewEvent`;

  //check if user is shown new-events
  const checkNewEvents = async () => {
    const userIsUpdated = data?.userShownNewEvent.some(
      (id) => id.toString() === contact.userData._id
    );
    if (!userIsUpdated) {
      try {
        //update chat in db that user has seen new events
        const res = await axios.put(putUrl, {}, { withCredentials: true });
        const { chatList } = res.data;
        updateChatData(chatList);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    if (!data) {
      selectChatById(id);
      navigate("../", { state: { id } });
    }
  }, [data]);

  // console.log(contact);

  // useState(() => {
  //   data?.messages && checkNewEvents();
  //   setMessages([...data.messages]);
  //   console.log("ADSADS");
  // }, [useOutletContext()[0]]);

  useEffect(() => {
    data && checkNewEvents();
    data && setMessages(data.messages);
  }, [useOutletContext()[0]]);

  // useEffect(() => {
  //   !data && selectChatById(id);
  //   console.log(data.messages);
  //   setMessages(data.messages);
  //   console.log("!!!!!!!!!!!!!!!!!");
  // }, [contact]);
  // !data && selectChatById(id);

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  useEffect(() => {
    //scroll down to last message
    lastMessageRef.current && lastMessageRef.current.scrollIntoView();
  }, [messages]);

  //handle send message
  const handleSend = async (msg) => {
    const date = new Date();
    //check if minutes is a one digit number,if so add a 0 to the start of currentTime-variable for minutes
    const minutesIstwoDigit = date.getMinutes().toString().length > 1;
    //check if hours is a one digit number,if so add a 0 to the start of currentTime-variable for hours
    const hoursIstwoDigit = date.getHours().toString().length > 1;
    const currentTime = `${!hoursIstwoDigit ? 0 : ""}${date.getHours()}.${
      !minutesIstwoDigit ? 0 : ""
    }${date.getMinutes()}`;
    const newMessage = {
      id: crypto.randomUUID(),
      author: contact.userData,
      text: msg,
      sendTime: currentTime,
      chatListId: contact.chatListId,
    };
    setMessages((curr) => {
      return [...curr, newMessage];
    });
    setNewText("");
    //save message to db and update chatData state
    const putUrl = `${import.meta.env.VITE_EXPRESS_SERVER}/chat/${data._id}`;
    try {
      const res = await axios.put(putUrl, newMessage, {
        withCredentials: true,
      });
      const { chatList } = res.data;
      updateChatData(chatList);
      // send msg through socket
      sendSocketMessage();
    } catch (err) {
      console.log(err.message);
    }
  };

  //handle submiting a message
  const handleSubmit = (e) => {
    e.preventDefault();
    newText.length && handleSend(newText);
  };

  return (
    data && (
      <Box
        height={{ xs: "calc(100dvh - 36px)", md: "100dvh" }}
        display="flex"
        flexDirection="column"
        sx={{ maxWidth: { md: 900 }, maxHeight: 900, margin: "0 auto" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
            justifyContent: { sm: "space-between" },
            borderBottom: "1px solid lightgrey",
            p: 1,
            gap: { xs: 1, sm: 0 },
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 6,
            }}
          >
            <Avatar sx={{ bgcolor: theme.palette.secondary.light }} />
            <Typography>
              {data.contact.firstName + " " + data.contact.lastName}
            </Typography>
          </div>
          <ButtonBack handleClick={() => navigate("..")} />
        </Box>
        <Box
          sx={{
            flex: 1,
            maxHeight: {
              xs: "calc(100% - 95.33px)",
              sm: "calc(100% - 58.33px)",
            },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "calc(100% - 56px)",
            }}
          >
            <List
              sx={{
                height: "100%",
                flexShrink: 1,
                maxHeight: "100%",
                overflow: "auto",
                scrollbarColor: "lightgrey white",
              }}
            >
              {messages?.map((msg) => {
                return (
                  <ChatWindowMessage
                    key={msg.id}
                    message={msg}
                    userData={contact.userData}
                  />
                );
              })}
              <div ref={lastMessageRef}></div>
            </List>
          </div>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <TextField
              id="outlined-textarea"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              placeholder="Skriv ett meddelande"
              multiline
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                marginTop: "auto",
                height: 56,
              }}
            >
              <SendIcon />
            </Button>
          </form>
        </Box>
      </Box>
    )
  );
}

export default ChatWindow;
