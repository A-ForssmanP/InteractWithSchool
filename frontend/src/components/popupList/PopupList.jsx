import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PopupListItem from "../popupListItem/PopupListItem";
import SendButton from "../sendButton/SendButton";
import ProgressCircular from "../progressCircular/ProgressCircular";
import { Box, Card, List, Button, Typography } from "@mui/material";
import axios from "axios";

function PopupList({ items, closePopup, handleTimeUpdate, handleDelete }) {
  const [dataToSubmit, setDataToSubmit] = useState(items);
  const [postStatus, setPostStatus] = useState({
    isPending: true,
    success: false,
  });
  const [showProgress, setShowProgress] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  const studentId = params.id;

  useEffect(() => {
    setDataToSubmit(items);
  }, [items]);

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataToSubmit.length < 1) {
      return;
    }
    setShowProgress(true);
    sendToServer(dataToSubmit);
  };

  // close progress
  const closeProgress = () => {
    setPostStatus({ isPending: true, success: false });
    setShowProgress(false);
    navigate("../");
  };

  // send data to server
  async function sendToServer(data) {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_EXPRESS_SERVER}/timeSchedule/${studentId}`,
        {
          data: data,
        }
      );
      if (res.status !== 200) {
        throw new Error(`HTTP Error! Status: ${res.statusText}`);
      }
      console.log(res);
      setTimeout(() => {
        setPostStatus({ isPending: false, success: true });
      }, 2000);
    } catch (err) {
      setTimeout(() => {
        setPostStatus((currStatus) => {
          return {
            ...currStatus,
            isPending: false,
          };
        });
      }, 2000);
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
        {showProgress ? (
          <Box
            sx={{ height: 300 }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={3}
          >
            <ProgressCircular status={postStatus} />
            {!postStatus.isPending && (
              <Button onClick={closeProgress}>Stäng</Button>
            )}
          </Box>
        ) : (
          <Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              margin={"20px 34px 0 34px"}
            >
              <Typography>Granska valda datum:</Typography>
              <Button onClick={closePopup}>Stäng</Button>
            </Box>
            <List
              sx={{
                padding: { sm: 3 },
                minHeight: 255,
                maxHeight: 450,
                overflow: "scroll",
              }}
            >
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
          </Box>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          mt={1.4}
          sx={{ opacity: showProgress && 0 }}
        >
          <SendButton
            text="Skicka in"
            disabled={dataToSubmit.length < 1 || showProgress}
          />
        </Box>
      </Card>
    </Box>
  );
}

export default PopupList;
