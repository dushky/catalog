import React, { useContext } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { makeStyles } from "@mui/styles";
import Checkbox from "@mui/material/Checkbox";
import FilterContext from "../../store/filter-context";

const useStyles = makeStyles(() => ({
  drawer: {
    width: 240,
    zIndex: 0,
  },
  drawerPaper: {
    width: 240,
  },
  drawerButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "grey",
    color: "rgb(255,255,255,0.87)",
    padding: "5px 10px",
    marginLeft: "-8px",
  },
}));

const MyDrawer = () => {
  const ctx = useContext(FilterContext);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer}>
        <div className={classes.drawerButton}>
          filter
          <FilterAltIcon />
        </div>
      </IconButton>
      <Drawer
        className={classes.drawer}
        open={open}
        anchor="left"
        onClose={toggleDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          <ListItem>
            <ListItemText primary="Categories" />
          </ListItem>
          {ctx.categories.map((category) => {
            return (
              <ListItem key={category.id}>
                <ListItemText primary={category.name} />

                <Checkbox
                  checked={ctx.filteredCategories.includes(category.id)}
                  inputProps={{ "aria-label": "controlled" }}
                  onChange={() => ctx.onChangeFilter(category.id)}
                />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default MyDrawer;
