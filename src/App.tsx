import Container from "@mui/material/Container";
import Header from "./components/Header";
import LeftHeroSection from "./components/LeftHeroSection";
import RightHeroSection from "./components/RightHeroSection";

export default function App() {
  return (
    <>
      <Header />
      <Container sx={containerStyle}>
        <LeftHeroSection />
        <RightHeroSection />
      </Container>
    </>
  );
}

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "90vh",
};
