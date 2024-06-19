import { useEffect, useState } from "react";
import PopupListItem from "../popupListItem/PopupListItem";
import { Box, Card, List, Button, Typography } from "@mui/material";
import axios from "axios";

function PopupList({ items, closePopup, handleTimeUpdate, handleDelete }) {
  const [dataToSubmit, setDataToSubmit] = useState(items);

  useEffect(() => {
    setDataToSubmit(items);
  }, [items]);

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    sendToServer(dataToSubmit);
  };

  // send data to server
  async function sendToServer(data) {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_EXPRESS_SERVER}/timeSchedule`,
        {
          data: data,
        }
      );
      if (res.status !== 200) {
        throw new Error(`HTTP Error! Status: ${res.statusText}`);
      }
    } catch (err) {
      console.log(err);
    }
  }

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
            return (
              <PopupListItem
                key={item.id}
                item={item}
                handleTimeUpdate={handleTimeUpdate}
                handleDelete={() => handleDelete(item.id)}
              />
            );
          })}
        </List>
        <Box component="form" onSubmit={handleSubmit}>
          <Button variant="contained" type="submit" sx={{ width: "100%" }}>
            Skicka in
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

export default PopupList;
