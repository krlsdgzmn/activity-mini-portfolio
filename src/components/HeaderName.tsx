import LocationPin from "@mui/icons-material/LocationPin";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function HeaderName() {
  return (
    <>
      <Box component={"div"} sx={headerNameStyle}>
        <Typography sx={nameStyle}>DE GUZMAN, John Karlos D.</Typography>
        <LocationPin sx={locationIconStyle} />
        <Typography sx={locationNameStyle}>CALOOCAN</Typography>
      </Box>

      <Typography sx={titleStyle}>Software Engineer</Typography>
    </>
  );
}

const headerNameStyle = {
  display: "flex",
  gap: 1,
};

const locationIconStyle = {
  height: 20,
  color: "red",
  marginTop: "5px",
};

const locationNameStyle = {
  fontWeight: "bold",
  fontSize: "0.75em",
  color: "gray",
  marginTop: "5px",
};

const nameStyle = {
  fontWeight: "bold",
  fontSize: "1.5rem",
};

const titleStyle = {
  fontWeight: "light",
  fontSize: "1.25rem",
  color: "gray",
  paddingBottom: 2,
};
