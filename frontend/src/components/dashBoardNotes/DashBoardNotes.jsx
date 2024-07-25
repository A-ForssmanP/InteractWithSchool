import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import DashBoardNotesTextField from "../dashBoardNotesTextField/DashBoardNotesTextField";

function DashBoardNotes() {
  const [textFieldOpen, setTextFieldOpen] = useState(false);
  const paperData = [
    {
      rows: 5,
      rowStyle: { height: "3px", backgroundColor: "rgba(40,160,255)" },
      paperStyles: {
        zIndex: 100,
        backgroundColor: "lightblue",
        transform: `rotate(0deg)`,
        borderRadius: "6px",
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

  // function for create the papers
  const createNotePaper = (indx, rows = 0, rowStyle, paperStyles) => {
    const innerRows = Array(rows).fill(null);
    return (
      <Box
        key={indx}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        flex={1}
        padding={".7rem 1rem"}
        sx={paperStyles}
      >
        {innerRows.map((row, indx) => (
          <Box key={indx} width={() => getRowWidth(indx)} sx={rowStyle}></Box>
        ))}
      </Box>
    );
  };

  // get width of row
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
    <Box
      flex={1}
      display={"flex"}
      flexDirection={"column"}
      position={"relative"}
    >
      <Typography variant="h4" fontSize={24} textAlign={"center"}>
        Anteckningar
      </Typography>
      <Box
        position={"relative"}
        height={"6rem"}
        width={"6rem"}
        margin={"5% auto"}
        display={"flex"}
        borderRadius={"6px"}
      >
        {paperData.map((item, index) =>
          createNotePaper(index, item.rows, item.rowStyle, item.paperStyles)
        )}
      </Box>
      {textFieldOpen && (
        <DashBoardNotesTextField handleClose={() => setTextFieldOpen(false)} />
      )}

      <Button
        variant="outlined"
        onClick={() => setTextFieldOpen(true)}
        sx={{
          width: "100%",
          maxWidth: { sm: "70%", md: "40%" },
          margin: "0 auto",
          bgcolor: "rgba(255,255,255,0.6)",
        }}
      >
        Öppna
      </Button>
    </Box>
  );
}

export default DashBoardNotes;
