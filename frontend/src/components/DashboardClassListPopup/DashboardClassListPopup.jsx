import { Card, Button } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import AlertInfo from "../alertInfo/AlertInfo";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../../context";

function DashboardClassListPopup({ closePopup, content }) {
  const [showAlertInfo, setShowAlertInfo] = useState(false);
  const navigate = useNavigate();
  const { findChatId, chatData } = useContext(ChatContext);
  console.log(content);
  // handle show/hide alert-info
  const handleAlertInfo = () => {
    if (!showAlertInfo) {
      setShowAlertInfo(true);
      setTimeout(() => {
        setShowAlertInfo(false);
      }, 4000);
    }
  };

  // find chat from users chat-list
  const findChatById = (id) => {
    const foundChat = chatData.chats.filter((chat) => chat._id === id);
    return foundChat[0];
  };

  // handle click of chat-icon button
  const handleChatButtonClick = () => {
    handleAlertInfo();
    const chatId = findChatId(content._id);
    const chat = findChatById(chatId);
    navigate(`/chatt/${chatId}`, {
      state: {
        ...chat,
        contact: content,
        userData: chatData.userData,
        chatListId: chatData.chatListId,
      },
    });
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
