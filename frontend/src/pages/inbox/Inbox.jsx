import { Box } from "@mui/material";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import InboxMessages from "./inboxMessages/InboxMessages";
import InboxName from "./inboxName/InboxName";
import { NewInboxCount } from "../../context";

function Inbox() {
  const [inbox, setInbox] = useState([]);
  const studentIndx = useParams().student;
  const newMessage = useContext(NewInboxCount);

  // get data and set it to the inbox
  const getData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_EXPRESS_SERVER}/inbox`,
        {
          withCredentials: true,
        }
      );
      setInbox(res.data);
      return res.data;
    } catch (err) {
      throw new Error(err);
    }
  };

  //count new messages and update newMessage-context value
  const countNewMessages = (inboxArray) => {
    let newCount = 0;
    inboxArray.forEach((inbox) => {
      // for every unopened message,increment newCount
      inbox.messages.forEach((message) => {
        if (!message.opened) {
          newCount++;
        }
      });
    });
    newMessage.setNewInboxMessage(newCount);
  };

  useState(() => {
    const handleInboxData = async () => {
      const data = await getData();
      countNewMessages(data);
    };
    handleInboxData();
  }, []);

  //set the message status to be opened
  const messageOpened = async (isOpened, id) => {
    if (!isOpened) {
      try {
        await axios.put(
          `${import.meta.env.VITE_EXPRESS_SERVER}/inbox/${id}/update`,
          {},
          { withCredentials: true }
        );
      } catch (err) {
        throw new Error(err);
      }
    }
  };

  //Delete a message
  const deleteMessage = async (id, index) => {
    const res = await axios.delete(
      `${import.meta.env.VITE_EXPRESS_SERVER}/inbox/${id}/delete`,
      { withCredentials: true }
    );
    setInbox((currInbox) => {
      return currInbox.map((msg, indx) => {
        if (indx === Number(index)) {
          return {
            ...msg,
            messages: res.data,
          };
        } else {
          return msg;
        }
      });
    });
  };

  return (
    <Box pl={{ sm: 1 }}>
      <InboxName inbox={inbox} studentIndx={studentIndx} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <InboxMessages
          selectedInbox={inbox[studentIndx]}
          deleteMessage={deleteMessage}
          studentIndx={studentIndx}
          messageOpened={messageOpened}
        />
      </div>
    </Box>
  );
}

export default Inbox;
