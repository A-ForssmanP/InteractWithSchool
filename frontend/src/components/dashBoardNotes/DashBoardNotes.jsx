import { Box } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

function DashBoardNotes() {
  const paperData = [
    {
      rotate: "0deg",
      bgColor: "lightblue",
      rows: 5,
      zIndex: 100,
      rowStyle: { height: "3px", backgroundColor: "blue" },
      paperStyles: {},
    },
    {
      rotate: "10deg",
      bgColor: "red",
      rows: 5,
      zIndex: 10,
      paperStyles: {},
    },
    {
      rotate: "-10deg",
      bgColor: "yellow",
      rows: 5,
      zIndex: 1,
      paperStyles: {},
    },
  ];

  const createNotePaper = (
    indx,
    rotate,
    bgColor,
    rows = 0,
    rowStyle,
    paperStyles
  ) => {
    const innerRows = Array(rows).fill(null);
    return (
      <Box
        key={indx}
        bgcolor={bgColor}
        display={"flex"}
        flexDirection={"column"}
        gap={4}
        // maxWidth={"60%"}
        sx={{ transform: `rotate(${rotate})`, padding: "2rem 1.2rem" }}
      >
        {innerRows.map((row, indx) => (
          <Box key={indx} sx={rowStyle}></Box>
        ))}
      </Box>
    );
  };

  return (
    <Box border={"3px solid black"} flex={1}>
      <Box position={"relative"}>
        {paperData.map((item, index) =>
          createNotePaper(
            index,
            item.rotate,
            item.bgColor,
            item.rows,
            item.rowStyle,
            item.paperStyles
          )
        )}
      </Box>
    </Box>
  );
}

export default DashBoardNotes;
