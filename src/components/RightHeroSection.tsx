import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import HeaderName from "./HeaderName";
import TabsMenu from "./TabsMenu";

export default function RightHeroSection() {
  return (
    <Box component={"section"} sx={rightSectionStyle}>
      <HeaderName />
      <Rating max={20} value={20} readOnly />
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
