import {
  ExpandMore,
  Person,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Badge,
  Box,
  Container,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  flexGrow:0.4,
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
    border:"1px solid pink",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: "300px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color:'#777'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    minWidth: "100px",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const options = ["All Categories", "Car", "Clothes", "Electronics"];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header2 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
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

  const theme = useTheme();

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        my: 2,
      }}
    >
      <Stack alignItems={"center"}>
        <ShoppingCartOutlined />
        <Typography sx={{fontSize:12}}>E-commerce</Typography>
      </Stack>
      <Search
        sx={{
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid",
          borderRadius: "22px"
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <div>
          <List
            component="nav"
            aria-label="Device settings"
            // @ts-ignore
            sx={{
              p: 0,
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
              borderTopRightRadius: "22px",
              borderBottomRightRadius: "22px",
              
            }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ p: "5px", "&:hover": { cursor: "pointer" },width:140,
              textAlign: 'center' }}
            >
              <ListItemText secondary={options[selectedIndex]} />
              <ExpandMore />
            </ListItem>
          </List>
          <Menu
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
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
                sx={{ fontSize: "12px" }}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Search>

      <Box>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCart />
          </StyledBadge>
        </IconButton>
        <IconButton>
          <Person />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Header2;
