import PopupListItem from "../popupListItem/PopupListItem";
import { Box, Card, List, Button } from "@mui/material";

function PopupList({ items }) {
  const styles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-38%)",
  };
  return (
    <Box style={styles} width={580} maxWidth={"100%"} zIndex={100}>
      <Card>
        <Box display={"flex"} justifyContent={"end"} marginRight={"34px"}>
          <Button>Stäng</Button>
        </Box>

        <List sx={{ padding: { sm: 3 }, maxHeight: 450, overflow: "scroll" }}>
          {items.map((item) => {
            return <PopupListItem item={item} />;
          })}
        </List>
        <Button variant="contained" sx={{ width: "100%" }}>
          Skicka in
        </Button>
      </Card>
    </Box>
  );
}

export default PopupList;
