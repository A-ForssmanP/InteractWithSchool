import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-material-ui-carousel";
import DashboardClassListItem from "../dashboardClassListItem/DashboardClassListItem";
import { useTheme } from "@emotion/react";

function DashboardClassList({ idArray }) {
  //REMOVE IDARRAY????
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
        // borderLeft: "1px solid lightgrey",
      }}
    >
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
