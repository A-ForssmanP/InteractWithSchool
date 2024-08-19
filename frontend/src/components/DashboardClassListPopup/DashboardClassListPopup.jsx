import { Card, Button } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function DashboardClassListPopup({ closePopup, content }) {
  return (
    <Card
      sx={{
        position: "absolute",
        top: { xs: "-10.1em", sm: "-.4em" },
        left: { sm: "-24em" },
        width: { xs: "100%", sm: "24rem" },
        padding: 1,
      }}
    >
      <div style={{ border: "1px solid red" }}>
        <div style={{ position: "relative", paddingTop: 16, marginBottom: 40 }}>
          <p style={{ textAlign: "center" }}>
            {content.firstName} {content.lastName && content.lastName}
          </p>
          <Button
            onClick={closePopup}
            sx={{ position: "absolute", right: 2, top: 0 }}
          >
            X
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
            <Button>
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
            <p>mockmail@mail.com</p>
            <p style={{ textAlign: "center" }}>Mail</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default DashboardClassListPopup;
