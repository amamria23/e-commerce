import { Box, useTheme } from "@mui/material";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import HeroSection from "./components/hero/HeroSection";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <Box>
          <Header1 />
          <Header2 />
          <Header3 />

          <Box
            sx={{
              bgcolor:
                // @ts-ignore
                theme.palette.bgSite.main,
            }}
          >
            <HeroSection />
            <Main />
          </Box>
          <Footer />
          <ScrollToTop />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
