import { Card, Button } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import AlertInfo from "../alertInfo/AlertInfo";
import { useState } from "react";

function DashboardClassListPopup({ closePopup, content }) {
  const [showAlertInfo, setShowAlertInfo] = useState(false);

  // handle show/hide alert-info
  const handleAlertInfo = () => {
    if (!showAlertInfo) {
      setShowAlertInfo(true);
      setTimeout(() => {
        setShowAlertInfo(false);
      }, 4000);
    }
  };

  return (
    <Card
      sx={{
        position: "absolute",
        top: { xs: !showAlertInfo ? "-10.1em" : "-13.1em", sm: "-.4em" },
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
            <Button onClick={handleAlertInfo}>
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
