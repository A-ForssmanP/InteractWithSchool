import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-material-ui-carousel";
import DashboardClassListItem from "../dashboardClassListItem/DashboardClassListItem";
import { useTheme } from "@emotion/react";
import { Card, Button } from "@mui/material";

function DashboardClassList() {
  const [classList, setClassList] = useState([]);
  const theme = useTheme();

  const fetchSchoolListUrl = `${
    import.meta.env.VITE_EXPRESS_SERVER
  }/class_list/all`;

  useEffect(() => {
    if (!classList.length) {
      getClassList();
    }
  }, []);

  // get class list data for each student
  const getClassList = async () => {
    try {
      const res = await axios(fetchSchoolListUrl, { withCredentials: true });
      const { data } = res;
      setClassList(data);
    } catch (err) {}
  };

  return (
    <div
      style={{
        height: "100%",
        position: "relative",
      }}
    >
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
          <div
            style={{ position: "relative", paddingTop: 16, marginBottom: 40 }}
          >
            <p style={{ textAlign: "center" }}>namn</p>
            <Button sx={{ position: "absolute", right: 2, top: 0 }}>X</Button>
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
      <Carousel
        navButtonsAlwaysVisible={true}
        autoPlay={false}
        swipe={false}
        indicators={false}
        navButtonsWrapperProps={{
          style: {
            height: "fit-content",
          },
        }}
        navButtonsProps={{
          style: {
            background: "none",
            color: theme.palette.secondary.main,
          },
        }}
        sx={{ height: "100%" }}
      >
        {classList.map((list) => {
          return <DashboardClassListItem key={list.class._id} list={list} />;
        })}
      </Carousel>
    </div>
  );
}

export default DashboardClassList;
