import { Box } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

function DashBoardNotes() {
  const paperData = [
    {
      rows: 5,
      rowStyle: { height: "3px", backgroundColor: "rgba(40,160,255)" },
      paperStyles: {
        cursor: "pointer",
        zIndex: 100,
        backgroundColor: "lightblue",
        transform: `rotate(0deg)`,
        borderRadius: "6px",
        "&:hover": {
          border: "2px solid rgba(40,160,255,0.4)",
        },
      },
    },
    {
      paperStyles: {
        zIndex: 1,
        backgroundColor: "rgba(40,160,255)",
        transform: `rotate(-10deg)`,
        borderRadius: "6px",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    {
      paperStyles: {
        zIndex: 0,
        backgroundColor: "rgba(40,100,255)",
        transform: `rotate(10deg)`,
        borderRadius: "6px",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  ];

  const createNotePaper = (indx, rows = 0, rowStyle, paperStyles) => {
    const innerRows = Array(rows).fill(null);
    return (
      <Box
        key={indx}
        // bgcolor={bgColor}
        display={"flex"}
        flexDirection={"column"}
        // gap={4}
        justifyContent={"space-between"}
        flex={1}
        padding={"2rem 1.2rem"}
        // sx={{ transform: `rotate(${rotate})`, padding: "2rem 1.2rem" }}
        sx={paperStyles}
      >
        {innerRows.map((row, indx) => (
          <Box key={indx} width={() => getRowWidth(indx)} sx={rowStyle}></Box>
        ))}
      </Box>
    );
  };

  // get with of row
  const getRowWidth = (index) => {
    if (index === 0) {
      return "50%";
    } else if (index === 2) {
      return "80%";
    } else if (index === 4) {
      return "90%";
    } else return "100%";
  };

  return (
    <Box flex={1}>
      <Box
        position={"relative"}
        // border={"5px solid red"}
        height={"15rem"}
        width={"13rem"}
        margin={"0 auto"}
        display={"flex"}
        borderRadius={"6px"}
      >
        {paperData.map((item, index) =>
          createNotePaper(index, item.rows, item.rowStyle, item.paperStyles)
        )}
      </Box>
    </Box>
  );
}

export default DashBoardNotes;
