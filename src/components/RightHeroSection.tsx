import Box from "@mui/material/Box";
import HeaderName from "./HeaderName";
import Ratings from "./Ratings";
import TabsMenu from "./TabsMenu";

export default function RightHeroSection() {
  return (
    <Box component={"section"} sx={rightSectionStyle}>
      <HeaderName />
      <Ratings />
      <TabsMenu />
    </Box>
  );
}

const rightSectionStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "450px",
};
