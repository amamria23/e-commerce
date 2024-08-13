import { ShoppingCartOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";

const ProductDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        gap:2
      }}
    >
      <Box>
        <img
          src="src/t-shirts-react-ecomerce-dev-ali-youtube-channel/1/images.jpg"
          alt="no img"
          width={300}
        />
      </Box>
      <Box sx={{textAlign:{xs:'center', sm:'left'}}}>
        <Typography variant="h6">MEN Fashion </Typography>
        <Typography
          sx={{ my: 0.4, fontSize: 22, color: "crimson" }}
          variant="subtitle1"
        >
          $12.99
        </Typography>
        <Typography variant="body1">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Stack
          direction={"row"}
          sx={{
            justifyContent: {xs:'center', sm:"flex-start"},
            alignItems: "center",
            gap: 2,
            my: 2,
          }}
        >
          {[
            "src/t-shirts-react-ecomerce-dev-ali-youtube-channel/more/1 (5).jpg",
            "src/t-shirts-react-ecomerce-dev-ali-youtube-channel/more/1 (6).jpg",
            "src/t-shirts-react-ecomerce-dev-ali-youtube-channel/more/1 (7).jpg",
          ].map((item) => {
            return (
              <img
                key={item}
                style={{
                  width: 90,
                  height: 100,
                  borderRadius: 5,
                  border: "1px solid #f1f1f1",
                }}
                src={item}
                alt="no img"
              />
            );
          })}
        </Stack>
        <Button
          variant="contained"
          size="small"
          sx={{ textTransform: "Capitalize" }}
        >
          <ShoppingCartOutlined sx={{ mr: 1 }} /> Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
