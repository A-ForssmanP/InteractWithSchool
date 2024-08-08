import { Box } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import InboxMessages from "./inboxMessages/InboxMessages";
import InboxName from "./inboxName/InboxName";

function Inbox() {
  const [inbox, setInbox] = useState([]);
  const studentIndx = useParams().student;

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
    } catch (err) {
      throw new Error(err);
    }
  };
  console.log(inbox);
  useState(() => {
    getData();
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
