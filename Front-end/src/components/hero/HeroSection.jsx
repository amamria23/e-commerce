import { KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Swiper.css";

// import required modules
import { Pagination } from "swiper/modules";
import IconSection from "./IconSection";

const HeroSection = () => {
  return (
    <Container >
      <Box sx={{pt:2, mt: 3, display: "flex", gap: "5px" }}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          style={{ height: "405px", borderRadius: "2.5px" }}
        >
          {[
            {
              title:'men',
              linlImg:
                "src/t-shirts-react-ecomerce-dev-ali-youtube-channel/banner-15.jpg",
            },
            {
              title: "Women",
              linlImg:
                "src/t-shirts-react-ecomerce-dev-ali-youtube-channel/banner-25.jpg",
            },
          ].map((item) => {
            return(
              <SwiperSlide key={item.title}>
              <img
                src={item.linlImg}
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: "10%",
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "#222", textTransform: "uppercase" }}
                >
                  LifeStyle Collection
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#222",
                    fontWeight: "500",
                    my: 1,
                    textTransform: "uppercase",
                  }}
                >
                  {item.title}
                </Typography>
                <Stack
                  sx={{ alignItems: "center", justifyContent: "center" }}
                  direction={"row"}
                  spacing={1}
                >
                  <Typography
                    variant="h4"
                    sx={{ color: "#222", textTransform: "uppercase" }}
                  >
                    Sale up to
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: "#d23f57", textTransform: "uppercase" }}
                  >
                    30% off
                  </Typography>
                </Stack>
                <Typography variant="caption" sx={{ color: "#2b3445" }}>
                  Get free shipping on orders over $99.00
                </Typography>
                <Box mt={2}>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "uppercase",
                      color: "white",
                      fontWeight: "600",
                      bgcolor: "#222",
                      "&:hover": { bgcolor: "#444" },
                    }}
                  >
                    Shop now
                  </Button>
                </Box>
              </Box>
            </SwiperSlide>
            )
          })}
          
        </Swiper>
        
        <Box
          sx={{
            minWidth: "25%",
            height: "400px",
            display: { xs: "none", md: "block" },
          }}
        >
          <Box sx={{ height: "50%", position: "relative" }}>
            <img
              style={{ height: "100%", width: "100%", borderRadius: "3px" }}
              src="src/t-shirts-react-ecomerce-dev-ali-youtube-channel/banner-17.jpg"
              alt=""
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 20,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2b3445",
                  fontSize: "18px",
                  textTransform: "uppercase",
                }}
              >
                New Arrivals
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2b3445",
                  fontSize: "16px",
                  mt: 1,
                  textTransform: "uppercase",
                }}
              >
                Summer
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#2b3445", textTransform: "uppercase" }}
              >
                Sale 20% Off
              </Typography>
        
              <Link
                underline="none"
                href="#"
                sx={{
                  "&:hover": { color: "#d23f57" },
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                }}
              >
                Shop Now
                <KeyboardArrowRight sx={{ fontSize: "13px" }} />
              </Link>
            </Box>
          </Box>
          <Box sx={{ height: "50%", position: "relative" }}>
            <img
              style={{
                height: "100%",
                width: "100%",
                marginTop: "5px",
                borderRadius: "3px",
              }}
              src="src/t-shirts-react-ecomerce-dev-ali-youtube-channel/banner-16.jpg"
              alt=""
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 20,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2b3445",
                  fontSize: "18px",
                  textTransform: "uppercase",
                }}
              >
                Gamming 4k
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2b3445",
                  fontSize: "16px",
                  mt: 1,
                  textTransform: "uppercase",
                }}
              >
                Desktops &
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#2b3445", textTransform: "uppercase" }}
              >
                Laptops
              </Typography>
        
              <Link
                underline="none"
                href="#"
                sx={{
                  "&:hover": { color: "#d23f57" },
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                }}
              >
                Shop Now
                <KeyboardArrowRight sx={{ fontSize: "13px" }} />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box >
      <IconSection />
    </Container>
  );
};

export default HeroSection;
