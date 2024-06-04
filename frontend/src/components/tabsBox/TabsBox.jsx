import { Box, Tabs, Tab } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { useState } from "react";

function TabsBox({ children }) {
  const [value, setValue] = useState(0);
  const [childrenToRender, setChildrenToRender] = useState(children);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        border: "2px solid red",
      }}
    >
      <Tabs value={value} onChange={handleChange} centered>
        <Tab icon={<PhoneIcon />} />
        <Tab label="Item Two" />
      </Tabs>
      <Box>{childrenToRender[value]}</Box>
    </Box>
  );
}

export default TabsBox;
