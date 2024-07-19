import { Box } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

function DashBoardNotes() {
  const paperData = [
    {
      rows: 5,
      rowStyle: { height: "3px", backgroundColor: "blue" },
      paperStyles: {
        zIndex: 100,
        backgroundColor: "lightblue",
        transform: `rotate(0deg)`,
      },
    },
    // {
    //   rotate: "10deg",
    //   bgColor: "red",
    //   rows: 5,
    //   zIndex: 10,
    //   paperStyles: {},
    // },
    // {
    //   rotate: "-10deg",
    //   bgColor: "yellow",
    //   rows: 5,
    //   zIndex: 1,
    //   paperStyles: {},
    // },
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
          <Box key={indx} sx={rowStyle}></Box>
        ))}
      </Box>
    );
  };

  return (
    <Box border={"3px solid black"} flex={1}>
      <Box
        position={"relative"}
        border={"5px solid red"}
        height={"15rem"}
        width={"13rem"}
        margin={"0 auto"}
        display={"flex"}
      >
        {paperData.map((item, index) =>
          createNotePaper(index, item.rows, item.rowStyle, item.paperStyles)
        )}
      </Box>
    </Box>
  );
}

export default DashBoardNotes;
