import {
  AccessAlarmOutlined,
  CreditScoreOutlined,
  ElectricBolt,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const IconSection = () => {
  const theme=useTheme()
  return (
    <Container sx={{ mt: 2, bgcolor: theme.palette.mode=='dark'? '#000':'#fff' }}>
      <Stack
        direction={"row"}
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        flexWrap={"wrap"}
      >
        <MyBox
          icon={<ElectricBolt />}
          title={"Fast delivery"}
          SubTitle={"Start from 10$"}
        />
        <MyBox
          icon={<CreditScoreOutlined />}
          title={"Money Guarantee"}
          SubTitle={"7 days Back"}
        />
        <MyBox
          icon={<WorkspacePremiumOutlined />}
          title={"365 Days"}
          SubTitle={"For free return"}
        />
        <MyBox
          icon={<AccessAlarmOutlined />}
          title={"Payment"}
          SubTitle={"Secure System"}
        />
      </Stack>
    </Container>
  );
};

export default IconSection;

const MyBox = ({ icon, title, SubTitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 220,
        display: "flex",
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
        alignItems: "center",
        gap: 3,
        flexGrow: 1,
        py: 1,
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          variant="body1"
          sx={{
            // @ts-ignore
            color: theme.palette.text.secondary,
            fontWeight: 300,
          }}
        >
          {SubTitle}
        </Typography>
      </Box>
    </Box>
  );
};
