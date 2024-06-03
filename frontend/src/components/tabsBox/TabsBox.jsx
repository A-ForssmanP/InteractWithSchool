import { Box, Tabs, Tab } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { useState } from "react";

function TabsBox({ children }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", bgcolor: "red" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab icon={<PhoneIcon />} />
        <Tab label="Item Two" />
      </Tabs>
      {children[value]}
    </Box>
  );
}

export default TabsBox;
