import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const Links = ({ title, position }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        "&:hover": { cursor: "pointer" },
        "&:hover .show": { display: "block" },
        zIndex:2
      }}
    >
      <Typography>{title}</Typography>
      <ExpandMore />
      <Box
        sx={{
          pt: 1,
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Paper sx={{ width: 150, display: "none" }} className="show">
          <nav aria-label="secondary mailbox folders">
            <List
              sx={{ ".MuiTypography-root": { fontSize: 14, fontWeight: 500 } }}
            >
              <ListItem disablePadding>
                <ListItemButton sx={{ p: 0, px: 1.5 }}>
                  <ListItemText primary='Dashboard' />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={{
                  position: "relative",
                  "&:hover .show1": { display: "block" },
                }}
              >
                <ListItemButton
                  component="a"
                  href="#simple-list"
                  sx={{ p: 0, px: 1.5 }}
                >
                  <ListItemText primary='Products' />
                  <KeyboardArrowRightOutlined fontSize="small" />
                </ListItemButton>
                <Box
                  sx={{
                    pl: 0.5,
                    position: "absolute",
                    top: "0",
                    left: position,
                  }}
                >
                  <Paper sx={{ width: 150, display: "none" }} className="show1">
                    <nav aria-label="secondary mailbox folders">
                      <List
                        sx={{
                          ".MuiTypography-root": {
                            fontSize: 14,
                            fontWeight: 500,
                          },
                        }}
                      >
                        <ListItem disablePadding>
                          <ListItemButton sx={{ p: 0, px: 1.5 }}>
                            <ListItemText primary="Add Product" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton
                            component="a"
                            href="#simple-list"
                            sx={{ p: 0, px: 1.5 }}
                          >
                            <ListItemText primary="Show Product" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  href="#simple-list"
                  sx={{ p: 0, px: 1.5 }}
                >
                  <ListItemText primary='Orders' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  href="#simple-list"
                  sx={{ p: 0, px: 1.5 }}
                >
                  <ListItemText primary='Profile' />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};

export default Links;
