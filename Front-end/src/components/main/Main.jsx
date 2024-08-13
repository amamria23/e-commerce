import { Close, ShoppingCartOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import ProductDetails from "./ProductDetails";
import { useGetProductByNameQuery } from "../../Redux/Product";

const Main = () => {
  const AllProduct = "products?populate=*";
  const ProductCategoryMen = "products?populate=*&filters[Category][$eq]=Men";
  const ProductCategoryWomen =
    "products?populate=*&filters[Category][$eq]=Women";

  const theme = useTheme();
  const [mydata, setmydata] = React.useState(AllProduct);
  const [open, setOpen] = React.useState(false);

  const handleAlignment = (event, newValue) => {
    setmydata(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { data, error, isLoading } = useGetProductByNameQuery(mydata);

  if (isLoading) {
    return (
      <Box sx={{ py: 7, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    // @ts-ignore
    return (
      <Box sx={{ py: 7, textAlign: "center" }}>
        <Typography variant="h1">
          {
            // @ts-ignore
            error.error
          }
        </Typography>
      </Box>
    );
  }
  if (data) {
    return (
      <Container sx={{ pb: 4, mt: 2 }}>
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            gap: 5,
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Typography variant="h6">Selected products</Typography>
            <Typography variant="body1" fontWeight={300}>
              All our new arrivals in a exclusive brand section
            </Typography>
          </Box>
          <ToggleButtonGroup
            value={mydata}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            color="error"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233, 69, 96, 0.5) !important",
                color: "#e94560",
                bgcolor: "initial !important",
              },
            }}
          >
            <ToggleButton
              className="myButton"
              value={AllProduct}
              aria-label="left aligned"
              sx={{ color: theme.palette.text.primary }}
            >
              All Products
            </ToggleButton>
            <ToggleButton
              className="myButton"
              value={ProductCategoryMen}
              aria-label="centered"
              sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            >
              MEN Category
            </ToggleButton>
            <ToggleButton
              className="myButton"
              value={ProductCategoryWomen}
              aria-label="right aligned"
              sx={{ color: theme.palette.text.primary }}
            >
              WOMEN Category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            mt: 5,
            flexWrap: "wrap",
            gap: 5,
          }}
        >
          {data.data.map((item) => {
            return (
              <Card key={item.id} className="mycard" sx={{ maxWidth: 285 }}>
                <CardMedia
                  sx={{ height: 230 }}
                  // @ts-ignore
                  image={`${item.attributes.ImageProduct.data[0].attributes.url}`}
                  title="green iguana"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.attributes.TitleProduct}
                    </Typography>
                    <Typography variant="subtitle1">
                      {item.attributes.PriceProduct}$
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {item.attributes.DescriptionProduct}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ justifyContent: "space-between", alignItems: "center" }}
                >
                  <Button
                    variant="text"
                    size="small"
                    sx={{ textTransform: "Capitalize" }}
                    onClick={handleClickOpen}
                  >
                    <ShoppingCartOutlined sx={{ mr: 1 }} /> Add to cart
                  </Button>
                  <Rating
                    name="half-rating-read"
                    defaultValue={item.attributes.Rating}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
            ".MuiPaper-root": {
              minWidth: { xs: "100%", md: 800 },
              py: 2,
              pl: 1,
            },
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", right: 10, top: 0 }}
          >
            <Close
              sx={{
                "&:hover": { color: "red", rotate: "0deg", transition: "0.3s" },
              }}
            />
          </IconButton>
          <ProductDetails />
        </Dialog>
      </Container>
    );
  }
};

export default Main;
