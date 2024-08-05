import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-material-ui-carousel";
import DashboardClassListItem from "../dashboardClassListItem/DashboardClassListItem";

function DashboardClassList({ idArray }) {
  //REMOVE IDARRAY????
  const [classList, setClassList] = useState([]);

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
        border: "5px solid blue",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Carousel
        navButtonsAlwaysVisible="true"
        autoPlay={false}
        sx={{ flex: 1 }}
        // animation={"slide"}
      >
        {classList.map((list) => {
          return <DashboardClassListItem key={list.class._id} list={list} />;
        })}
      </Carousel>
    </div>
  );
}

export default DashboardClassList;
