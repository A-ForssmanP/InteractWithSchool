import { Card, Button } from "@mui/material";

function DashboardClassListPopup({ closePopup, content }) {
  return (
    <Card
      sx={{
        position: "absolute",
        top: { xs: "-9em", sm: "-.4em" },
        left: { sm: "-20em" },
        width: { xs: "100%", sm: "20rem" },
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
            alignItems: "baseline",
            paddingBottom: 16,
          }}
        >
          <Button>Chatt</Button>
          <p>mail</p>
        </div>
      </div>
    </Card>
  );
}

export default DashboardClassListPopup;
