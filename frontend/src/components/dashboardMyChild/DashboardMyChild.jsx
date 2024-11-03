import { Box, Typography, List, ListItem, useTheme } from "@mui/material";

function DashboardMyChild({ names }) {
  const theme = useTheme();
  console.log(theme);
  return (
    <Box display="flex" flexDirection="column">
      <Typography
        variant="h4"
        fontSize={24}
        textAlign="center"
        mb={1}
        p={1}
        sx={{ fontFamily: "Roboto,Helvetica,Arial,sans-serif" }}
      >
        Mina barn
      </Typography>
      <List
        sx={{
          display: "flex",
          borderTop: "1px solid grey",
          borderBottom: "1px solid grey",
        }}
      >
        {names.map((name, index) => {
          return (
            <ListItem
              key={index}
              sx={{
                color: theme.palette.grey[800],
                fontSize: 21,
                fontStyle: "italic",
              }}
            >
              {name}
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default DashboardMyChild;
