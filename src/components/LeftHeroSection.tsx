import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function LeftHeroSection() {
  return (
    <Box component={"section"} sx={leftSectionStyle}>
      <Avatar sx={avatarStyle} alt="John Karlos De Guzman" src={photoUrl} />
      <Typography sx={nameStyle}>DE GUZMAN, John Karlos D.</Typography>
      <Typography sx={titleStyle}>Software Engineer</Typography>
    </Box>
  );
}

const leftSectionStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const nameStyle = {
  fontWeight: "bold",
  fontSize: "1.15rem",
  paddingTop: 4,
};

const titleStyle = {
  fontWeight: "light",
  fontSize: "1.15rem",
  color: "gray",
};

const avatarStyle = { height: "250px", width: "250px" };

const photoUrl = `https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-1/518335244_24166036493061985_3575601359116319271_n.jpg?stp=c116.169.1304.1304a_dst-jpg_s480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGo22FQ9GmVh6TTgVoSkcTB_WR_mDeyLo39ZH-YN7IujVG5N4JKXPtb83wgRuZYLt8nRGiIXjtipzobTqO22BkM&_nc_ohc=jlhLPqAjw0oQ7kNvwHaaXiz&_nc_oc=AdmOjKQjTgzupy_h4C2FYodIl-M87ZNjHm2OvHIpLEO8eEDNIPul_9vOiQqxQXoI6c4&_nc_zt=24&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=sgKpIWWNTk5Z2nQ1J3W9fA&oh=00_Afae9EfgUN0moTI7eKscDBHIKBdKfZxZUFPEDskdYsMaMQ&oe=68D1D387`;
