import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  Facebook,
  Instagram,
  LightModeOutlined,
  Twitter,
} from "@mui/icons-material";
import React from "react";

const options = ["AR", "EN", "FR"];

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        bgcolor: "#2b3445",
        py: 0.5,
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px",
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#d23f57",
              fontSize: "10px",
              fontWeight: "bold",
              borderRadius: "12px",
              color: "#fff",
            }}
            variant="body1"
          >
            Hot
          </Typography>
          <Typography
            sx={{ fontWeight: "300", fontSize: "12px", color: "#fff" }}
            variant="body1"
          >
            Free Express Shopping
          </Typography>
          <Box flexGrow={1}/>
        
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                sx={{ color: "#fff" }}
              >
                <LightModeOutlined fontSize="small" />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                sx={{ color: "#fff" }}
              >
                <DarkModeOutlined fontSize="small" />
              </IconButton>
            )}
          </div>
          <div>
            <List
              component="nav"
              aria-label="Device settings"
              sx={{ p: 0, m: 0.3 }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
                sx={{ "&:hover": { cursor: "pointer" }, p: "0" }}
              >
                <ListItemText
                  sx={{
                    ".MuiTypography-root": { fontSize: "12px", color: "#fff" },
                  }}
                  primary={options[selectedIndex]}
                />
                <ExpandMore sx={{color:'#fff'}} />
              </ListItem>
            </List>
            <Menu
              sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <IconButton sx={{ color: "#fff" }}>
            <Twitter fontSize="small" />
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <Facebook fontSize="small" />
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <Instagram fontSize="small" />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
