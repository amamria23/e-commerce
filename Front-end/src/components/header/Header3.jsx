import {
  Close,
  ExpandMore,
  KeyboardArrowRightOutlined,
  LaptopChromebook,
  LibraryBooks,
  SportsEsports,
  TwoWheeler,
  Window,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Links from "./Links";

const Header3 = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 6,
      }}
    >
      <Box>
        <Button
          sx={{
            width: 200,
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.secondary,
          }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Window />
          <Typography sx={{ textTransform: "capitalize", p: 0, ml: 1 }}>
            Categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightOutlined />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          // @ts-ignore
          sx={{
            ".MuiList-root": {
              width: 200,
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
              justifyContent: "space-between",
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <TwoWheeler />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebook />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LibraryBooks />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsports />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
      {useMediaQuery("(max-width:1100px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}
      {useMediaQuery("(min-width:1100px)") && (
        <Stack direction={'row'} spacing={3}>
          <Links title={'Home'} position={'100%'}/>
          <Links title={'Mega menu'} position={'100%'}/>
          <Links title={'Full screen menu'} position={'100%'}/>
          <Links title={'Pages'} position={'100%'}/>
          <Links title={'User account'} position={'100%'}/>
          <Links title={'Vendor Account'} position={'-105%'}/>
        </Stack>

      )}
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{ ".MuiPaper-root": { height: "100%", position: "relative" } }}
      >
        <Box
          sx={{
            width: 400,
            height: 400,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -70%)",
          }}
        >
          <IconButton
            onClick={toggleDrawer("top", false)}
            sx={{ position: "absolute", right: 10, top: 0 }}
          >
            <Close
              sx={{
                "&:hover": { color: "red", rotate: "0deg", transition: "0.3s" },
              }}
            />
          </IconButton>
          <Box sx={{ mt: 10 }}>
            {[
              { main: "Home", sub: ["Link1", "Link2", "Link3"] },
              { main: "Mega menu", sub: ["Link1", "Link2", "Link3"] },
              { main: "Full screen menu", sub: ["Link1", "Link2", "Link3"] },
              { main: "Pages", sub: ["Link1", "Link2", "Link3"] },
              { main: "User account", sub: ["Link1", "Link2", "Link3"] },
              { main: "Vendor Account", sub: ["Link1", "Link2", "Link3"] },
            ].map((item) => {
              return (
                <Accordion
                  key={item.main}
                  elevation={0}
                  sx={{ bgcolor: "initial" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>{item.main}</Typography>
                  </AccordionSummary>

                  <List sx={{ py: 0, my: 0 }}>
                    {item.sub.map((index) => {
                      return (
                        <ListItem key={index} sx={{ py: 0, my: 0 }}>
                          <ListItemButton>
                            <ListItemText primary={index} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Accordion>
              );
            })}
          </Box>
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
