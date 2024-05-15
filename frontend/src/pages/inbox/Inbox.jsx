import InboxName from "./inboxName/InboxName";
import InboxMessages from "./inboxMessages/InboxMessages";
import { Box } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Inbox() {
  const [inbox, setInbox] = useState([]);
  const studentIndx = useParams().student;

  // get data and set it to the inbox
  const getData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_EXPRESS_SERVER}/inbox`
      );

      setInbox(res.data);
    } catch (err) {
      throw new Error(err);
    }
  };

  useState(() => {
    getData();
  }, []);

  //set the message status to be opened
  const messageOpened = async (isOpened, id) => {
    if (!isOpened) {
      try {
        await axios.put(
          `${import.meta.env.VITE_EXPRESS_SERVER}/inbox/${id}/update`
        );
      } catch (err) {
        throw new Error(err);
      }
    }
  };

  //Delete a message
  const deleteMessage = async (id, index) => {
    const res = await axios.delete(
      `${import.meta.env.VITE_EXPRESS_SERVER}/inbox/${id}/delete`
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
    <Box>
      <InboxName inbox={inbox} studentIndx={studentIndx} />
      <InboxMessages
        selectedInbox={inbox[studentIndx]}
        deleteMessage={deleteMessage}
        studentIndx={studentIndx}
        messageOpened={messageOpened}
      />
    </Box>
  );
}

export default Inbox;
