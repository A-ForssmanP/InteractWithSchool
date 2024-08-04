import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-material-ui-carousel";

function DashboardClassList({ idArray }) {
  const [classList, setClassList] = useState([]);

  const fetchSchoolListUrl = `${
    import.meta.env.VITE_EXPRESS_SERVER
  }/class_list/all`;

  useEffect(() => {
    if (!classList.length) {
      getClassList();
      console.log("fdfd");
    }
  }, []);

  // get class list data for each student
  const getClassList = async () => {
    const res = await axios(fetchSchoolListUrl, { withCredentials: true });
    console.log(res);
  };
  // get class list data for each student
  // const getClassList = async (idArr) => {
  //   const res = await axios.post(
  //     fetchSchoolListUrl,
  //     { id: idArr },
  //     {
  //       withCredentials: true,
  //     }
  //   );
  // };

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
