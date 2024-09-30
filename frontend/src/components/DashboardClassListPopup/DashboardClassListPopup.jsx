import { Card, Button } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import AlertInfo from "../alertInfo/AlertInfo";
import { useState } from "react";
import axios from "axios";

function DashboardClassListPopup({ closePopup, content }) {
  const [showAlertInfo, setShowAlertInfo] = useState(false);
  console.log(content._id);

  const getChatIdUrl = `${import.meta.env.VITE_EXPRESS_SERVER}/chat/contact/${
    content._id
  }`;

  // handle show/hide alert-info
  const handleAlertInfo = () => {
    if (!showAlertInfo) {
      setShowAlertInfo(true);
      setTimeout(() => {
        setShowAlertInfo(false);
      }, 4000);
    }
  };

  // get id of chat between user and parent
  const getChatId = async () => {
    try {
      const res = await axios.get(getChatIdUrl, { withCredentials: true });
      console.log(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  // handle click of chat-icon button
  const handleChatButtonClick = async () => {
    handleAlertInfo();
    const chatId = await getChatId();
  };

  return (
    <Card
      sx={{
        position: "absolute",
        top: { xs: !showAlertInfo ? "-10.4em" : "-13.4em", sm: "-.4em" },
        left: { sm: "-24em" },
        width: { xs: "100%", sm: "24rem" },
        padding: 1,
      }}
    >
      <div>
        <div style={{ position: "relative", paddingTop: 16, marginBottom: 40 }}>
          <h4
            style={{
              textAlign: "center",
              fontSize: 20,
              fontFamily: "helvetica",
            }}
          >
            {content.firstName} {content.lastName && content.lastName}
          </h4>
          <Button
            onClick={closePopup}
            sx={{ position: "absolute", right: 2, top: 0 }}
          >
            Stäng
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "stretch",
            paddingBottom: 16,
          }}
        >
          <div>
            <Button onClick={handleChatButtonClick}>
              <MessageIcon />
            </Button>
            <p style={{ textAlign: "center" }}>Chatta</p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              justifyContent: "flex-end",
              gap: 8,
            }}
          >
            <p>{content.mail ? content.mail : "mail saknas"}</p>
            <p style={{ textAlign: "center" }}>Mail</p>
          </div>
        </div>
        {showAlertInfo && (
          <AlertInfo text={"Chatt-function är under utveckling!"} />
        )}
      </div>
    </Card>
  );
}

export default DashboardClassListPopup;
