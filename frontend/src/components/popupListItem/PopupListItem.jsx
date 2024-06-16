import {
  List,
  ListItem,
  IconButton,
  ListItemText,
  Card,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function PopupListItem({ item }) {
  return (
    <Card sx={{ mb: 0.4 }}>
      <ListItem
      // secondaryAction={
      //   <IconButton edge="end" aria-label="delete">
      //     <DeleteIcon />
      //   </IconButton>
      // }
      >
        <ListItemText primary={item} />
        <IconButton>
          <Button>Ändra</Button>
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </Card>
  );
}

export default PopupListItem;
