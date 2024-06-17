import PopupListItem from "../popupListItem/PopupListItem";
import { Box, Card, List, Button, Typography } from "@mui/material";

function PopupList({ items, closePopup }) {
  const styles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-38%)",
  };
  return (
    <Box style={styles} width={580} maxWidth={"100%"} zIndex={100}>
      <Card>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          margin={"20px 34px 0 34px"}
        >
          <Typography>Granska valda datum:</Typography>
          <Button onClick={closePopup}>Stäng</Button>
        </Box>
        <List sx={{ padding: { sm: 3 }, maxHeight: 450, overflow: "scroll" }}>
          {items.map((item) => {
            return <PopupListItem key={item.id} item={item} />;
          })}
        </List>
        //FORM????
        <Button variant="contained" sx={{ width: "100%" }}>
          Skicka in
        </Button>
      </Card>
    </Box>
  );
}

export default PopupList;
