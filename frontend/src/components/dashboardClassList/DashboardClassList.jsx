import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-material-ui-carousel";
import DashboardClassListItem from "../dashboardClassListItem/DashboardClassListItem";
import DashboardClassListPopup from "../DashboardClassListPopup/DashboardClassListPopup";
import { useTheme } from "@emotion/react";

function DashboardClassList() {
  const [classList, setClassList] = useState([]);
  const [popup, setPopup] = useState({ isVisible: false, content: {} });
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

  //show popup
  const showPopup = (person) => {
    setPopup((curr) => {
      if (!curr.isVisible) {
        return {
          isVisible: true,
          content: person,
        };
      } else {
        return {
          ...curr,
          content: person,
        };
      }
    });
  };

  //close popup
  const closePopup = () => {
    setPopup((curr) => {
      return {
        isVisible: false,
        content: null,
      };
    });
  };

  return (
    <div
      style={{
        height: "100%",
        position: "relative",
      }}
    >
      {popup.isVisible && (
        <DashboardClassListPopup
          closePopup={closePopup}
          content={popup.content}
        />
      )}
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
          return (
            <DashboardClassListItem
              key={list.class._id}
              list={list}
              showPopup={showPopup}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default DashboardClassList;
