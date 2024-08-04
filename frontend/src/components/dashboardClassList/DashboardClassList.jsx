import Carousel from "react-material-ui-carousel";

function DashboardClassList({ classes }) {
  // console.log(classes);
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
