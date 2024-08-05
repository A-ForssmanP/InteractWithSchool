import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-material-ui-carousel";

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
    <div>
      <Carousel
        navButtonsAlwaysVisible="true"
        autoPlay={false}
        // animation={"slide"}
      ></Carousel>
    </div>
  );
}

export default DashboardClassList;
